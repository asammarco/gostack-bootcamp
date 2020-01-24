# Dracula-Theme For PowerShell Prompt

### "E das sombras se fez a luz"

O que iremos fazer é instalar o Drácula-Theme no Windows PowerShell. Esse tema é muito utilizado por diversos programdores, no entanto, sua configuração no PS não é tão trivial.

Primeiro, utilizaremos o módulo Posh-Git do PowerShell para obter e exibir informações, do repositório em que estamos, no terminal. Sendo assim, por meio desse módulo, podemos selecionar quais informações do repositório devem ser exibidas. Para isso, editamos o arquivo de profile (.psm) do PS.



Após, precisamos adicionar alguma lógica de programação, para que a cada mudança de estado (ou status) do nosso repositório, possamos alterar os símbolos, os caracteres e suas cores, ficando evidente ao usuário, as mudanças a serem exibidas no terminal. Mas não faremos isso do ZERO. Utilizaremos um outro plugin chamado "Oh-My-Posh". Ele funciona de forma parecida com o plugin "Oh-My-Zsh" do "Zsh" (Terminal disponível somente para sistemas Unix: MacOS, Linux, etc).




[![Drácula  Avatar](https://avatars2.githubusercontent.com/u/19436447?s=200&v=4 "Confira o repositório do Dracula-Theme")](https://github.com/dracula/dracula-theme)



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