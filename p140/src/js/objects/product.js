export function Product(name, price) {
    this.name = name;
    this.price = price;
    this.label = function() {
        return `${this.name} — €${this.price.toFixed(2)}`;
    };
}
