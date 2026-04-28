import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const server = createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  
  const clientPath = join(__dirname, 'dist', 'client');
  
  // Limpar URL
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';
  
  let filePath = join(clientPath, urlPath);
  
  // Verificar se arquivo existe
  if (!existsSync(filePath)) {
    // Se não existir, tentar servir index.html (SPA routing)
    filePath = join(clientPath, 'index.html');
  }
  
  try {
    const content = readFileSync(filePath);
    
    // Definir content-type baseado na extensão
    const ext = filePath.split('.').pop().toLowerCase();
    const contentTypes = {
      'html': 'text/html; charset=utf-8',
      'js': 'application/javascript; charset=utf-8',
      'css': 'text/css; charset=utf-8',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'webp': 'image/webp',
      'svg': 'image/svg+xml',
      'ico': 'image/x-icon',
      'json': 'application/json',
    };
    
    const contentType = contentTypes[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Cache-Control': ext === 'html' ? 'no-cache' : 'public, max-age=31536000'
    });
    res.end(content);
    
    console.log(`✓ Served: ${filePath}`);
  } catch (err) {
    console.error(`✗ Error serving ${filePath}:`, err.message);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
  console.log(`📁 Serving files from: ${join(__dirname, 'dist', 'client')}`);
});
