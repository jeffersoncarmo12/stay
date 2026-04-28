import { writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

console.log('Creating index.html...');

const distClient = './dist/client';

// Encontrar os arquivos JS e CSS gerados
const files = readdirSync(join(distClient, 'assets'));
const jsFiles = files.filter(f => f.endsWith('.js') && !f.includes('legacy'));
const cssFiles = files.filter(f => f.endsWith('.css'));

console.log('Found JS files:', jsFiles);
console.log('Found CSS files:', cssFiles);

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stay Empresas — Ecossistema de tecnologia para o mercado imobiliário</title>
  <meta name="description" content="Holding de tecnologia, mídia e educação que conecta corretores, imobiliárias e incorporadoras.">
  ${cssFiles.map(css => `<link rel="stylesheet" href="/assets/${css}">`).join('\n  ')}
</head>
<body>
  <div id="root"></div>
  ${jsFiles.map(js => `<script type="module" src="/assets/${js}"></script>`).join('\n  ')}
</body>
</html>`;

writeFileSync(join(distClient, 'index.html'), html);
console.log('✓ index.html created successfully!');
