---
title: 'Configurando EditorConfig'
date: '2020-12-04'
---

### Instalação

Ao identificar uma extensão, forneça o nome completo do formulário publisher.extension. Para esta extensão, é editorconfig.editorconfig.

Consulte Extension Marketplace para obter mais informações sobre as várias maneiras de instalar extensões VSCode.

##### Propriedades Suportadas

- indent_style
- indent_size
- tab_width
- end_of_line (on save)
- insert_final_newline (on save)
- trim_trailing_whitespace (on save)

On the backlog

    charset

#### Como funciona

Esta extensão é ativada sempre que você abre um novo editor de texto, alterna as abas para uma existente ou focaliza o editor que você já abriu. Quando ativado, ele usa editorconfig para resolver a configuração desse arquivo específico e aplica quaisquer configurações relevantes do editor.

Nota: algumas configurações só podem ser aplicadas ao salvar o arquivo, conforme indicado acima.

Um novo arquivo .editorconfig pode ser criado por meio do menu de contexto da barra lateral do Explorer clicando com o botão direito na pasta onde você gostaria que estivesse e selecionando Gerar .editorconfig.

[Créditos](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

#### Minha Configuração

<h5>Crie um arquivo .editorconfig na raiz do projeto.</h5>

    root = true
    [*]
    charset = utf-8
    end_of_line = lf
    insert_final_newline = true
    indent_style = tab
    indent_size = 2
