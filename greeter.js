//Class with name ‘Greeter’
var Greeter = (function () {
    //defininf Constructor
    function Greeter(name, age) {
        this.name = name;
        this.age = age;
    }
    //‘greet()’ method
    Greeter.prototype.greet = function () {
        return "Hello " + this.name + ", you are " + this.age + " years of age !!!..";
    };
    return Greeter;
}());
var men = new Greeter('JOHN', 50);
document.write(men.greet());
//Output:  Hello JOHN, you are 50 years of age !!!..
