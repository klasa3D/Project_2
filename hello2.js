class hello1 {
  constructor(name) {
    this.name = name;
  }

  hello2(start1, end2, coile3) {
    console.log(this.name);

    for (let x = start1; x <= end2; x += coile3) {
      console.log(x);
    }
  }
}
var hello3 = new hello1("!nazwa!");
hello3.hello2(0, 10, 1);
