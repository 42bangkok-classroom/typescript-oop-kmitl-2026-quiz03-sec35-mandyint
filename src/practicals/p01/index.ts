import { Student } from "./student"

const student = new Student()

student.firstname = 'John'
student.lastname = 'Doe'

console.log(student.printName())
// John Doe
