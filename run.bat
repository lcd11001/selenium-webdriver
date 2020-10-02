@echo OFF

set CURR_DIR=%~dp0

set CHROME_DRIVER_DIR=%CURR_DIR%node_modules\chromedriver\lib\chromedriver
set FIREFOX_DRIVER_DIR=%CURR_DIR%node_modules\geckodriver

set PATH=%PATH%;%CHROME_DRIVER_DIR%;%FIREFOX_DRIVER_DIR%

cls
call node %CURR_DIR%source\library.js