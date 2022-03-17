# MERN-Auth-Simple

MERN-Auth-Simple

# All Package
===================
1)npm i react-router-dom
2)npm i axios
3)npm i express
4)npm install -g nodemon
5)npm i body-parser
6)npm i cookie-parser
7)npm i mongoose
8)npm i bcrypt
9)npm i cors //Not mandatory you can use proxy into react project


# Problem Solution:
=====================
1.How to fix error- nodemon.ps1 cannot be loaded because running scripts is disabled on this system, (without security risk)?

For those who are not aware of how to solve this error using Windows PowerShell

Open PowerShell (Run As Administrator)
Check the current execution policy using this command
Get-ExecutionPolicy # You should get 'Restricted'
Run this command to make it 'Unrestricted'
Set-ExecutionPolicy Unrestricted
Check again whether execution policy changed by running this command
Get-ExecutionPolicy # You should get 'Unrestricted'
Now try to run nodemon on your project
nodemon 'filename.js'
Hope this would be helpful
