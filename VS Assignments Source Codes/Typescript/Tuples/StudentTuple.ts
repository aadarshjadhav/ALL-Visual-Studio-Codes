let student:[number, string][]
student=[[101,'Aadarsh'], [102,'Abhishek'],[103,'Suraj']]

student[1]=[student[1][0], student[1][1].concat(' Jadhav')];
student[2][1]=student[2][1].concat(' Jadhav')
console.log(student)