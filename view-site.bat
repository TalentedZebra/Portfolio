@echo off
cd /d "%~dp0"

echo Starting joaquin-portfolio-aerospace dev server...
echo Press Ctrl+C to stop (or just close this window).
echo.

call node_modules\.bin\vite.cmd --open

pause
