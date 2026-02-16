export class Person {
    public firstname: string = "John";
    public lastname: string = "Doe";
    public age: number;

    constructor(age: number){
        this.age = age;
    }
    
    printName(){
        return this.firstname, this.lastname;
    }
}