#!/bin/bash

# Definir mensagem de commit
COMMIT_MSG="Aula 4: Vuetify + Vue-Router"

# Verificar se há argumento para mensagem de commit
if [ ! -z "$1" ]; then
    COMMIT_MSG="$1"
fi

# Inicializa o repositório caso não esteja inicializado
if [ ! -d ".git" ]; then
    git init
    git branch -M main
    git remote add origin https://github.com/ivanlppires/FMDS_2025-1.git
fi

# Adicionar arquivos ao controle de versão
git add .

# Commit das mudanças
git commit -m "$COMMIT_MSG"

# Enviar para o repositório remoto
git push -u origin main

echo "Alterações enviadas para o GitHub com sucesso!"

