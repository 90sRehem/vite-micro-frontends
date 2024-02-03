
# Vite Micro Frontends

## Sobre

Este repositório é uma Prova de Conceito (PoC) para demonstrar a utilização do [Vite](https://vitejs.dev/) em conjunto com o plugin [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) para o desenvolvimento de Microfrontends.

O objetivo é ilustrar como o Module Federation pode ser implementada em projetos que utilizam Vite, facilitando o desenvolvimento de aplicações micro frontend com componentes compartilhados e independentes.

## Estrutura do Projeto

- `apps`: Contém as aplicações micro frontend.
    - `host`: Aplicação host que consome os micro frontends.
    - `remote`: Aplicações remotas que são carregadas dinamicamente pelo host.
- `packages`: Bibliotecas e configurações compartilhadas.
    - `eslint-config`: Configurações compartilhadas do ESLint.
    - `generators`: Scripts e ferramentas para gerar código.
    - `shared`: Componentes e lógicas compartilhados entre as aplicações.
    - `ui`: Componentes de interface de usuário compartilhados.
    - `tsconfig`: Configurações compartilhadas do TypeScript.

## Configuração do Ambiente de Desenvolvimento

Antes de começar, assegure-se de que possui Node.js e pnpm instalados em sua máquina.

1. Clone o repositório:
   ```
   git clone https://github.com/90sRehem/vite-micro-frontends.git
   ```
2. Navegue até o diretório do projeto:
   ```
   cd vite-micro-frontends
   ```
3. Instale as dependências:
   ```
   pnpm install
   ```

## Rodando o Projeto

Para iniciar o desenvolvimento local, siga os passos abaixo:

1. Para iniciar a aplicação host e as aplicações remotas em modo de desenvolvimento:
   ```
   pnpm run dev
   ```
2. Para construir o projeto para produção:
   ```
   pnpm run build
   ```
3. Para executar o lint no código:
   ```
   pnpm run lint
   ```
4. Para visualizar a build de produção localmente:
   ```
   pnpm run preview
   ```

## Utilização do `@originjs/vite-plugin-federation`

O plugin `@originjs/vite-plugin-federation` permite a integração de múltiplas aplicações micro frontend, possibilitando que sejam carregadas dinamicamente em runtime. A configuração desse plugin é feita no arquivo `vite.config.js` de cada aplicação (host e remotes).

## Contribuições

Contribuições são sempre bem-vindas. Por favor, leia o arquivo CONTRIBUTING.md para mais detalhes sobre como enviar pull requests para o projeto.