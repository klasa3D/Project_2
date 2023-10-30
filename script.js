class Test1 {
    constructor(name) {
        this.name = name;
    }
     petla (start1, end2, coile) {
    console.log(this.name);
    for (let x = start1; x <= end2; x += coile)
    console.log(x);
}
}
const mojaKlasa = new Test1("!NAZWA!");
mojaKlasa.petla(0, 10, 1);
