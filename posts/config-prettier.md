---
title: 'Configurando Prettier para formatação de código'
date: '2020-12-05'
---

### Como formatar um código usando o Prettier no VSCODE

Neste artigo, você irá configurar o Prettier para formatar automaticamente seu código no Visual Studio Code, também conhecido como VS Code.

### Pré-requisitos

Para trabalhar com o Prettier no Visual Studio Code, será necessário instalar a extensão. Para fazer isso, procure por Prettier - Code Formatter no painel de extensão do VS Code. Caso esteja instalando-o pela primeira vez, verá um botão install ao invés de uninstall

### Passo 1 — Usando o comando de formatação de documento

Com a extensão Prettier instalada, implante-a agora para formatar o seu código. Para começar, vamos explorar o uso do comando Format Document. Esse comando tornará seu código mais consistente com espaçamento formatado, quebra automática de linha e aspas.
Para abrir a paleta do comando, utilize: COMMAND + SHIFT + P no macOS ou CTRL + SHIFT + P no Windows.
Na paleta do comando, procure por format e então escolha Format Document.

Em seguida, você pode ser solicitado a escolher qual formato deve ser usado. Para fazer isso, clique no botão Configure:
Em seguinda, escolha Prettier - Code Formatter.

#### Nota: 

caso não veja um prompt para selecionar um formato
padrão, altere manualmente isso em suas Settings. Defina Editor: Default Formatter como ebsenp.prettier-vscode.

Seu código agora está formatado com espaçamento, quebra automática de linha e aspas consistentes:

### Passo 2 — Formatando o código ao salvar

Até aqui, foi necessário executar um comando manualmente para formatar seu código. De forma a automatizar esse processo, é possível escolher uma configuração no VS Code para que seus arquivos sejam formatados automaticamente quando forem salvados. Isso também garante que o código não seja verificado no controle de versão que não está formatado.
Para alterar essa configuração, pressione COMMAND + , no macOS ou CTRL + , no Windows para abrir o menu Settings. Quando o menu abrir, procure por Editor: Format On Save e certifique-se de que essa opção esteja marcada.

Quando isso estiver definido, você pode escrever seu código como sempre e ele será formatado automaticamente quando você salvar o arquivo.

### Passo 3 — Alterando as configurações do Prettier

O Prettier faz muitas coisas por você no modo padrão, mas também é possível personalizar suas configurações.
Abra o menu Settings. Em seguida, procure por Prettier. Isso irá trazer todas as configurações que você pode alterar

Aqui estão algumas das configurações mais comuns:
• Single Quote - escolha entre aspas simples e duplas.
• Semi - escolha se devem ser incluídos pontos-e-vírgulas no final das linhas.
• Tab Width - especifique quantos espaços você deseja que um tab insira.
O ponto negativo de usar o menu de configurações embutido no VS Code é que ele não garante uma consistência entre todos os desenvolvedores de sua equipe.

### Passo 4 — Criando um arquivo de configuração do Prettier

e você alterar as configurações em seu VS Code, outra pessoa pode acabar tendo uma configuração totalmente diferente em sua máquina. Para estabelecer uma formatação consistente entre toda a sua equipe, crie um arquivo de configuração para o seu projeto.
Crie um novo arquivo chamado  .prettierrc.extension com uma das seguintes extensões:

    • yml
    • yaml
    • json
    • js
    • toml

Aqui está um exemplo de um arquivo de configuração simples utilizando o JSON:

    {
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true
    }

[Créditos James Quick](https://www.digitalocean.com/community/tutorials/how-to-use-git-integration-in-visual-studio-code-pt)

#### Minhas Configurações

<h5> crie um arquivo .prettierrc.json na raiz do projeto</h5>

    {
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true
    }
