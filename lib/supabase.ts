/**
 * Supabase Client Configuration
 * 
 * This module configures and exports Supabase clients for database operations.
 * Supabase provides backend services including:
 * - PostgreSQL database
 * - Real-time subscriptions
 * - Authentication
 * - File storage
 * - Vector embeddings for AI
 * 
 * @module lib/supabase
 */

import { createClient } from '@supabase/supabase-js';

// Environment variables validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Public Supabase client for client-side operations
 * Uses anon key with Row Level Security (RLS)
 */
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

/**
 * Admin Supabase client for server-side operations
 * Uses service role key to bypass RLS
 * WARNING: Only use in server-side code, never expose to client
 */
export const supabaseAdmin = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

/**
 * Database Tables Interface
 * Define your database schema types here
 */
export interface Database {
  public: {
    Tables: {
      agents: {
        Row: {
          id: string;
          email: string;
          name: string;
          phone?: string;
          territory?: string;
          tier: 'bronze' | 'silver' | 'gold' | 'platinum';
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['agents']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['agents']['Insert']>;
      };
      policies: {
        Row: {
          id: string;
          agent_id: string;
          client_name: string;
          policy_type: 'life' | 'auto' | 'home' | 'health' | 'business';
          premium: number;
          status: 'active' | 'pending' | 'expired' | 'cancelled';
          created_at: string;
          expires_at: string;
        };
        Insert: Omit<Database['public']['Tables']['policies']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['policies']['Insert']>;
      };
      commissions: {
        Row: {
          id: string;
          agent_id: string;
          policy_id: string;
          amount: number;
          status: 'pending' | 'paid' | 'failed';
          period: string;
          paid_at?: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['commissions']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['commissions']['Insert']>;
      };
      leads: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          source: 'website' | 'whatsapp' | 'facebook' | 'referral';
          status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
          assigned_to?: string;
          metadata?: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['leads']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['leads']['Insert']>;
      };
      whatsapp_conversations: {
        Row: {
          id: string;
          phone_number: string;
          lead_id?: string;
          agent_id?: string;
          status: 'bot' | 'human' | 'closed';
          messages: Array<{
            role: 'user' | 'assistant';
            content: string;
            timestamp: string;
          }>;
          metadata?: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['whatsapp_conversations']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['whatsapp_conversations']['Insert']>;
      };
    };
  };
}

/**
 * Supabase Service Functions
 * Common database operations used throughout the application
 */

/**
 * Get all agents with their stats
 * @returns Promise with agents data including commission totals and policy counts
 */
export async function getAgentsWithStats() {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { data, error } = await supabase
    .from('agents')
    .select(`
      *,
      policies:policies(count),
      commissions:commissions(amount)
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Create a new lead from WhatsApp or web form
 * @param lead - Lead information
 * @returns Promise with created lead data
 */
export async function createLead(lead: Database['public']['Tables']['leads']['Insert']) {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { data, error } = await supabase
    .from('leads')
    .insert(lead)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Get real-time subscription for WhatsApp conversations
 * @param callback - Function to call when conversation updates
 * @returns Subscription object
 */
export function subscribeToWhatsAppConversations(callback: (payload: any) => void) {
  if (!supabase) throw new Error('Supabase not configured');
  
  return supabase
    .channel('whatsapp_conversations_changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'whatsapp_conversations'
      },
      callback
    )
    .subscribe();
}

/**
 * Store WhatsApp message in database
 * @param phoneNumber - Sender's phone number
 * @param message - Message content
 * @param role - Message sender role
 */
export async function storeWhatsAppMessage(
  phoneNumber: string,
  message: string,
  role: 'user' | 'assistant'
) {
  if (!supabaseAdmin) throw new Error('Supabase admin not configured');
  
  // Find or create conversation
  const { data: conversation, error: convError } = await supabaseAdmin
    .from('whatsapp_conversations')
    .select()
    .eq('phone_number', phoneNumber)
    .eq('status', 'bot')
    .single();

  if (convError && convError.code !== 'PGRST116') {
    throw convError;
  }

  const newMessage = {
    role,
    content: message,
    timestamp: new Date().toISOString()
  };

  if (conversation) {
    // Update existing conversation
    const { error } = await supabaseAdmin
      .from('whatsapp_conversations')
      .update({
        messages: [...conversation.messages, newMessage],
        updated_at: new Date().toISOString()
      })
      .eq('id', conversation.id);

    if (error) throw error;
  } else {
    // Create new conversation
    const { error } = await supabaseAdmin
      .from('whatsapp_conversations')
      .insert({
        phone_number: phoneNumber,
        status: 'bot',
        messages: [newMessage]
      });

    if (error) throw error;
  }
}