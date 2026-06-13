@echo off
title World Cup Draft & Simulation Launcher
color 0A
cls

echo =======================================================
echo     DÜNYA KUPASI DRAFT VE SİMÜLASYON OYUNU
echo     World Cup Draft & Simulation Game Launcher
echo =======================================================
echo.
echo [1/3] Sunucu baslatiliyor... (Starting server...)
echo WinPython konumu kullaniliyor: D:\WinPython\WPy64-31380
echo.

:: Start the Python HTTP server in the background
start "World Cup Draft Server" /B "D:\WinPython\WPy64-31380\python\python.exe" -m http.server 8000

:: Wait 2 seconds for server to start
timeout /t 2 /nobreak >nul

echo [2/3] Tarayici aciliyor... (Opening default web browser...)
:: Launch default web browser
start http://localhost:8000

echo.
echo [3/3] BASARILI! (SUCCESS!)
echo.
echo -------------------------------------------------------
echo  Oyun tarayicinizda acilmis olmalidir.
echo  Sunucunun acik kalmasi icin bu pencereyi kapatmayin.
echo.
echo  The game should now be open in your browser.
echo  Do not close this window to keep the server running.
echo -------------------------------------------------------
echo.
echo Sunucu kapatilmak istendiginde Ctrl+C tuslarina basin veya pencereyi kapatin.
echo Press Ctrl+C or close this window to stop the server.
echo.

:: Prevent script from closing immediately
pause
