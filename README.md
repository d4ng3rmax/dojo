# DOJO Test

## Funcionalidades Principais

- **Login**:

  - O usuário informa seu “usuário” e senha.
  - Se as credenciais forem válidas, o usuário é redirecionado para a tela inicial.
  - Caso sejam inválidas, uma mensagem de erro é exibida.

- **Rota Protegida**:

  - A tela inicial (`/home`) só pode ser acessada se o usuário estiver logado.
  - Se tentar acessar `/home` sem estar logado, é redirecionado para a tela de login (`/`).

- **Logout**:
  - Botão “Sair” que remove o usuário do estado global do Redux e do `localStorage`, redirecionando para a tela de login.

## Tecnologias Utilizadas

- **React** 18+
- **Vite** 4+
- **Redux Toolkit** (RTK)
- **React Router Dom** 6+
- **SCSS (Sass)**
- **Vitest** + **React Testing Library**

## Estrutura de Pastas (Resumida)

```bash
meu-banco/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── auth/
│   │       ├── authSlice.js
│   │       └── authSlice.test.js
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Login.test.jsx
│   │   ├── Login.scss
│   │   ├── Home.jsx
│   │   ├── Home.scss
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── Router.jsx
│   ├── main.jsx
│   └── index.css (ou index.scss)
├── vite.config.js
├── package.json
├── README.md
└── ...
```

## Rodar aplicação:

```bash
npm run dev
- http://localhost:5173
```

## Gerar a build de produção:

```bash
npm run build
```

## Testes (com Vitest):

```bash
npm run test
```
