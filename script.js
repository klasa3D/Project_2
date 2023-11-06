// class Test1 {
//     constructor(name) {
//         this.name = name;
//     }
//      petla (start1, end2, coile) {
//         console.log(this.name);
//     for (let x = start1; x <= end2; x += coile)
//     console.log(x);
// }
// }
// const mojaKlasa = new Test1("!NAZWA!");
// mojaKlasa.petla(0, 10, 1);

// class Klient {
//     imie: String;
//     nazwisko: String;
//     wiek: Number;

//     constructor(imie: string, nazwisko: String, wiek: Number) {
//         this.imie = imie;
//         this.nazwisko = nazwisko;
//         this.wiek = wiek;
//     }

// powitanie() { 
//     document.write(`Witaj, ${this.imie} ${this.nazwisko}`); 
// }
// czyPelnoletni() {
//     if (this.wiek >= 18) return true;
//     else return false;
// }
// }
// class Dane_klienta extends Klient { }
// let Nowak = new Dane_klienta("Tadeusz", "Nowak", 44);
// let Kowalski = new Dane_klienta("Jan", "Kowalski", 17);
// document.write(Nowak.czyPelnoletni());
// Kowalski.powitanie();