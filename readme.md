# 🧩 Commitlint + Husky Setup

*(English version below 🇺🇸)*

Este projeto contém uma configuração pronta para **padronizar mensagens de commit** usando **Commitlint** e **Husky**, com base no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/).

---

## 🚀 Como usar em outro repositório

1. **Copie a pasta `commitlint-template` inteira** para dentro do seu repositório:

   **Estrutura final:**

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

2. **Instale as dependências dentro da pasta:**

   ```bash
   npm install --prefix commitlint-template
   ```

3. **Ative os hooks do Husky na raiz do repositório:**

   ```bash
   git config core.hooksPath commitlint-template/.husky
   ```

✅ **Pronto!**
A partir de agora, toda vez que alguém fizer um commit, o **Commitlint** vai validar se a mensagem segue o padrão definido — mesmo com a configuração dentro da pasta `commitlint-template`.

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

## 💡 Dica rápida

Teste para confirmar que está tudo configurado corretamente:

```bash
git commit -m "feat: exemplo válido"      # ✅ deve passar
git commit -m "mensagem inválida"         # ❌ deve ser bloqueado
```

---

## 📦 Requisitos

* [Node.js](https://nodejs.org/) **18+**
* Git configurado no sistema

---

## 🪄 Automação opcional

Adicione no `commitlint-template/package.json` para automatizar:

```json
"scripts": {
  "postinstall": "git config core.hooksPath commitlint-template/.husky"
}
```

Assim, ao rodar:

```bash
npm install --prefix commitlint-template
```

o Husky já será ativado automaticamente 🎉

---

# 🇺🇸 Commitlint + Husky Setup

This project provides a ready-to-use setup to **standardize commit messages** using **Commitlint** and **Husky**, following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

---

## 🚀 How to use in another repository

1. **Copy the entire `commitlint-template` folder** into your repository:

   **Final structure:**

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

2. **Install dependencies inside the folder:**

   ```bash
   npm install --prefix commitlint-template
   ```

3. **Activate Husky hooks from the repository root:**

   ```bash
   git config core.hooksPath commitlint-template/.husky
   ```

✅ **Done!**
From now on, every commit will be validated by **Commitlint**, even though the configuration is located inside the `commitlint-template` folder.

---

## 🧱 Commit message format

```
<type>(<scope>): <description>
```

### Examples:

```bash
feat(api): add new login endpoint
fix(ui): correct button alignment
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
| **build**    | Changes to the build system                     |
| **ci**       | CI/CD pipeline changes                          |
| **chore**    | Minor maintenance tasks                         |
| **revert**   | Revert a previous commit                        |
| **update**   | Minor updates or adjustments                    |
| **config**   | Configuration or environment changes            |
| **merge**    | Merge commits between branches                  |
| **create**   | Initial creation of files or modules            |

---

## ⚙️ How it works

* **Husky** creates a `commit-msg` hook that automatically runs **Commitlint** for each commit.
* **Commitlint** checks the message format and blocks invalid commits.

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

---

## 🪄 Optional automation

Add this to `commitlint-template/package.json`:

```json
"scripts": {
  "postinstall": "git config core.hooksPath commitlint-template/.husky"
}
```

Then simply run:

```bash
npm install --prefix commitlint-template
```

and Husky will automatically be activated 🎉