# PowerShell script to start Next.js dev server with correct PATH
# This script ensures Node.js from D:\Setup is in the PATH

# Refresh PATH to include D:\Setup
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
if ($env:Path -notlike "*D:\Setup*") {
    $env:Path += ";D:\Setup"
}

# Verify Node.js is accessible
Write-Host "Checking Node.js..." -ForegroundColor Cyan
$nodeVersion = node --version 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js not found! Please check your installation." -ForegroundColor Red
    exit 1
}

# Verify pnpm is accessible
Write-Host "Checking pnpm..." -ForegroundColor Cyan
$pnpmVersion = pnpm --version 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ pnpm found: $pnpmVersion" -ForegroundColor Green
} else {
    Write-Host "✗ pnpm not found!" -ForegroundColor Red
    exit 1
}

# Start the dev server
Write-Host "`nStarting Next.js development server...`n" -ForegroundColor Yellow
pnpm dev

