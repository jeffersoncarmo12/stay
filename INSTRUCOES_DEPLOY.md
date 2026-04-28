# 🇧🇷 Instruções de Deploy - Hostinger

## ✅ Projeto Pronto para Deploy!

Tudo foi configurado. Agora é só seguir estes passos:

## 📝 Passo a Passo

### 1. Enviar para o GitHub

Abra o terminal e execute:

```bash
git add .
git commit -m "Configuração para deploy na Hostinger"
git push origin main
```

### 2. Configurar na Hostinger

1. Acesse: https://hpanel.hostinger.com
2. Clique em **"Add website"** (Adicionar website)
3. Escolha **"Node.js Web App"**
4. Clique em **"Connect to GitHub"** (Conectar ao GitHub)
5. Autorize o acesso e selecione seu repositório

### 3. Configurações de Build

**IMPORTANTE**: Use exatamente estas configurações:

```
Framework preset: Vite
Branch: main
Node version: 22.x
Root directory: /
Build command: npm run build
Package manager: npm
Output directory: dist
```

### 4. Iniciar Deploy

1. Clique em **"Save and redeploy"** (Salvar e reimplantar)
2. Aguarde 2-5 minutos
3. Acesse seu domínio para ver o site funcionando

## 🔄 Atualizações Futuras

Sempre que você quiser atualizar o site:

```bash
# 1. Faça suas alterações no código
# 2. Commit e push
git add .
git commit -m "Descrição das alterações"
git push origin main

# 3. A Hostinger faz o deploy automaticamente!
```

## 🐛 Problemas Comuns

### Erro 403 Forbidden
**Solução**: Aguarde 2-3 minutos e limpe o cache do navegador (Ctrl + Shift + R)

### Build falha
**Solução**: O arquivo `.npmrc` já está configurado para resolver isso

### Página em branco
**Solução**: 
1. Abra o console do navegador (F12)
2. Verifique os logs no hPanel → Deployments
3. Confirme que o build completou com sucesso

### Rotas não funcionam (erro 404)
**Solução**: O arquivo `.htaccess` já está configurado para resolver isso

## 📊 O que Acontece no Deploy

```
Você faz push → GitHub recebe → Hostinger detecta → 
npm install → npm run build → Deploy automático → Site atualizado!
```

## 🎯 Checklist

Antes do primeiro deploy:

- [ ] Fiz push para o GitHub
- [ ] Conectei GitHub na Hostinger  
- [ ] Configurei corretamente (veja Passo 3)
- [ ] Cliquei em "Save and redeploy"
- [ ] Aguardei o build completar

## 📞 Suporte

- **Documentação completa**: Veja `README_DEPLOY.md`
- **Configurações**: Veja `CONFIGURACAO_HOSTINGER.txt`
- **Suporte Hostinger**: https://support.hostinger.com

## 💡 Dicas

- Teste localmente antes de fazer push: `npm run dev`
- Monitore os deployments no hPanel
- O primeiro deploy pode demorar mais (5-10 minutos)
- Deployments seguintes são mais rápidos (2-3 minutos)

---

**Dúvidas?** Consulte os outros arquivos de documentação criados! 🚀
