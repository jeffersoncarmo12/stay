import { createServer } from 'http';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  const clientPath = join(__dirname, 'dist', 'client');
  
  // Servir arquivos estáticos
  let filePath = join(clientPath, req.url === '/' ? 'index.html' : req.url);
  
  try {
    const content = readFileSync(filePath);
    
    // Definir content-type baseado na extensão
    const ext = filePath.split('.').pop();
    const contentTypes = {
      'html': 'text/html',
      'js': 'application/javascript',
      'css': 'text/css',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'webp': 'image/webp',
      'svg': 'image/svg+xml',
    };
    
    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
    res.end(content);
  } catch (err) {
    // Se não encontrar, servir index.html (SPA routing)
    try {
      const indexPath = join(clientPath, 'index.html');
      const content = readFileSync(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    } catch (indexErr) {
      res.writeHead(404);
      res.end('Not Found');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
