@echo off
cd /d "%~dp0"
title Guest map

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed.
  echo Install it from https://nodejs.org and run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo Starting http://localhost:5173
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:5173"
call npm run dev
