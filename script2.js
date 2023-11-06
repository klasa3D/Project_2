class Zwierze {
    constructor(imie) {
      this.imie = imie;
    }
  
    dajGlos() {
      console.log(`${this.imie} wydaje dźwięk.`);
    }
  }
  
  
  class Pies extends Zwierze {
    constructor(imie, rasa) {
      super(imie); 
      this.rasa = rasa;
    }
  
    szczekaj() {
      console.log(`${this.imie} (rasa: ${this.rasa}) szczeka.`);
    }
  }
  
  // Przykład użycia dziedziczenia klas
  const bobby = new Pies("Bobby", "Golden Retriever");
  bobby.dajGlos(); 
  bobby.szczekaj(); 