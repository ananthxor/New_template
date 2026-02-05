@echo off
:: 1. Detect Local IP Address
echo Detecting Local IP (192.168.x.x)...
set IP=127.0.0.1
for /f "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /R "IPv4.*192\.168\."') do (
    set IP=%%i
    goto :ipfound
)

:ipfound
set IP=%IP:~1%
echo Detected Local IP: %IP%

:: 2. Start Frontend Server (Adapted for current Vite project)
echo Starting Frontend Server...
echo You can access the app at http://%IP%:3000
:: Note: Vite uses --host to expose to network
start "NewsFlow Frontend" cmd /k "title Frontend (Vite) && npm run dev -- --host 0.0.0.0 --port 3000"
