@echo off

rd /s /Q "./bin-release"

call egret publish --version h5

pause