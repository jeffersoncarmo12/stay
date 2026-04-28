# 🚀 Deploy Automático na Hostinger via GitHub

## ✅ Projeto Configurado!

Seu projeto está pronto para deploy automático na Hostinger. Todos os arquivos necessários foram criados.

## 📋 Arquivos Criados/Modificados

- ✅ `index.html` - Entry point do Vite
- ✅ `src/main.tsx` - Aplicação React
- ✅ `vite.config.hostinger.ts` - Configuração de build
- ✅ `public/.htaccess` - Roteamento SPA
- ✅ `.npmrc` - Resolve conflitos de dependências
- ✅ `.gitignore` - Ignora arquivos desnecessários
- ✅ `package.json` - Script de build atualizado

## 🔧 Configuração na Hostinger

### Passo 1: Fazer Push para o GitHub

```bash
git add .
git commit -m "Configuração para deploy na Hostinger"
git push origin main
```

### Passo 2: Conectar GitHub na Hostinger

1. Acesse [hPanel da Hostinger](https://hpanel.hostinger.com)
2. Clique em **Add website**
3. Selecione **Node.js Web App**
4. Clique em **Connect to GitHub**
5. Autorize e selecione seu repositório

### Passo 3: Configurar Build Settings

Use EXATAMENTE estas configurações:

```
Framework preset: Vite
Branch: main
Node version: 22.x
Root directory: /
Build command: npm run build
Package manager: npm
Output directory: dist
```

### Passo 4: Deploy

1. Clique em **Save and redeploy**
2. Aguarde 2-5 minutos
3. Acesse seu domínio

## 🔄 Atualizações Futuras

Cada vez que você fizer push para o GitHub, a Hostinger automaticamente:
1. Detecta as alterações
2. Executa `npm install`
3. Executa `npm run build`
4. Faz deploy do conteúdo da pasta `dist/`

```bash
# Workflow normal
git add .
git commit -m "Suas alterações"
git push origin main
# Deploy automático acontece!
```

## 🐛 Solução de Problemas

### Build falha com erro de dependências

O arquivo `.npmrc` já está configurado com `legacy-peer-deps=true` para resolver isso.

### Erro 403 Forbidden

- Aguarde 2-3 minutos após o deploy
- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se o deploy completou com sucesso no hPanel

### Página em branco

- Abra o console do navegador (F12)
- Verifique os logs de deployment no hPanel → Deployments
- Confirme que o build completou sem erros

### Rotas não funcionam (404 em páginas internas)

O arquivo `public/.htaccess` já está configurado para resolver isso. O Vite copia automaticamente arquivos de `public/` para `dist/`.

## 📊 Estrutura do Build

Quando o build é executado, o Vite gera:

```
dist/
├── index.html
├── .htaccess (copiado de public/)
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [imagens]
└── vite.svg
```

## 🎯 Próximos Passos

1. **Commit e push** para o GitHub
2. **Configure** a conexão na Hostinger
3. **Aguarde** o primeiro deploy
4. **Teste** seu site em produção
5. **Desenvolva** normalmente - cada push faz deploy automático!

## 📚 Documentação Adicional

- [Guia Completo](./DEPLOY_HOSTINGER.md) - Instruções detalhadas
- [Comandos Rápidos](./COMANDOS_RAPIDOS.md) - Referência rápida
- [Documentação Hostinger](https://support.hostinger.com)

## 💡 Dicas

- Teste localmente com `npm run dev` antes de fazer push
- Use commits descritivos para facilitar o rastreamento
- Monitore os deployments no hPanel
- O primeiro deploy pode demorar mais (5-10 minutos)

---

**Importante**: Este projeto foi convertido de TanStack Start (SSR) para SPA (Single Page Application) para compatibilidade com a Hostinger.
