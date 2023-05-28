@echo off
set title= ELDEN RING Update v1.08.1
TITLE %title%
color 1E
cls
ECHO.
ECHO.   ***************************************************
ECHO.   *            ELDEN RING Update v1.08.1            *
ECHO.   ***************************************************
ECHO.
SETLOCAL ENABLEEXTENSIONS
SETLOCAL ENABLEDELAYEDEXPANSION
cd /d "%~dp0"
:strtchk
set CHKDIR=1
set CHKADM=0
REM - This first 2 CHKxxx rules if doing or not some checks - PUT at '0' to skip
set CKDR=ATESTCHK

:: ======================================================
set DIRCHK=Game\eldenring.exe
REM - One of the file of the right Game Install folder ... if it's not found, batch will abort
set nrtot=2
REM - Total number of files in the 'patch' folder - it's MANDATORY cause it's used also to check if ALL files has been found
set uptot=4
REM - Total number of files in the 'update.exe' SFX -used only in one of the last message to the user (line 166)
:: ======================================================

set EXEPTCH=patch.exe
set EXEUPDA=update.exe
set LSTFIL=lista_updfil.txt
set LSTDIR=lista_updir.txt
set XD3=hpatchz-x64.exe

set DIRNEW=FilesNEW
set DIF=patch
set DX=xdptch
set ARG2=-s-3g
set nr=0
set don=0
set nod=0

:ckpa
IF %CHKDIR% EQU 0 goto :ckad
IF NOT EXIST "%DIRCHK%" ECHO. & goto :nopak

:ckad
IF %CHKADM% EQU 0 goto :strtptch
IF NOT EXIST "%CKDR%" MD "%CKDR%">nul
if errorlevel 1 (
ECHO. & goto :noadm
) ELSE (
RD /Q /S "%CKDR%">nul
)

goto :strtptch

:noadm
ECHO.  ( "%~dp0" )
ECHO. Need ADMIN RIGHTS for actual Folder to complete the process ^^!^^! 
ECHO. Please try to execute the SETUP ""as ADMINISTRATOR"" or maybe
ECHO. Move temporarily the Game Folder in a different Path (e.g.: C:\GAMES ),
ECHO. launch the Setup, let it do its work and then move the folder back.
goto :endchk

:nopak
ECHO.  Data Folder Files NOT FOUND ^^!^^!^^! -  ( "%DIRCHK%" )
ECHO.  Please Install the Patch in the proper Folder ^^!^^!
goto :endchk

:endchk
ECHO. & ECHO. ...press any key to EXIT
PAUSE >nul 2>nul
goto :fin1

:strtptch

:appptch
ECHO. Extracting patch files...
IF EXIST %EXEPTCH% %EXEPTCH% -s -x -y >nul
IF NOT EXIST %DIRNEW% MD %DIRNEW%
IF EXIST %EXEPTCH% del /f /q %EXEPTCH% >nul 2>nul
IF EXIST ~xdelta3.tmp del /f /q ~xdelta3.tmp >nul 2>nul

 IF EXIST %DIF% (
   for /F "delims=" %%F in (%LSTDIR%) do (
   IF NOT EXIST "%DIRNEW%%%~F" MD "%DIRNEW%%%~F"
   )
for /F "delims=" %%P in (%LSTFIL%) do (
   IF EXIST "%%~P" (
   set /a nr=!nr!+1
REM -- 'nr' count added to see the process progression (number !nrtot! must be the total number of patches)
   ECHO Applying Patch to %%~nxP... [ !nr! / !nrtot! ]
   call %XD3% %ARG2% "%%~P" "%DIF%\%%~P.%DX%" "%DIRNEW%\%%~P"
     IF !ERRORLEVEL! NEQ 0 (
     set /a don=!don!+1
     ECHO.      Patching of the file  "%%~nxP"  has Failed ^^!^^!  -- ERROR --
     ECHO.
   IF !don! EQU 1 (
   ECHO.This is a list of the files that got some kind of Error during the xdelta patching process ->FileWithERROR.txt
   ECHO. >>FileWithERROR.txt
   )
     ECHO -- ERROR --  Patching of the file  "%%~P"  has Failed ^^!^^!>>FileWithERROR.txt
   IF EXIST "%DIRNEW%\%%~P" ren "%DIRNEW%\%%~P" "%%~nxP_ERR"
     ) ELSE (
     ECHO.  The file is OK.
     )
   ) ELSE (
     set /a nod=!nod!+1
   ECHO.  --WARNING--  The file to patch " %%~nxP " has not been found ^^!^^!
   ECHO. If you already know that this file should be missing in your game,
   ECHO. ignore this message line, else choose 'Y' at the final choice.
   ECHO.
     IF !nod! EQU 1 (
     ECHO.This is a list of the files that could not be found into Your Original Game Folder ->FileNOTfound.txt
     ECHO. If you already know that these files should be missing in your game, ^(e.g. Languages files...^) >>FileNOTfound.txt
     ECHO.  ignore this message lines, otherwise it's maybe better to choose 'Y' at the final choice. >>FileNOTfound.txt
     ECHO. >>FileNOTfound.txt
     )
   ECHO The file to patch " %%~P " has not been found ^^!^^!>>FileNOTfound.txt
   )
del /q /f "%DIF%\%%~P.%DX%" >nul 2>nul
)
 )

REM GOTO :test
IF EXIST FileWithERROR.txt GOTO :test
IF EXIST FileNOTfound.txt GOTO :test
GOTO :NO

:test
ECHO.
ECHO.  DONE ^^!^^!
ECHO.
:start
IF !nr! NEQ !nrtot! (
set /a nrf=!nrtot!-!nr!
ECHO.
ECHO.----------------------------------------------------------------------
ECHO.  WARNING :  '!nrf!'  original files were not found for patching them ^^!^^!
ECHO.   Check the Game Folder and read the log file  FileNOTfound.txt ^^!
ECHO.----------------------------------------------------------------------
ECHO.
)
ECHO.  ***************** Have you got ANY ERROR? ************************
ECHO.  *  Be SURE to scroll the DOS Window to check EVERY FILE is OK^^!^^!  *
ECHO.  *                                                                *
ECHO.  *  Selecting "Y" Restores your old files and ends the updating.  *
ECHO.  *  Selecting "N" Will Continue the updating.                     *
ECHO.  *                                                                *
ECHO.  ******************************************************************
IF %don% NEQ 0 (
ECHO.==========================================================================
ECHO.^^!  WARNING ^^!^^!  At least  '%don%'  files caused an Error... Choose WISELY ^^!^^!  ^^!
ECHO.^^!     Check the Game Folder and read the log file  FileWithERROR.txt ^^!  ^^!
ECHO.==========================================================================
)
ECHO.
set /p choice=   Make Your choice (Y/N):
ECHO.
ECHO.
IF /I '%choice%'=='y' goto :YES
IF /I '%choice%'=='n' goto :NO
IF /I '%choice%'=='Y' goto :YES
IF /I '%choice%'=='N' goto :NO
ECHO.  "%choice%" is not a valid option. Please try again.
ECHO.
GOTO :start

:YES
ECHO.
ECHO Restoring Previous Files...
IF EXIST %DIRNEW% RD /Q /S %DIRNEW% >nul
ECHO.
ECHO.  All Files Restored ^^!^^!
ECHO.
ECHO. ...press any key to EXIT
PAUSE>nul 2>nul
goto :fin1

:NO
ECHO.
ECHO Updating will continue now,
ECHO.
ECHO extracting the remaining %uptot% updated files.
ECHO.
IF EXIST %EXEUPDA% %EXEUPDA% -s -x -y >nul
ECHO.
  IF EXIST %DIRNEW% (
for /F "delims=" %%M in (%LSTFIL%) do (
  IF EXIST "%DIRNEW%\%%~M" (
move /Y "%DIRNEW%\%%~M" "%%~M" >nul
  )
)
RD /Q /S %DIRNEW% >nul
  )
ECHO.   Update was installed successfully ^^!^^!
ECHO.
ECHO.  ....press any key to EXIT...
PAUSE>nul 2>nul
goto :junk

:junk
goto :fin1

:fin1
IF EXIST %DIF% RD /Q /S %DIF% >nul 2>nul
IF EXIST %LSTFIL% del /f /q %LSTFIL% >nul 2>nul
IF EXIST %LSTDIR% del /f /q %LSTDIR% >nul 2>nul
IF EXIST %EXEUPDA% del /f /q %EXEUPDA% >nul
IF EXIST %XD3% del /f /q %XD3% >nul
IF EXIST ~xdelta3.tmp del /f /q ~xdelta3.tmp >nul 2>nul
goto :fin2

:fin2
ENDLOCAL
DEL /F /Q "%~0"
exit /b

