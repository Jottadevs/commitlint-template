# 🧩 Commitlint + Husky Template

*(English version below 🇺🇸)*

Este repositório contém uma configuração pronta para **padronizar mensagens de commit** usando **Commitlint** e **Husky**, com base no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/).

---

## 🚀 Como usar em outro repositório

> ⚠️ **Importante:** Não copie o repositório inteiro.
> Copie **somente a pasta interna** chamada `commitlint-template`.

### 1. Estrutura final esperada

Após copiar, seu projeto deve ficar assim:


```
meu-projeto/
├─ commitlint-template/
│  ├─ .husky/
│  ├─ commitlint.config.cjs
│  ├─ package.json
│  └─ package-lock.json
├─ src/
└─ ...
```

---

### 2. Instale as dependências

Rode o comando na raiz do seu repositório:

```bash
npm install --prefix commitlint-template
```

Isso instalará o **Commitlint** e o **Husky** dentro da pasta.

---

### 3. Ative os hooks do Husky

Ainda na raiz do seu projeto, execute:

```bash
git config core.hooksPath commitlint-template/.husky
```

✅ **Pronto!**
Agora, toda vez que alguém fizer um commit, o **Commitlint** vai validar se a mensagem segue o padrão definido.

---

## 🧱 Estrutura do Commit

Cada commit deve seguir o formato:

```
<tipo>(<escopo>): <descrição>
```

### Exemplos:

```bash
feat(api): adiciona novo endpoint de login
fix(ui): corrige bug no botão de envio
docs(readme): atualiza instruções de instalação
create(utils): adiciona script inicial
update(auth): altera lógica de autenticação
config(husky): ajusta configuração de hooks
merge(branch): integra alterações da main
```

---

## 📚 Tipos suportados

| Tipo         | Uso                                                     |
| ------------ | ------------------------------------------------------- |
| **feat**     | Nova funcionalidade                                     |
| **fix**      | Correção de bug                                         |
| **docs**     | Alterações de documentação                              |
| **style**    | Alterações de formatação/estilo (sem impacto funcional) |
| **refactor** | Refatoração sem mudança de comportamento                |
| **perf**     | Melhorias de performance                                |
| **test**     | Criação ou ajuste de testes                             |
| **build**    | Alterações que afetam o processo de build               |
| **ci**       | Alterações em pipelines ou CI/CD                        |
| **chore**    | Tarefas diversas, sem impacto direto no código          |
| **revert**   | Reversão de commit anterior                             |
| **update**   | Atualizações pequenas ou ajustes gerais                 |
| **config**   | Alterações de configuração ou ambiente                  |
| **merge**    | Commits de merge entre branches                         |
| **create**   | Criação inicial de arquivos, módulos ou estrutura       |

---

## ⚙️ Como funciona

* O **Husky** cria um *hook* chamado `commit-msg`, que executa o **Commitlint** automaticamente em cada commit.
* O **Commitlint** verifica se a mensagem segue o padrão e bloqueia commits fora do formato esperado.

---

## 💡 Teste rápido

```bash
git commit -m "feat: exemplo válido"      # ✅ deve passar
git commit -m "mensagem inválida"         # ❌ deve ser bloqueado
```

---

## 📦 Requisitos

* [Node.js](https://nodejs.org/) **v18+**
* Git configurado no sistema

---

# 🇺🇸 Commitlint + Husky Template

This repository provides a ready-to-use configuration to **standardize commit messages** using **Commitlint** and **Husky**, following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

---

## 🚀 How to use in another repository

> ⚠️ **Important:** Do **not** copy the entire repository.
> Copy **only the inner folder** named `commitlint-template`.

### 1. Final project structure

After copying, your project should look like this:

```
my-project/
├─ commitlint-template/
│  ├─ .husky/
│  ├─ commitlint.config.cjs
│  ├─ package.json
│  └─ package-lock.json
├─ src/
└─ ...
```

---

### 2. Install dependencies

From your repository root, run:

```bash
npm install --prefix commitlint-template
```

---

### 3. Activate Husky hooks

```bash
git config core.hooksPath commitlint-template/.husky
```

✅ **Done!**
From now on, **Commitlint** will validate every commit message automatically.

---

## 🧱 Commit message format

```
<type>(<scope>): <description>
```

### Examples:

```bash
feat(api): add new login endpoint
fix(ui): fix send button bug
docs(readme): update installation guide
create(utils): add initial utility script
update(auth): modify authentication logic
config(husky): tweak Husky setup
merge(branch): integrate main changes
```

---

## 📚 Supported types

| Type         | Description                                     |
| ------------ | ----------------------------------------------- |
| **feat**     | New feature                                     |
| **fix**      | Bug fix                                         |
| **docs**     | Documentation updates                           |
| **style**    | Code style or formatting (no functional change) |
| **refactor** | Code refactor without behavior change           |
| **perf**     | Performance improvements                        |
| **test**     | Adding or updating tests                        |
| **build**    | Build system changes                            |
| **ci**       | CI/CD pipeline changes                          |
| **chore**    | Minor maintenance tasks                         |
| **revert**   | Revert a previous commit                        |
| **update**   | Minor updates or adjustments                    |
| **config**   | Configuration or environment changes            |
| **merge**    | Merge commits between branches                  |
| **create**   | Initial creation of files or modules            |

---

## ⚙️ How it works

* **Husky** runs a `commit-msg` hook for every commit.
* **Commitlint** checks the commit message and blocks invalid formats.

---

## 💡 Quick test

```bash
git commit -m "feat: valid example"       # ✅ should pass
git commit -m "invalid message"           # ❌ should be blocked
```

---

## 📦 Requirements

* [Node.js](https://nodejs.org/) **v18+**
* Git installed and configured
