$date = Get-Date -Format "dd_MM_yyyy"

cd C:\Users\PatatN7\Documents\TestCafe_Practice\

testcafe chrome .\tests\demoqa\testScripts\ --reporter html:.\tests\demoqa\reports\regression_$date.html