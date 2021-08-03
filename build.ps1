Write-Output "   ---"
Write-Output "Electron package Windows Installer"
Write-Output "   ---"
npm run build
If ($LastExitCode -gt 0){
    Throw "npm run build failed!"
}

$env:APPLE_INSTALLER_VERSION = '1.2.33' # python ..\build_scripts\installer-version.py -win

if (-not (Test-Path env:APPLE_INSTALLER_VERSION)) {
  $env:APPLE_INSTALLER_VERSION = '0.0.0'
  Write-Output "WARNING: No environment variable APPLE_INSTALLER_VERSION set. Using 0.0.0"
}

Write-Output "   ---"
Write-Output "Increase the stack for apple command for (apple plots create) apple limitations"
# editbin.exe needs to be in the path
editbin.exe /STACK:8000000 daemon\apple.exe
Write-Output "   ---"

$packageVersion = "$env:APPLE_INSTALLER_VERSION"
$packageName = "Apple-$packageVersion"

Write-Output "Apple Version is: $env:APPLE_INSTALLER_VERSION"
Write-Output "   ---"

Write-Output "   ---"
Write-Output "electron-packager"
electron-packager . Apple --asar.unpack="**\daemon\**" --overwrite --icon=.\src\assets\img\apple.ico --app-version=$packageVersion
Write-Output "   ---"

Write-Output "   ---"
Write-Output "node winstaller.js"
node winstaller.js
Write-Output "   ---"

git status

If ($env:HAS_SECRET) {
   Write-Output "   ---"
   Write-Output "Add timestamp and verify signature"
   Write-Output "   ---"
   signtool.exe timestamp /v /t http://timestamp.comodoca.com/ .\release-builds\windows-installer\AppleSetup-$packageVersion.exe
   signtool.exe verify /v /pa .\release-builds\windows-installer\AppleSetup-$packageVersion.exe
   }   Else    {
   Write-Output "Skipping timestamp and verify signatures - no authorization to install certificates"
}

git status

Write-Output "   ---"
Write-Output "Windows Installer complete"
Write-Output "   ---"
