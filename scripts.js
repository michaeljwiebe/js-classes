class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.leather = true;
    }
    sayPrice(){
        return "this product costs " + this.price;
    }
}
class Shoes extends Product {
    constructor(){
        super();
    }
}

var adidas = new Product("boots", 5)
var othershoes = new Shoes("boots", 5)

console.log(adidas);
console.log(othershoes);
