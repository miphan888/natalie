@echo off
cd /d "%~dp0"
powershell -NoProfile -Command "try { (Invoke-WebRequest http://127.0.0.1:8460/hub -UseBasicParsing -TimeoutSec 2).StatusCode | Out-Null; exit 0 } catch { exit 1 }"
if errorlevel 1 (
  set NOVA_SIDEKICK=1
  cmd.exe /c "\"C:\Users\miphan\Desktop\GA3 Restart Server.bat\" -NoBrowser -Silent"
  timeout /t 3 /nobreak >nul
)
set EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe
if not exist "%EDGE%" set EDGE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe
start "" "%EDGE%" --start-fullscreen --new-window "http://127.0.0.1:8460/natalie/"
