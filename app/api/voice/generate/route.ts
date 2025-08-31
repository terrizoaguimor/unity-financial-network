/**
 * Voice Generation API Route
 * 
 * Generates voice audio using ElevenLabs for:
 * - Policy notifications
 * - Training content
 * - Customer communications
 * 
 * @route POST /api/voice/generate
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateSpeech, VoiceProfiles } from '@/lib/elevenlabs-api';

export async function POST(request: NextRequest) {
  try {
    const { text, voiceProfile = 'ALEX_SUPPORT', language = 'es' } = await request.json();
    
    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }
    
    // Generate speech
    const audioBuffer = await generateSpeech(
      text,
      voiceProfile as keyof typeof VoiceProfiles
    );
    
    // Return audio as base64
    const base64Audio = audioBuffer.toString('base64');
    
    return NextResponse.json({
      success: true,
      audio: base64Audio,
      format: 'mp3',
      voiceProfile,
      language
    });
    
  } catch (error) {
    console.error('Voice generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate voice' },
      { status: 500 }
    );
  }
}