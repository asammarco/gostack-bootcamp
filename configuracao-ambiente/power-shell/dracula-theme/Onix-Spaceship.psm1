#requires -Version 2 -Modules posh-git

function Write-Theme {

    param(
        [bool]
        $lastCommandFailed,
        [string]
        $with
    )

    $lastColor = $sl.Colors.PromptBackgroundColor
    $startColorSymbol = "#50fa7b"
    
    $prompt = Write-Prompt -Object $sl.PromptSymbols.StartSymbol -ForegroundColor $startColorSymbol -BackgroundColor $sl.Colors.SessionInfoBackgroundColor    
        
    $prompt += Write-Prompt ' '

    # Writes the drive portion
    $prompt += Write-Prompt -Object (Get-ShortPath -dir $pwd) -ForegroundColor $sl.Colors.PromptForegroundColor -BackgroundColor $sl.Colors.PromptBackgroundColor    

    $status = Get-VCSStatus
    if ($status) {
        $themeInfo = Get-VcsInfo -status ($status)
        $lastColor = $themeInfo.BackgroundColor     

    #    Quando o GIT Atualiza o STATUS, recebe a mudança de cor. Não queremos nenhuma mudança de cor, a não ser quando o repositório está OK.
    #    Os simbolos ja nos mostram as alterações            
    #    Determina as cores                            
            if(($status.AheadBy -ne '0') -or $status.HasIndex -or $status.HasUntracked -or $status.HasWorking){                
                $prompt += Write-Prompt -Object " $($themeInfo.VcInfo) " -BackgroundColor $lastColor -ForegroundColor $sl.Colors.GitForegroundColor     
            }else{
                $foreground = "#50fa7b"
                $background = "#282a36"                
                $prompt += Write-Prompt -Object " $($themeInfo.VcInfo) " -BackgroundColor $background -ForegroundColor $foreground
            }                            
    }

    if ($with) {    
        $prompt += Write-Prompt -Object " $($with.ToUpper()) " -BackgroundColor $sl.Colors.WithBackgroundColor -ForegroundColor $sl.Colors.WithForegroundColor
        $lastColor = $sl.Colors.WithBackgroundColor
    }        
    $prompt
}

$sl = $global:ThemeSettings #local settings
$sl.PromptSymbols.PromptIndicator = [char]::ConvertFromUtf32(0x203A)
$sl.PromptSymbols.SegmentForwardSymbol = [char]::ConvertFromUtf32(0xE0B0)
$sl.Colors.PromptForegroundColor = [ConsoleColor]::Cyan
$sl.Colors.PromptSymbolColor = [ConsoleColor]::White
$sl.Colors.PromptHighlightColor = [ConsoleColor]::DarkBlue
$sl.Colors.WithForegroundColor = [ConsoleColor]::White
$sl.Colors.VirtualEnvForegroundColor = [System.ConsoleColor]::White


#Onix Spaceship
$sl.PromptSymbols.StartSymbol = "$([char]0x2192)"
$sl.Colors.SessionInfoBackgroundColor = "#282a36"
$sl.Colors.PromptBackgroundColor = "#282a36"
$sl.Colors.WithBackgroundColor = "#282a36"
$sl.Colors.VirtualEnvBackgroundColor = "#282a36"
$sl.Colors.GitLocalChangesColor = "#282a36"
$sl.Colors.GitLocalChangesColor = "#282a36"
$sl.Colors.GitForegroundColor = "#bd93f9"
$sl.Colors.GitNoLocalChangesAndAheadColor = "#282a36"
$sl.GitSymbols.BranchIdenticalStatusToSymbol = [char]::ConvertFromUtf32(0x2261)