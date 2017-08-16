//Class with name ‘Greeter’
class Greeter {
    name: string;
    age: number;

//defininf Constructor
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

//‘greet()’ method
    greet () {
        return `Hello ${this.name}, you are ${this.age} years of age !!!..`;
    }
}

var men = new Greeter('JOHN', 50);
document.write(men.greet());

//Output: Hello JOHN, you are 50 years of age !!!..