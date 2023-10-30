class tekst1{
    constructor(name){
this.name=name;
}

pentla1(start1,end2,colie3){
    console.log(this.name);
    for(let x=start1;x<=end2;x+=colie3){
        console.log(x);
    }
}
}

var mojaKlasa = new tekst1("!NAZWA!");
mojaKlasa.pentla1(0,10,1);