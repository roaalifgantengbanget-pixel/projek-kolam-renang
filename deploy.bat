@echo off
echo ========================================
echo   DEPLOY KE VERCEL
echo ========================================
echo.

echo [1/3] Checking Vercel CLI...
vercel --version
if %errorlevel% neq 0 (
    echo ERROR: Vercel CLI not installed!
    echo Run: npm install -g vercel
    pause
    exit /b 1
)
echo.

echo [2/3] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.

echo [3/3] Deploying to Vercel...
echo.
echo PILIHAN:
echo 1. Deploy Development (preview)
echo 2. Deploy Production (live)
echo.
set /p choice="Pilih (1/2): "

if "%choice%"=="1" (
    echo.
    echo Deploying to development...
    vercel
) else if "%choice%"=="2" (
    echo.
    echo Deploying to production...
    vercel --prod
) else (
    echo Invalid choice!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOY SELESAI!
echo ========================================
echo.
echo Website Anda sudah online!
echo Cek di: https://vercel.com/dashboard
echo.
pause
