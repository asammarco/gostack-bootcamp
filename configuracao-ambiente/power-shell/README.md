# Dracula-Theme For PowerShell Prompt

### "E das sombras se fez a luz"


#### Primeira Parte


O que iremos fazer é instalar o Drácula-Theme no Windows PowerShell. Esse tema é muito utilizado por diversos programdores, no entanto, sua configuração no PS não é tão trivial.

Primeiro, utilizaremos o módulo Posh-Git do PowerShell para obter e exibir informações, do repositório em que estamos, no terminal. Por meio desse módulo, selecionamos quais informações devem ser exibidas, através da edição do arquivo de profile (.psm) do PS.

Nesse ponto, nosso trabalho já estará 99% finalizado. Mas e se quisermos um console um pouco mais minimalist, com alguns simbolos diferentes, bem como cores?
Vamos supor que você queira customizar ainda mais o seu Terminal, e deixá-lo com uma aparência mais clean, e de forma fácil...

>[![Drácula  Avatar](https://avatars2.githubusercontent.com/u/19436447?s=200&v=4 "Install Dracula-Theme PowerShell")](https://draculatheme.com/powershell/)
>
> Clique na imagem para conferir a instalação do Drácula-Theme no PS


#### Segunda Parte


Precisamos adicionar alguma lógica de programação, para que a cada mudança de estado (ou status) do nosso repositório, possamos alterar: símbolos, caracteres,cores etc. 

Não faremos isso do ZERO. Utilizaremos um outro plugin chamado "Oh-My-Posh". Ele funciona de forma parecida com o plugin "Oh-My-Zsh" do "Zsh" (Terminal disponível somente para sistemas Unix: MacOS, Linux, etc), e através dele podemos instalar muitos outros temas já prontos, e ainda, desenvolver e customizar os nossos próprios.

Assim, poderemos ter um tema tão minimalista quanto Oh-My-Zsh Spaceship, e tantos outros... E utilizar uma customização que nos ajude a codar de forma mais efetiva, ao ajustar o nosso ambiente de desenvolvimento conforme nossas necessidades.
"Por exemplo, imagine que você não queira visualizar em seu terminal, todo o caminho até o diretório em que está executando os comandos. Ou imagine que você queira alterar o seu tema utilizando uma simples função Set-Theme".


> ***[Confira o repositório do Oh-My-Posh aqui](https://github.com/JanDeDobbeleer/oh-my-posh)***




> Veja nas imanges abaixo como ficou o terminal:

> Untracked Files: 1 arquivo não adicionado ao git (! ao final).
![untracked_files](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/untracked_files.png)

> Uncommitted Files: 2 arquivos não comitados (~ ao final).
![uncommitted_files](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/uncommitted_files.png)

> Unpushed Files: 1 arquivo a ser upado (↑ ao final).
![unpushed_files](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/unpushed_files.png)

> Pushed Files: Repositório totalmente atualizado (≡ ao final, e letras verdes).
![pushed_files](https://github.com/asammarco/gostack-bootcamp/blob/master/configuracao-ambiente/power-shell/dracula-theme/sample-images/pushed_files.png)


### Início Das Configurações