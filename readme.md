# Commitlint + Husky Setup

Este projeto contém uma configuração pronta para **padronizar mensagens de commit** usando **Commitlint** e **Husky**, com base no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/).

## Como usar em outro repositório

1. **Copie os seguintes arquivos e pastas** deste template para o novo repositório:

   ```
   .husky/
   commitlint.config.cjs
   package.json
   package-lock.json
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Ative os hooks do Husky:**

   ```bash
   git config core.hooksPath .husky
   ```


A partir de agora, toda vez que alguém fizer um commit, o **Commitlint** vai validar se a mensagem segue o padrão.

---

## Estrutura do Commit

Cada commit deve seguir o formato:

```
<tipo>(<escopo>): <descrição>
```

### Exemplos:

```bash
feat(api): adiciona novo endpoint de login
fix(ui): corrige bug no botão de envio
docs(readme): atualiza instruções de instalação
style(css): ajusta espaçamento da navbar
test(auth): adiciona testes unitários
refactor(core): melhora performance de carregamento
create(utils): adiciona script inicial
```

---

## Tipos suportados

| Tipo         | Uso                                            |
| ------------ | ---------------------------------------------- |
| **feat**     | Nova funcionalidade                            |
| **fix**      | Correção de bug                                |
| **docs**     | Alterações de documentação                     |
| **style**    | Alterações de formatação/estilo                |
| **refactor** | Refatoração sem mudança de comportamento       |
| **test**     | Criação ou ajuste de testes                    |
| **chore**    | Tarefas diversas, sem impacto direto no código |
| **build**    | Alterações que afetam o processo de build      |
| **ci**       | Alterações em pipelines ou CI/CD               |
| **perf**     | Melhorias de performance                       |
| **revert**   | Reversão de commit anterior                    |
| **create**   | Criação inicial de arquivos ou módulos         |

---

## Como funciona

* O **Husky** cria um *hook* chamado `commit-msg`, que executa o **Commitlint** automaticamente sempre que você faz um commit.
* O **Commitlint** verifica a mensagem e bloqueia commits fora do padrão.

---

## Dica

Se quiser testar rapidamente:

```bash
git commit -m "feat: exemplo válido"      # ✅ deve passar
git commit -m "mensagem inválida"         # ❌ deve ser bloqueado
```

---

## Requisitos

* [Node.js](https://nodejs.org/) 18+
* Git configurado no sistema