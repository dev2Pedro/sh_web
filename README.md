# 🔧 Sucatinh

Uma aplicação web moderna desenvolvida com Next.js, apresentando uma landing page responsiva para divulgação de serviços com sistema integrado de contato via e-mail.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [API](#-api)
- [Contato](#-contato)

## 📖 Sobre o Projeto

Landing page institucional com design moderno e responsivo, desenvolvida para apresentar serviços e facilitar o contato direto com potenciais clientes através de um formulário integrado que envia e-mails automaticamente.

### 🎯 Objetivo

Fornecer uma presença web profissional com interface intuitiva que permita visitantes conhecerem os serviços oferecidos e entrarem em contato de forma simples e direta.

## 🛠 Tecnologias Utilizadas

### Front-end
- **[Next.js](https://nextjs.org/)** - Framework React para produção
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[ShadCN UI](https://ui.shadcn.com/)** - Componentes de UI reutilizáveis
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos de UI acessíveis

### Back-end
- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições
- **[Prisma ORM](https://www.prisma.io/)** - ORM moderno para Node.js
- **[Nodemailer](https://nodemailer.com/)** - Módulo para envio de e-mails

## ✨ Funcionalidades

- ✅ Página de apresentação dos serviços
- ✅ Design totalmente responsivo
- ✅ Formulário de contato funcional
- ✅ Sistema de envio de e-mails automatizado
- ✅ API REST para processamento de dados
- ✅ Validação de campos com feedback visual
- ✅ SEO otimizado com Next.js

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/sh_web.git
cd sucatinha-da-hora-sh
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

## ⚙️ Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Configuração do Banco de Dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/sucatinha_db"

# Configuração de E-mail
EMAIL_HOST=smtp.seuprovedor.com
EMAIL_PORT=587
EMAIL_USER=seu@email.com
EMAIL_PASS=sua-senha
EMAIL_TO=destino@email.com

# Configuração do Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 2. Configure o Banco de Dados

Execute as migrations do Prisma:

```bash
npx prisma generate
npx prisma migrate dev
```

## 🚀 Uso

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

### Produção

Para criar uma build de produção:

```bash
npm run build
npm start
# ou
yarn build
yarn start
```

## 📡 API

### Endpoints Disponíveis

#### `POST /api/contact`

Envia um e-mail com os dados do formulário de contato.

**Body da Requisição:**

```json
{
  "name": "Nome do Usuário",
  "email": "email@dominio.com",
  "message": "Mensagem enviada pelo usuário"
}
```

**Resposta de Sucesso (200):**

```json
{
  "success": true,
  "message": "E-mail enviado com sucesso!"
}
```

**Resposta de Erro (400/500):**

```json
{
  "success": false,
  "message": "Descrição do erro"
}
```

## 📂 Estrutura do Projeto

```
sucatinha-da-hora-sh/
├── prisma/
│   └── schema.prisma
├── public/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   ├── components/
│   │   ├── lib/
│   │   └── page.tsx
│   └── styles/
├── .env
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📬 Contato

**Pedro Cristóvão do Nascimento Prudêncio** - Desenvolvedor

---

<div align="center">
  Desenvolvido com ❤️ por <strong>Seu Nome</strong>
</div>
