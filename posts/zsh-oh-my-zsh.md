---
title: 'Instalando Terminal Zsh - Oh My Zsh'
date: '2020-12-12'
---

## Terminal com Oh My Zsh, Tema Spaceship, Dracula e mais

Neste artigo, A minha ideia com esse é mostrar exatamente todas configurações que faço em meu terminal como tema, plugins, configurações, etc. Considero que você esteja usando o Linux.

## Instalando Zsh

Como existem várias formas de instalação dependendo do sistema operacional que você está, leia esse [guia](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH)

    sudo apt install zsh

Pronto! O ZSH já está funcionando e caso goste dele, para deixá-lo como Shell padrão, é:

    sudo chsh --shell /bin/zsh $USER

Com o Zsh instalado deve ser possível você executar:

    zsh --version

## Instalando Oh My Zsh

Para instalar o Oh My Zsh você precisa executar o comando abaixo (você deve ter o cURL instalado para executa-lo):

##### instalando o cURL

    sudo apt install curl

##### Depois execute o comando abaixo:

    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

A partir de agora todas configurações que você quer fazer como adicionar variáveis ambientes ou configurar seu terminal de qualquer forma utilize o arquivo ~/<b>.zshrc</b> e não mais o <b>~/.bash_profile</b> ou derivados.

Agora reiniciando seu terminal você deve ter algo diferente do convencional

## Utilizando Dracula

[Dracula]("https://draculatheme.com/") é um padrão de cores disponível para muitas aplicações de desenvolvimento.

O Dracula está disponível para muitos terminais e você pode conferir todos [aqui](https://draculatheme.com) na seção "Terminal".

Se você estiver no Mac usando o Terminal padrão, provavelmente irá usar: https://draculatheme.com/terminal/

Se você estiver no Linux com uma distribuição que usa Gnome, vai utilizar: https://github.com/dracula/gnome-terminal

### Instalando Fonte FiraCode

Antes de iniciar a configuração do Spaceship precisamos instalar a fonte Fira Code que possui diversos ícones dos quais são utilizados nesse tema. Baixe o zip da última versão da fonte disponível [aqui](https://github.com/tonsky/FiraCode/releases)

Descompacte o arquivo baixado e na pasta TTF copie os arquivos de fonte para as fontes do seu sistema (cada sistema operacional possui uma forma de fazer isso).

Depois disso será necessário configurar seu terminal com essa fonte, abre seu terminal, vá em profile e selecione a Fonte Fira Code,Typeface Retina

## Instalando Tema Spaceship

Vamos começar clonando o repositório do Spaceship em nossa pasta de themes do Oh My Zsh (é necessário ter instalado o Git pra isso):

    sudo apt install git

depois de instalado o Git agora execute o comando abaixo:

     git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"

Agora vamos criar um link simbólico para o arquivo do tema do Spaceship na pasta dos temas do Oh My Zsh:

    ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"

Agora dentro do arquivo <b>~/.zshrc</b> vamos alterar a variável <b>ZSH_THEME</b> ficando dessa forma:

    ZSH_THEME="spaceship"

Agora reinicie o terminal e você verá uma interface bem mais limpa, parecida com essa:

### Configurações adicionais

A partir de agora você já finalizou todas instalações e tudo a partir de aqui são preferências minhas que gosto de utilizar em meu terminal, por isso fique à vontade para incluir/excluir qualquer item abaixo.

#### Configurando Spaceship

Por mais que seja muito interessante mostrar as versões do Node, Docker e outros itens no nosso terminal geralmente isso consome processamento e pode tornar mais lento o carregamento de pastas, por isso eu gosto de desabilitar a maioria dessas opções.

No fim do arquivo <b>~/.zshrc</b> adiciono o seguinte conteúdo:

para abrir o arquivo .zshrc uso o comando:

    su nano ~/.zshrc

     SPACESHIP_USER_SHOW=always
     SPACESHIP_PROMPT_ADD_NEWLINE=false
     SPACESHIP_CHAR_SYMBOL="❯"
     SPACESHIP_CHAR_SUFFIX=" "

##### em plugins coloco:

plugins=(git
colored-man-pages
)

## Plugins do ZSH

Utilizo alguns plugins bem legais para o Oh My Zsh que facilitam muito na hora de executar comandos comuns, realizar autocompletes, etc...

Para instalar plugins precisamos configurar o ZInit, ferramenta que facilita a instalação e remoção de plugins no Zsh.

execute o comando:

      sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zinit/master/doc/install.sh)"

Após essa instalação, vamos abrir o arquivo <b>~/.zshrc</b> novamente e abaixo da linha ### End of ZInit's installer chunk que foi adicionada automaticamente no arquivo, adicionamos:

    zinit light zdharma/fast-syntax-highlighting
    zinit light zsh-users/zsh-autosuggestions
    zinit light zsh-users/zsh-completions

Esses são os plugins que utilizo e abaixo explico como funciona cada um deles:

- <b>zdharma/fast-syntax-highlighting</b>: Adiciona syntax highlighting na hora da escrita de comandos que facilita principalmente em reconhecer comandos que foram digitados de forma incorreta;

---

- <b>zsh-users/zsh-autosuggestions</b>: Sugere comandos baseados no histórico de execução conforme você vai digitando;

---

- <b>zsh-users/zsh-completions</b>: Adiciona milhares de completitions para ferramentas comuns como Yarn, Homebrew, NVM, Node, etc, para você precisar apenas apertar TAB para completar comandos;

---

### Terminal no VSCode

Se, assim como eu, você utiliza o VSCode pode adicionar a seguinte configuração abaixo para utilizar o Oh My Zsh no terminal integrado:

    "terminal.integrated.shell.osx": "/bin/zsh"

### Themas Oh My Zsh

Atualmente utilizo o tema Agnoster com os padrões de cores do Dracula.

ZSH_THEME="agnoster"

Você pode pesqusiar o tema que melhor te agradar nesse [link](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

##### configurações do meu zshrc:

- Escolha do tema:
  ZSH_THEME="agnoster"

- Plugin color git pages
  plugins=(git
  colored-man-pages
  )source $ZSH/oh-my-zsh.sh

- Abaixo dessa linha <b>###End of Zinit's installer chunk</b>
  colocamos:

zinit light zdharma/fast-syntax-highlighting

zinit light zsh-users/zsh-autosuggestions

zinit light zsh-users/zsh-completions

- e no final do arquivo adiciono:

SPACESHIP_USER_SHOW=always

SPACESHIP_CHAR_SUFFIX=" "

SPACESHIP_PROMPT_ADD_NEWLINE=false

SPACESHIP_CHAR_SYMBOL="❯"
