import { createServer } from 'http';
import { readFileSync, existsSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

console.log('Starting server...');
console.log('Current directory:', __dirname);

const clientPath = join(__dirname, 'dist', 'client');
console.log('Client path:', clientPath);
console.log('Client path exists:', existsSync(clientPath));

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = createServer((req, res) => {
  console.log(`\n[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
  let pathname = req.url.split('?')[0];
  if (pathname === '/') pathname = '/index.html';
  
  let filePath = join(clientPath, pathname);
  
  console.log('Trying to serve:', filePath);
  console.log('File exists:', existsSync(filePath));
  
  // Se não existir, tentar index.html (SPA routing)
  if (!existsSync(filePath) || (existsSync(filePath) && statSync(filePath).isDirectory())) {
    filePath = join(clientPath, 'index.html');
    console.log('Fallback to index.html:', filePath);
  }
  
  try {
    const content = readFileSync(filePath);
    const ext = extname(filePath).toLowerCase();
    const mimeType = mimeTypes[ext] || 'application/octet-stream';
    
    res.writeHead(200, {
      'Content-Type': mimeType,
      'Content-Length': content.length,
    });
    res.end(content);
    
    console.log(`✓ Served ${filePath} (${content.length} bytes, ${mimeType})`);
  } catch (error) {
    console.error(`✗ Error serving ${filePath}:`, error.message);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n\nPath: ' + filePath + '\nError: ' + error.message);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`\n🚀 Server running on http://${HOST}:${PORT}`);
  console.log(`📁 Serving from: ${clientPath}`);
  console.log(`\nWaiting for requests...\n`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});
