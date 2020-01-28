# Drácula-Theme For PowerShell Prompt

> *"E das sombras fez se a luz"*

# Introdução

#### Drácula-Theme

O que iremos fazer é instalar o Drácula-Theme no Windows PowerShell. Esse tema é muito utilizado por diversos programdores, no entanto, sua configuração no PS não é tão trivial.

**Drácula-Theme instalado no PowerShell:**

> ![Drácula Theme](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/dracula_theme_power_shell.png "Terminal já configurado com o Drácula -Theme")

Primeiro, utilizaremos o módulo Posh-Git do PowerShell para obter e exibir informações, do repositório em que estamos, no terminal. Por meio desse módulo, selecionamos quais informações devem ser exibidas, através da edição do arquivo de profile (.psm) do PS.

Nesse ponto, nosso trabalho já estará 99% finalizado. Mas e se quisermos um console um pouco mais minimalist, com alguns simbolos diferentes, bem como cores?
Vamos supor que você queira customizar ainda mais o seu Terminal, e deixá-lo com uma aparência mais clean, e de forma fácil...

#### ConEmu: Uma opção ao Zsh (para windows)

O ConEmu é um terminal que expande as capacidades dos prompts ou consoles tradicionais do windows (cmd, PowerShell, git_bash, etc) é de fácil instalação e customização.

> ![ConEmu Terminal](url: con_emu_settings "ConEmu Terminal")

Ele não é um pré-requisito para a instalação e configuração do Thema final, mas sim, uma sugestão de ferramenta para quem quer expandir suas capacidades de uso dos terminais tradicionais.

#### Oh-My-Posh

Um gerador de "Themas" inspirado no PS-Config **(grave isso, é um detalhe que faz toda diferença)** e no Oh-My-ZSH para ZSH baseado nos sistemas Unix (macOS, OSX e Linux).

Utilizaremos essa ferramenta para customizar nosso terminal(símbolos, caracteres, cores etc) bem como, exibir as informações de cada mudança de estado (ou status), de uma pasta do sistema (ou repositório do git).

Essa engine, já vem com alguns temas instalados, mas como se trata de uma Engine, podemos utilizá-la para desenvolver e customizar os nossos próprios temas. Dessa forma, nos beneficiamos com uma customização que nos ajude a codar de forma mais efetiva, ao ajustar o nosso ambiente de desenvolvimento conforme nossas necessidades.

**Tema minimalista OnixSpaceship, construído com Oh-My-Posh:**

> ![Tema minimalista utilizando Oh-My-Posh](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/onix_spaceship_minimal_theme.png "Tema minimalista utilizando Oh-My-Posh")


# Drácula-Theme: Install & Config

> *"Frutificai"*

### Fontes

**Vamos instalar e utilizar a fonte  Fira Code:**

[Clique aqui para acessar o repositório da fonte](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/FiraCode)

Ao acessar o repositório, vá até "Solution > Download V2". Faça download e a instale. Para isso, basta descompactar o arquivo baixado, ir até a pasta "ttf", e clicar duas vezes sobre as fontes, uma a uma. O windows se encarrega da instalação.

**Veja abaixo**

> ![Fonte Fira Code TTF](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/Fira%20Code%20Retina.png "Dê dois clicks sobre a fonte para instalar")

**Clique com botão na borda do cabeçalho do terminal do PowerShell, em propriedades, escolha  a fonte instalada:**
> `PowerShell > propriedades > Fonte > "Fira Code Retina"`.

Com a fonte já instalada e configurada em nosso terminal, podemos seguir adiante.

### Install

Vamos fazer o passo-a-passo da instalação do Drácula-Theme:

**Execute o PowerShell como Administrador, e faça:**
> `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Confirm`

**Após, vamos instalar o PowerShellGet***
> `Install-Module PowerShellGet -Scope CurrentUser -Force -AllowClobber`

**E só então, instalamos o Posh-Git:**
> `PowerShellGet\Install-Module posh-git -Scope CurrentUser -AllowPrerelease -Force`

**Após, instalamos uma atualização do PSReadLine:**
> `Install-Module PSReadLine -Scope CurrentUser -AllowClobber -AllowPrerelease -Force`
 ***Esta atualização soluciona problemas com as funções do prompt utilizadas pelo posh-git.***

Restart o terminal, e novamente execute-o como Administrador. 

**Confira se a versão instalada do PSReadline é a 2.0:**
> `Get-Module PSReadLine`

***Atenção: Não instale o posh-git com o Chocolatey (gerenciador de pacotes do Windows)***

### Config

Para configurar nosso terminal com o nosso Thema, iremos editar o nosso arquivo de $profile. Sempre que o PowerShell é executado ele lê esse arquivo e seta as preferências do usuário.

**O arquivo de profile possui a extensão .ps1, e geralmente, fica na pasta**
> `Documentos > WindowsPowerShell > Microsoft.PowerShell_profile.ps1`

**Veja abaixo:**

> ![Profile File](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/main_profile_power_shell.png "Diretório e arquivo a ser editado")

Clique com botão direito no arquivo `Microsoft.PowerShell_profile.ps1` e após em `Editar`.

**Insira o código abaixo:**

```
# Dracula readline configuration. Requires version 2.0, if you have 1.2 convert to `Set-PSReadlineOption -TokenType`
Set-PSReadlineOption -Color @{
    "Command" = [ConsoleColor]::Green
    "Parameter" = [ConsoleColor]::Gray
    "Operator" = [ConsoleColor]::Magenta
    "Variable" = [ConsoleColor]::White
    "String" = [ConsoleColor]::Yellow
    "Number" = [ConsoleColor]::Blue
    "Type" = [ConsoleColor]::Cyan
    "Comment" = [ConsoleColor]::DarkCyan
}
# Dracula Prompt Configuration
Import-Module posh-git
$GitPromptSettings.DefaultPromptPrefix.Text = "$([char]0x2192) " # arrow unicode symbol
$GitPromptSettings.DefaultPromptPrefix.ForegroundColor = [ConsoleColor]::Green
$GitPromptSettings.DefaultPromptPath.ForegroundColor =[ConsoleColor]::Cyan
$GitPromptSettings.DefaultPromptSuffix.Text = "$([char]0x203A) " # chevron unicode symbol
$GitPromptSettings.DefaultPromptSuffix.ForegroundColor = [ConsoleColor]::Magenta
# Dracula Git Status Configuration
$GitPromptSettings.BeforeStatus.ForegroundColor = [ConsoleColor]::Blue
$GitPromptSettings.BranchColor.ForegroundColor = [ConsoleColor]::Blue
$GitPromptSettings.AfterStatus.ForegroundColor = [ConsoleColor]::Blue
```

**Seu arquivo deve ficar da seguinte forma:**

> ![Arquivo PowerShell](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/power_shell_dracula_theme_settings.png "Arquivo profile PowerShell editado.")

Por fim, você pode alterar o background do terminal, com a cor padrão de background do Drácula-Theme.

**Em propriedades do terminal, novamente:**
> ![Set Background Color](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/power_shell_dracula_background_color.png "Cores > Core De Fundo > Vermelho:40, Verde: 42 e Azul:54")

***Obs: Poderíamos ter feito isso via $profile.***

Nossas configurações estão prontas. 

Agora, basta reiniciar o seu terminal e verificar as alterações.

**Finalizado todos os passos, o seu Terminal do PowerShell deve estar assim:**
> ![Drácula-Theme PowerShell](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/dracula_theme_power_shell.png "Drácula-Theme PowerShell")


# ConEmu

### Install

Instalar o ConEmu é fácil. Você pode utilizar o Chocolatey (administrador de pacote do Windows):

```
choco install ConEmu

```
***Atenção: Se você não possui o Chocolatey instalado, veja como fazê-lo em:
[chocolatey.org](https://chocolatey.org/)***

Com o ConEmu instalado, vamos explicar algumas configurações desse poderoso console.


### Configs

Vamos verificar as configurações.


#### Escolhendo um terminal padrão

**Clique com botão direito no cabeçalho e vá até settings:**

> ![ConEmu Settings](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/con_emu_settings.png "ConEmu Settings")

Nas configurações, observe que você pode selecionar qual console deseja executar "por trás" do conEmu.

#### Escolhendo cores

Você também pode escolher o padrão de cores do terminal, como sendo o padrão do terminal selecionado, ou ainda, um padrão que você customiza no arquivo conEmu.xml.

> ![Configurações de cores do ConEmu](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/con_emu_color_settings.png "Editando as cores no ConEmu")

Observe que você pode selecionar um arquivo .xml contendo várias customizações do conEmu. > [Veja o modelo do arquivo aqui, no repositório do JanDeDobbeleer](https://gist.github.com/JanDeDobbeleer/71c9f1361a562f337b855b75d7bbfd28)

Essa customização é bem Dark e muito legal!

#### Adicionando abas na janela do terminal

Você pode executar mais de um terminal na mesma janela, utilizando abas:

> ![Abas no conEmu](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/con_emu_abas.png "Uma única janela, com 3 terminais abertos")

#### Escolhendo fontes

Lá atrás pedimos para você gravar o fato do Oh-My-Posh ter se baseado no projeto PS-Config e no Oh-My-ZSH. Pois bem, a cadeia de caracteres utilizada pelo PS-Config, foi baseada no Vim-Powerline. 

Por isso, precisaremos utilizar uma fonte que seja compatível com as fontes compiladas para o Vim-Powerline (No Windows).

Como temos poucas fontes "Powerline" compatíveis com Windows, e ainda, que sejam Monotype ou Lucida (tipografias aceitas pelo PowerShell), o conEmu resolve muito fácil esse problema, já que nele, você poderá utilizar qualquer tipo de fonte customizada em seu terminal. veja abaixo:

> ![ConEmu Fontes](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/con_emu_fonts.png "Fontes no ConEmu")

Dessa forma, a compilação dos símbolos do Oh-My-Posh será compatível com a do Terminal, interpretando a cadeia de caracteres Unicode de cada um, corretamente.

Esse não é um problema difícil de ser solucionado via código, bastando alterarmos a cadeia de caracteres para as fontes Monotype e Lucida do windows. Mas é mais fácil testarmos diferentes fontes Mono "for Powerline" para Windows.

Já que falamos na engine Oh-My-Posh, vamos fazer sua instalação.


# Oh-My-Posh

### Install

***Obs: Você já deve estar com o Posh-Git instalado***

**Abra o terminal do PS como administrador, e faça:**
> `Install-Module oh-my-posh -Scope CurrentUser`

**Confira os temas instalados junto com a ferramenta:**
> `\Documents\WindowsPowerShell\Modules\oh-my-posh\2.0.342\Themes`

**Veja abaixo:**
> ![Lista de temas já instalados](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/oh-my-posh-themes.png "Lista de temas já instalados")

Vamos brincar um pouco com essa Engine, e selecionar alguns de seus temas padrão.

### Configs

Para começar a nossa brincadeira, iremos instalar a fonte indicada pelos criadores da Engine a **Meslo LG M Regular for Powerline**. Segue o link do repositório para Download:
> [Meslo LG M Regular](https://github.com/powerline/fonts/blob/master/Meslo%20Slashed/Meslo%20LG%20M%20Regular%20for%20Powerline.ttf)

Clique com botão direito no arquivo  baixado, e depois em instalar. 

**Abra o conEmu, vá em settings > fontes. Selecione a fonte instalada:**

![Selecionando fonte conEmu](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/con_emu_sel_fonts.png "Selecionando a fonte no conEmu")

Por fim, você pode selecionar quaisquer temas contidos na pasta `\Documents\WindowsPowerShell\Modules\oh-my-posh\2.0.342\Themes`, diretamente via terminal.

**Para isso, utilize o comando Set-Theme:**
> `Set-Theme Agnoster`

Verifique as mudanças em seu console.

Para manter o thema no seu console, sem ter que selecioná-lo toda vez que abrir o conEmu, edite o seu arquivo de profile:
> `Documentos > WindowsPowerShell > Microsoft.PowerShell_profile.ps1`

***Veja abaixo:***
> ![Set Profile Theme](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/Oh_My_Posh_Set_Profile_Theme.png "Editando o profile para carregar o tema automaticamente.")

Feche e abra novamente o conEmu. O tema deve ser carregado automaticamente na inicialização do terminal.

Para mais informações sobre comandos e ainda, como construir seu próprio tema, acesse o repositório do Oh-My-Posh:
>[Oh-My-Posh](https://github.com/JanDeDobbeleer/oh-my-posh)

Chegou o momento de deixar muita coisa pra traz, e ficarmos somente com o que nos interessa. Vamos para o Minimal Theme, e para melhor parte do OpenSource, conecte tudo, teste, e depois, fique com o que te interessa!


# Oh-My-Posh: Onix-Spaceship Theme

Estamos na reta final de nossa configuração.

**Baixe o arquivo Onix-Spaceship.psm1 e cole na pasta do PowerShell:**
`\Documents\WindowsPowerShell\Modules\oh-my-posh\2.0.342\Themes`

**Veja abaixo:**
> ![Onix-Spaceship Themes Folder](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/Onix_Spaceship_Themes_Folder.png "Pasta Themes contendo os Temas do Oh-My-Posh")

Aogra, edite o arquivo de $profile do PowerShell, como feito anteriormente:
> `Documentos > WindowsPowerShell > Microsoft.PowerShell_profile.ps1`

Vamos inserir a seguinte informação:

```
# requires -Version 2 -Modules posh-git
# Dark Colors: Onix-Spaceship
Set-PSReadlineOption -Color @{
    "Command" = "#50fa7b"
    "Parameter" = "#ff79c6"
    "Operator" = "#bd93f9"
    "Variable" = "#f8f8f2"
    "String" =  "#ffb86c"
    "Number" = [ConsoleColor]::Blue
    "Type" = "#8be9fd"
    "Comment" = "#6272a4"
    "Selection" = "#44475a"    
}

# Import Onix-Spaceship Thema
Import-Module posh-git
Import-Module Oh-My-Posh
Set-Theme Onix-Spaceship
clear-host
```

Veja abaixo:

> ![Onix-Spaceship Profile Config](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/onix_spaceship_profile.png "Configuração do Thema no Arquivo de Profile do PowerShell")

Dessa forma, o powershel irá iniciar com o nosso tema padrão.

#### Configurando o Onix-Spaceship no ConEmu:

Precisamos de mais um passo para rodar nosso tema, caso tenha gostado do ConEmu e irá utiliza-lo daqui para frente. Ele possui seu próprio esquema de cores, sendo assim, vamos alterar algumas delas para deixá-lo com um Dark bem interessante:

> ![ConEmu Onix-Spaceship colors schema](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/con_emu_onix_spaceship_color_settings.png "Esquema de cores do conEmu para Onix-Spaceship")

#### Fonte

A fonte que estou utilizando com o Tema é a **Fira Code Retina**.








### Referências

>[Dracula-Theme for PowerShell](https://draculatheme.com/powershell/)
>
>[Will Fuqua: dracula-prompt-configuration.ps1](https://github.com/dracula/powershell/blob/master/theme/dracula-prompt-configuration.ps1)
>
>[Dracula-Theme Git-hub](https://github.com/dracula/dracula-theme)
>
>[Posh-Git: A PowerShell environment for Git](https://www.jishuwen.com/d/2dMU)
>
>[Oh-My-Posh](https://github.com/JanDeDobbeleer/oh-my-posh)
>
>[Fira Code Google](https://fonts.google.com/specimen/Fira+Code)
>
>[Fira Code Nerd fonts](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/FiraCode)
>
>[PowerShell Scripting Microsoft Reference Guide](https://docs.microsoft.com/pt-br/powershell/scripting/overview?view=powershell-7)
>
>[Unicode Char Table](https://www.fileformat.info/info/unicode/category/Sm/list.htm)
>
>[Write-Host](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/write-host?view=powershell-7)
>
>[Customize Your PowerShell Prompt with Nerd Fonts & ANSI Escape Sequences](https://www.youtube.com/watch?v=DhzR7mbFE9I)