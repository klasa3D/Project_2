class NowaKlasa {
    constructor(nazwa) { this.nazwa = nazwa; }
    pentla(start1, end2, coile3) {
        for (let index = start1; index < end2;
            index += coile3)console.log(index);
    }
}


var aaa = new NowaKlasa("jest");
aaa.pentla(0, 10, 1);