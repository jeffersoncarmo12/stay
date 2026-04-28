# 🚀 Guia de Deploy para Hostinger via GitHub

Este guia explica como fazer o deploy automático do seu projeto React na Hostinger usando GitHub.

## 📋 Pré-requisitos

- Conta na Hostinger com plano de hospedagem web
- Repositório GitHub com o código do projeto
- Acesso ao painel de controle (hPanel)

## 🔗 Configuração do Deploy Automático via GitHub

### Passo 1: Conectar GitHub à Hostinger

1. Acesse o **hPanel** da Hostinger
2. Vá em **Websites** → Clique em **Add website**
3. Selecione **Node.js Web App**
4. Clique em **Connect to GitHub**
5. Autorize a Hostinger a acessar seu repositório
6. Selecione o repositório do projeto

### Passo 2: Configurar Build Settings

Na tela "Settings and redeploy", configure:

```
Framework preset: Vite
Branch: main (ou sua branch principal)
Node version: 22.x
Root directory: /
Build command: npm run build
Package manager: npm
Output directory: dist
```

### Passo 3: Salvar e Deploy

1. Clique em **Save and redeploy**
2. Aguarde o build completar (pode levar 2-5 minutos)
3. Acesse seu domínio para verificar

## 🔄 Deploy Automático

Após a configuração inicial, **cada push para a branch main** irá:
1. Automaticamente iniciar um novo build
2. Fazer deploy das alterações
3. Atualizar o site em produção

## 📁 Estrutura do Projeto (Importante!)

O projeto está configurado com:
- `index.html` na raiz (necessário para Vite)
- `src/main.tsx` como entry point
- Build output em `dist/`
- `.htaccess` para roteamento SPA

## ✅ Verificação do Deploy

1. Acesse **Deployments** no hPanel
2. Verifique o status do último deployment
3. Se houver erro, clique em "View logs" para ver detalhes
4. Acesse seu domínio para testar

## 🔧 Solução de Problemas

### Build falha na Hostinger

**Erro: "Could not resolve entry module"**
- Verifique se o `index.html` está na raiz do repositório
- Confirme que o `src/main.tsx` existe

**Erro: "npm install failed"**
- O arquivo `.npmrc` com `legacy-peer-deps=true` resolve isso
- Verifique se o arquivo foi commitado no GitHub

### Erro 403 Forbidden após deploy

**Causa**: Configuração de roteamento
- Verifique se o `.htaccess` está na pasta `public/`
- O Vite copia automaticamente arquivos de `public/` para `dist/`

### Site mostra página em branco

**Causa**: Erro de JavaScript ou caminhos incorretos
- Acesse o console do navegador (F12)
- Verifique os logs de deployment na Hostinger
- Confirme que o build completou com sucesso

## 📝 Checklist de Deploy

Antes de fazer push para o GitHub:

- [ ] Arquivo `index.html` na raiz do projeto
- [ ] Arquivo `src/main.tsx` existe
- [ ] Arquivo `.npmrc` com `legacy-peer-deps=true`
- [ ] Arquivo `public/.htaccess` configurado
- [ ] Script `build` no `package.json` aponta para config correta
- [ ] Todas as alterações commitadas

## 🚀 Comandos Git para Deploy

```bash
# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Configuração para deploy na Hostinger"

# Enviar para GitHub (isso inicia o deploy automático)
git push origin main
```

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça suas alterações no código
2. Commit e push para o GitHub:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```
3. A Hostinger detecta automaticamente e faz o redeploy
4. Aguarde 2-5 minutos para o build completar

## 📊 Monitoramento

No hPanel da Hostinger:
- **Deployments**: Veja histórico de deploys
- **Runtime logs**: Logs em tempo real da aplicação
- **Performance**: Métricas de uso e velocidade

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs de deployment no hPanel
2. Consulte a documentação da Hostinger
3. Entre em contato com o suporte da Hostinger

---

**Nota**: Este projeto foi otimizado para deploy automático via GitHub na Hostinger usando Vite como framework.

### Opção A: Via File Manager (Recomendado para iniciantes)

1. Acesse o **hPanel** da Hostinger
2. Vá em **Websites** → Selecione seu site
3. Clique em **File Manager**
4. Navegue até a pasta `public_html/` (ou a pasta raiz do seu domínio)
5. **IMPORTANTE**: Delete todos os arquivos existentes na pasta (exceto `.htaccess` se já existir)
6. Faça upload de **TODOS** os arquivos da pasta `dist/`:
   - Selecione todos os arquivos dentro de `dist/`
   - Arraste para o File Manager ou use o botão "Upload"
   - Aguarde o upload completar

### Opção B: Via FTP

1. No hPanel, vá em **Files** → **FTP Accounts**
2. Crie uma conta FTP ou use as credenciais existentes
3. Use um cliente FTP (FileZilla, WinSCP, etc.)
4. Conecte-se ao servidor
5. Navegue até `public_html/`
6. Faça upload de todos os arquivos da pasta `dist/`

### Opção C: Via Git (Node.js Web App)

1. No hPanel, vá em **Add website** → **Node.js Web App**
2. Configure o repositório Git
3. Adicione os comandos de build:
   ```bash
   npm install
   npm run build:hostinger
   ```
4. Configure o diretório de saída como `dist/`

## ⚙️ Passo 4: Configuração do .htaccess

O arquivo `.htaccess` já está incluído no build e será copiado automaticamente.

Se precisar criar manualmente:

1. No File Manager, crie um arquivo `.htaccess` na raiz do `public_html/`
2. Copie o conteúdo do arquivo `public/.htaccess` deste projeto

## ✅ Passo 5: Verificação

1. Acesse seu domínio no navegador
2. Teste a navegação entre páginas
3. Verifique se as imagens e estilos carregam corretamente
4. Teste em diferentes dispositivos

## 🔧 Solução de Problemas

### Erro 403 Forbidden
- **Causa**: Permissões incorretas ou falta do arquivo index.html
- **Solução**: 
  - Verifique se o `index.html` está na raiz do `public_html/`
  - Ajuste permissões: arquivos 644, pastas 755

### Erro 404 nas rotas
- **Causa**: `.htaccess` não está funcionando
- **Solução**:
  - Verifique se o arquivo `.htaccess` está presente
  - Confirme que o mod_rewrite está ativo (geralmente está na Hostinger)

### Página em branco
- **Causa**: Caminhos de assets incorretos
- **Solução**:
  - Verifique o console do navegador (F12)
  - Confirme que todos os arquivos da pasta `dist/` foram enviados

### CSS não carrega
- **Causa**: Arquivos CSS não foram enviados ou caminhos incorretos
- **Solução**:
  - Verifique se a pasta `assets/` foi enviada completamente
  - Limpe o cache do navegador (Ctrl+Shift+R)

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código
2. Execute `npm run build:hostinger`
3. Faça upload dos novos arquivos da pasta `dist/`
4. Substitua os arquivos antigos

## 📊 Otimizações Incluídas

✅ Minificação de JS e CSS
✅ Code splitting automático
✅ Compressão Gzip
✅ Cache de assets
✅ Roteamento SPA
✅ Segurança básica (headers)

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs de erro no hPanel
2. Consulte a documentação da Hostinger
3. Entre em contato com o suporte da Hostinger

---

**Nota**: Este projeto foi convertido de TanStack Start (SSR) para SPA estático para compatibilidade com hospedagem compartilhada da Hostinger.
