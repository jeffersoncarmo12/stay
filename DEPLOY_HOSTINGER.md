# 🚀 Deploy Automático na Hostinger via GitHub

## ⚠️ IMPORTANTE: TanStack Start + Hostinger

Este projeto usa **TanStack Start** (framework SSR), mas a Hostinger suporta apenas **Node.js Web Apps**. 

## 🔧 Configuração na Hostinger

### Passo 1: Push para GitHub (já feito ✅)

### Passo 2: Conectar GitHub na Hostinger

1. Acesse [hPanel da Hostinger](https://hpanel.hostinger.com)
2. Clique em **Add website**
3. Selecione **Node.js Web App**
4. Clique em **Connect to GitHub**
5. Autorize e selecione seu repositório

### Passo 3: Configurar Build Settings

**IMPORTANTE**: Use EXATAMENTE estas configurações:

```
Framework preset: Vite
Branch: main
Node version: 22.x
Root directory: /
Build command: npm run build
Package manager: npm
Output directory: dist/client
```

⚠️ **ATENÇÃO**: O output directory é `dist/client`, pois o TanStack Start gera:
- `dist/client/` - Arquivos estáticos (HTML, CSS, JS, imagens)
- `dist/server/` - Código do servidor (não usado na Hostinger)

### Passo 4: Deploy

1. Clique em **Save and redeploy**
2. Aguarde 5-10 minutos (primeiro build demora mais)
3. Acesse seu domínio

## � Estrutura do Build

O TanStack Start gera:

```
dist/
├── client/          ← Deploy este diretório
│   ├── index.html
│   ├── assets/
│   │   ├── styles-*.css
│   │   ├── index-*.js
│   │   └── imagens
│   └── .assetsignore
└── server/          ← Não usado na Hostinger
```

## �🔄 Deploy Automático

Após a configuração inicial, cada push para `main` faz deploy automático.

## 🐛 Solução de Problemas

### "No output directory found after build"
- **Solução**: Certifique-se que o output directory está como `dist/client`

### Build falha
- Verifique os logs no hPanel → Deployments
- O arquivo `.npmrc` com `legacy-peer-deps=true` já está configurado

### Erro 403 ou 404
- Aguarde 3-5 minutos após o deploy
- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se o build completou com sucesso

### Site não carrega corretamente
- Confirme que o output directory está como `dist/client`
- Verifique se todas as dependências foram instaladas
- Veja os Runtime logs no hPanel

## 🔗 Atualizações

```bash
git add .
git commit -m "Suas alterações"
git push origin main
# Deploy automático!
```

---

**Nota**: Este projeto mantém a estrutura original do Lovable com TanStack Start.
