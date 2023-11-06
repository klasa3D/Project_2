class Pojazd {
    constructor(imie) {
      this.imie = imie;
    }

    dajGlos() {
      console.log(`${this.imie} wydaje dźwięk.`);
    }
  }


  class Auto extends Pojazd {
    constructor(imie, model) {
      super(imie); 
      this.model = model;
    }

    jedzie() {
      console.log(`${this.imie} (model: ${this.model}) brmmm.`);
    }
  }

  // Przykład użycia dziedziczenia klas
  const bobby = new Auto("BMW", "M4");
  bobby.dajGlos(); 
  bobby.jedzie(); 