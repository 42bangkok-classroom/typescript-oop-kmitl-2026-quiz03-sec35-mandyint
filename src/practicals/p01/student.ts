export class Student {
    public firstname: string = "John";
    public lastname: string = "Doe";

    printName(){
        return this.firstname + " " + this.lastname;
    }
}
