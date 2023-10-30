class Test1{
    constructor(name)
    {this.name = name;
        
    }


pentla1(start1,end2,coile3)
{
    console.log(this.name);
    for(let x = start1;x <= end2; x+=coile3){
        show(x);
    }
 
    
    function show(txt){
        console.log(txt);
    }
}
}
const mojaKlasa = new Test1("!NAZWA!");
mojaKlasa.pentla1(0,10,1);
