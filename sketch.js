function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("green");
    fill("red");
    textSize(64);
    textAlign(CENTER, CENTER);
    
    let maximo = width;
    let minimo = 0;
    // mouseX, 0, width ==> 0, palavra.length
    let palavra ="ProfessoraElizabeth😜";
    let quantidade = map(mouseX, 0 , width, 0, palavra.length);
    //console.log(quantidade);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200);
    
    // if(mouseX < 50) {
    //   let palavra = "P";
    //   text(palavra, 200, 200);  
    // } else if(mouseX < 100) {
    //   let palavra = "Ca";
    //   text(palavra, 200, 200);
    // } else {
    //   let palavra = "Professora😜";
    //   text(palavra, 200, 200);
    // }
    
  }