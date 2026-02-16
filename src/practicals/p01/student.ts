export class Student {
    public firstname: string = "John";
    public lastname: string = "Doe";

    printName(){
        console.log(this.firstname + " " + this.lastname);
    }
}
