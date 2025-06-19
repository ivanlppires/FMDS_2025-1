
# 🚀 Guia de Deploy no Servidor ivanpires.dev

## 🏗️ Visão Geral

Neste guia você aprenderá como publicar uma aplicação completa (Frontend + Backend + Banco de Dados) no servidor `ivanpires.dev`, utilizando seu grupo (ex.: `g1`, `g2`... até `g10`).

---

## 🔥 Pré-requisitos

- Backend e frontend prontos e funcionando na sua máquina.
- Node.js e bun instalados no backend.
- Banco de dados MySQL local.
- Acesso ao terminal do Windows (via **PowerShell** ou **Git Bash**).
- Usuário e senha do servidor (ex.: `g1` / `G1@12345`).

---

## 🎯 Estrutura no servidor

Cada grupo possui uma pasta no servidor `/home/gX/`, contendo:

```
/home/gX/
 ├── frontend   --> Arquivos do frontend (build)
 ├── backend    --> Arquivos do backend (API)
 └── dump.sql   --> Backup do banco de dados (MySQL)
```

O frontend estará disponível em:

```
https://ivanpires.dev/gX/
```

A API backend estará acessível em:

```
https://ivanpires.dev/gX/api/
```

---

# ✅ Passo 1 — Fazer o build do Frontend

No terminal, dentro da pasta do seu projeto frontend, execute:

```bash
bun run build
```

Isso irá gerar uma pasta chamada `dist` (ou `build`, dependendo do framework usado).

---

# ✅ Passo 2 — Enviar o Frontend para o servidor

Execute no **PowerShell** ou **Git Bash**:

```bash
scp -r ./dist/* g1@ivanpires.dev:/home/g1/frontend
```

- 🔸 Substitua `g1` pelo seu grupo (`g2`, `g3`, ...).
- 🔸 Envie **somente o conteúdo da pasta `dist`**, não a pasta inteira.

No navegador, acesse:

```
https://ivanpires.dev/g1/
```

---

# ✅ Passo 3 — Enviar o Backend para o servidor

### 📦 Opção 1 (recomendada): **Sem enviar `node_modules`**

1. Crie um arquivo `.zip` do seu backend, sem `node_modules`.
2. Envie o arquivo:

```bash
scp backend.zip g1@ivanpires.dev:/home/g1/
```

3. Acesse o servidor:

```bash
ssh g1@ivanpires.dev
```

4. No servidor:

```bash
cd /home/g1
unzip backend.zip
cd backend
bun install
```

---

### 📦 Opção 2 (mais simples): **Com `node_modules`**

```bash
scp -r ./backend g1@ivanpires.dev:/home/g1/
```

- Mais lento, mas não precisa rodar `bun install` no servidor.

---

# ✅ Passo 4 — Gerar backup do banco de dados (mysqldump)

No terminal do seu Windows (PowerShell ou Git Bash):

```bash
mysqldump -u root -p nome_do_banco > dump.sql
```

👉 Isso irá gerar o arquivo `dump.sql` no seu computador.

---

# ✅ Passo 5 — Enviar o dump para o servidor

```bash
scp dump.sql g1@ivanpires.dev:/home/g1/
```

---

# ✅ Passo 6 — Acessar o servidor via SSH

```bash
ssh g1@ivanpires.dev
```

Senha: `G1@12345`

---

# ✅ Passo 7 — Importar o dump para o banco no servidor

No terminal do servidor:

```bash
mysql -u g1 -p db_g1 < dump.sql
```

- ✅ Banco de dados: `db_g1`
- ✅ Usuário: `g1`
- ✅ Senha: `G1@12345`

---

# ✅ Passo 8 — Subir o backend com PM2

Dentro do servidor:

```bash
cd /home/g1/backend
pm2 start "bun run server.js" --name g1-backend -- --port 3101
```

- 🔥 Cada grupo usa uma porta diferente:
  - g1 → 3101
  - g2 → 3102
  - ...
  - g10 → 3110

### 🚀 Verificar se está rodando:

```bash
pm2 list
```

### 🔍 Ver os logs:

```bash
pm2 logs g1-backend
```

---

# ✅ Passo 9 — Habilitar domínio no Firebase

1. Acesse [https://console.firebase.google.com](https://console.firebase.google.com).
2. No menu **Authentication → Sign-in method → Configurações**, adicione:

```
https://ivanpires.dev
```

Isso permitirá que a autenticação (ex.: Google Login) funcione no domínio do servidor.

---

# ✅ Passo 10 — Testar no navegador

Frontend:

```
https://ivanpires.dev/g1/
```

Backend (API):

```
https://ivanpires.dev/g1/api/
```

---

# 🔥 Dicas Finais

- Sempre execute `pm2 list` para garantir que sua API está rodando.
- Caso edite o backend, reinicie:

```bash
pm2 restart g1-backend
```

- Para parar:

```bash
pm2 stop g1-backend
```

---

## 🚀 Conclusão

Parabéns! 🎉 Seu app está rodando em produção com frontend, backend e banco de dados funcionando no servidor `ivanpires.dev`.
