# Simple CRUD Angular 17

Aplicação simples de CRUD (Create, Read, Update, Delete) com **Angular 17**, usando **HttpClient** para consumir uma API REST simulada por `json-server`.

## 🧰 Tecnologias utilizadas

- **Angular 17** (com standalone components)
- **TypeScript**
- **HttpClient** (`@angular/common/http`)
- **json-server** (para mock da API REST)
- (Opcional) **Bootstrap** ou outro framework CSS

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org) (v16+)
- [Angular CLI](https://angular.io/cli)
- `npm`

## 🚀 Como rodar o projeto

### 1. Clone este repositório


git clone https://github.com/JardrielSousa/simple-crud-angular-17.git
cd simple-crud-angular-17

### 2. Configure e rode o json-server
Crie um arquivo db.json na raiz do projeto com exemplo de dados:

{
  "pessoas": [
    { "id": 1, "nome": "João", "idade": 30 },
    { "id": 2, "nome": "Maria", "idade": 25 }
  ]
}

### Para iniciar o servidor:

npx json-server --watch db.json --port 3000
A API ficará disponível em:

GET /pessoas

GET /pessoas/:id

POST /pessoas

PUT /pessoas/:id

DELETE /pessoas/:id

### 3. Rode a aplicação Angular
Em outro terminal:
ng serve
Acesse a aplicação em: http://localhost:4200

🧰 Tecnologias utilizadas
Angular 17 (com standalone components)

TypeScript

HttpClient (@angular/common/http)

json-server (para mock da API REST)

(Opcional) Bootstrap ou outro framework CSS

🧩 Estrutura do Projeto
src/app/

Stand-alone components responsáveis por tela de listagem, criação e edição

PessoaService utilizando HttpClient para comunicação com a API

⚙️ Funcionalidades
Listar todas as pessoas

Criar nova pessoa

Atualizar pessoa existente

Deletar pessoa

🧪 Possíveis melhorias
Adicionar validação com ReactiveFormsModule

Usar Angular Material ou Bootstrap para estilo e responsividade

Adicionar paginação ou busca

Integração real com backend (Node.js, Spring Boot, etc.)

📚 Referências úteis
[Angular 17 CRUD com REST API – bezKoder](https://github.com/bezkoder/angular-17-crud-example)

[Guia rápido de CRUD Angular 17 + JSONPlaceholder](https://medium.com/%40chandantechie/angular-17-crud-using-jsonplaceholder-api-and-bootstrap-9f4db29b9428)

🧭 Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para enviar issues, pull requests ou sugestões.

✅ Checklist
 Estrutura básica de CRUD funcionando

 Validação de formulários

 Testes unitários

 Documentação completa


 Agora você pode **copiar e colar** esse conteúdo diretamente no seu arquivo `README.md`. Ele está organizado de forma clara e pronta para ser usada no seu repositório!

Se precisar de mais alguma coisa, é só avisar!

```bash