var Student = /** @class */ (function () {
    function Student(stud_id, name, mark1, mark2, mark3) {
        this.stud_id = stud_id;
        this.name = name;
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
    }
    Student.prototype.calculaterPercentage = function () {
        this.percent = ((this.mark1 + this.mark2 + this.mark3) / 300) * 100;
        return this.percent;
    };
    Student.prototype.display = function () {
        console.log("Student Details:");
        console.log("Student Id:" + this.stud_id);
        console.log("Student name:" + this.name);
        console.log("Student percentage:" + this.percent);
    };
    return Student;
}());
var stud_obj = new Student(101, "Aadarsh", 55, 67, 78);
stud_obj.calculaterPercentage();
stud_obj.display();
