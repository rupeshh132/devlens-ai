@echo off
title DevLens Backend (Port 8081)
color 0A
echo ========================================================
echo         Starting DevLens Spring Boot Backend
echo ========================================================
cd /d "%~dp0backend"
call .\mvnw.cmd spring-boot:run
pause
