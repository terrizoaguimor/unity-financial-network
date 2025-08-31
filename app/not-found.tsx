export default function NotFound() {
  return (
    <html>
      <body>
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <a href="/en" style={{ color: 'blue', textDecoration: 'underline' }}>
            Go to English site
          </a>
          {' | '}
          <a href="/es" style={{ color: 'blue', textDecoration: 'underline' }}>
            Ir al sitio en español
          </a>
        </div>
      </body>
    </html>
  );
}