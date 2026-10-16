@echo off
cd /d "%~dp0"
if not exist node_modules (
  call npm.cmd install
  if errorlevel 1 goto failed
)
if not exist dist\index.html (
  call npm.cmd run build
  if errorlevel 1 goto failed
)
call npm.cmd start
goto end
:failed
echo Startup failed. Please inspect the error above.
pause
:end
