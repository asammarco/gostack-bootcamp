# Dracula-Theme For PowerShell Prompt

> *"E das sombras se fez a luz"*

# Introdução

#### Drácula-Theme

O que iremos fazer é instalar o Drácula-Theme no Windows PowerShell. Esse tema é muito utilizado por diversos programdores, no entanto, sua configuração no PS não é tão trivial.

**Drácula-Theme instalado no PowerShell:**

> ![Drácula Theme](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/dracula_theme_power_shell.png "Terminal já configurado com o Drácula -Theme")

Primeiro, utilizaremos o módulo Posh-Git do PowerShell para obter e exibir informações, do repositório em que estamos, no terminal. Por meio desse módulo, selecionamos quais informações devem ser exibidas, através da edição do arquivo de profile (.psm) do PS.

Nesse ponto, nosso trabalho já estará 99% finalizado. Mas e se quisermos um console um pouco mais minimalist, com alguns simbolos diferentes, bem como cores?
Vamos supor que você queira customizar ainda mais o seu Terminal, e deixá-lo com uma aparência mais clean, e de forma fácil...


#### Oh-My-Posh

Precisamos editar(limpar) nosso terminal(símbolos, caracteres, cores etc) e ainda, preservar a exibição de cada mudança de estado (ou status) do nosso repositório, com alguma lógica de programação.

**Tema minimalista construído com Oh-My-Posh:**

> ![Tema minimalista utilizando Oh-My-Posh](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/minimal_theme.png "Tema minimalista utilizando Oh-My-Posh")

Não faremos isso do ZERO. Utilizaremos um outro plugin chamado "Oh-My-Posh". Ele funciona de forma parecida com o plugin "Oh-My-Zsh" do "Zsh" (Terminal disponível somente para sistemas Unix: MacOS, Linux, etc), e através dele podemos instalar muitos temas já prontos, e ainda, desenvolver e customizar os nossos próprios.

Utilizando esse módulo, poderemos construir um tema tão minimalista quanto Oh-My-Zsh Spaceship, ou utilizar temas já prontos. Dessa forma, nos beneficiamos com uma customização que nos ajude a codar de forma mais efetiva, ao ajustar o nosso ambiente de desenvolvimento conforme nossas necessidades.

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

# Oh-My-Posh

### Install


### Configs


### Construindo nosso Minimal-Theme
