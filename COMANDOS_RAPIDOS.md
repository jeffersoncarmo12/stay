# 🚀 Comandos Rápidos - Deploy Hostinger via GitHub

## 🔗 Deploy Automático (Recomendado)

### 1️⃣ Configuração Inicial na Hostinger

1. Acesse hPanel → **Add website** → **Node.js Web App**
2. Conecte com GitHub e selecione o repositório
3. Configure:
   - Framework: **Vite**
   - Branch: **main**
   - Node version: **22.x**
   - Build command: **npm run build**
   - Output directory: **dist**
4. Clique em **Save and redeploy**

### 2️⃣ Fazer Deploy

```bash
# Adicionar alterações
git add .

# Commit
git commit -m "Deploy para Hostinger"

# Push (isso inicia o deploy automático)
git push origin main
```

### 3️⃣ Acompanhar Deploy

1. Acesse hPanel → **Deployments**
2. Veja o status do build em tempo real
3. Aguarde 2-5 minutos
4. Acesse seu domínio

## 🔧 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Build para produção (teste local)
npm run build

# Preview do build
npm run preview
```

## ✅ Checklist Antes do Push

- [ ] Código testado localmente (`npm run dev`)
- [ ] Build funciona sem erros (`npm run build`)
- [ ] Todas as alterações commitadas
- [ ] Branch correta (main)

## 🔄 Fluxo de Trabalho

1. Desenvolva localmente
2. Teste com `npm run dev`
3. Commit e push para GitHub
4. Hostinger faz deploy automático
5. Verifique o site em produção

## 🆘 Solução Rápida de Problemas

### Build falha
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro 403 após deploy
- Aguarde 2-3 minutos para propagação
- Limpe cache do navegador (Ctrl + Shift + R)
- Verifique logs no hPanel → Deployments

## 📝 Arquivos Importantes

- `index.html` - Entry point (raiz do projeto)
- `src/main.tsx` - Aplicação React
- `public/.htaccess` - Roteamento SPA
- `.npmrc` - Configuração npm
- `vite.config.hostinger.ts` - Config de build

## 🔗 Links Úteis

- [Guia Completo](./DEPLOY_HOSTINGER.md)
- [Painel Hostinger](https://hpanel.hostinger.com)
- [Documentação Vite](https://vitejs.dev)
