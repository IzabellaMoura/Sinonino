//Menu
var tela = 1;
var largura = 200;
var altura = 55;
var xMenu = 245;
var yMenu1 = 80;
var yMenu2 = 220;
var yMenu3 = 300;

// Jogador
var xJogador = 300;
var yJogador = 250;
var vida = 3;

//Imagens
var img;
var img2;

//Palavras
xPos = 200;
yPos = 300;

function preload() {
  img = loadImage('Orientadora.jpeg');
  img1 = loadImage('Programadora.jpeg');
  img2 = loadImage('AndandoB1.png'); 
}
function setup() {
  createCanvas(650, 450);
}

function draw() {
  //Tela de Menu
if(tela == 1){

  background(240);
  //fill('#FFE4C4');
  stroke('#222222');
strokeWeight(3);
  //rect(220, 33, 250, 380, 50, 50, 50, 50);

  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    fill('while')
    rect(xMenu, yMenu1, largura, altura + 40, 10, 50, 10, 50);
    }
    textSize(38);
    fill('black');
    text("JOGAR", 280, 140);

  if(mouseIsPressed && (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura)){
    tela = 2;
  }

  if(mouseX > xMenu+25 && mouseX < xMenu+25 + largura-50 && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    fill('while')
    rect(xMenu+25, yMenu2, largura-50, altura, 50, 10, 50, 10);
  }
    textSize(20);
    fill('red')
    text("INTRODUÇÃO", 280, 255);
  if(mouseIsPressed && (mouseX > xMenu+25 && mouseX < xMenu+25 + largura-50 && mouseY > yMenu2 && mouseY < yMenu2 + altura)){
    tela = 3;
  }

  if(mouseX > xMenu+25 && mouseX < xMenu+25 + largura-50 && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    fill('while');
    rect(xMenu+25, yMenu3, largura-50, altura, 50, 10, 50, 10);
  }
    fill('red');
    text("CRÉDITOS", 295, 335);
  if(mouseIsPressed && (mouseX > xMenu+25 && mouseX < xMenu+25 + largura-50 && mouseY > yMenu3 && mouseY < yMenu3 + altura)){
    tela = 4;
  }

}

  // Jogo em ação
if (tela == 2){
  background(240);
 if (keyIsDown(ESCAPE)){
   tela = 1;
 }
  
  //Vidas e fases
  vidas = 3
  fill(0);
  text("Vidas: " + vida, 30, 30);
  
  text("Fase 1", 290, 30);
  
  
  fill(0);
  noStroke(0);
  textSize(20);
  text("Ajude Sinonino a encontrar a resposta certa!!", 130, 60);
  text("PALAVRA DA RODADA: CORAJOSO", 50, 100);
  
  
  //movimentação
  
  image(img2, xJogador, yJogador, 50, 50);
  if(keyIsDown(37) && xJogador > 0){
     xJogador -= 5;
     }
   if(keyIsDown(39) && xJogador < 600){
    xJogador += 5;
  }
  if(keyIsDown(38) && yJogador > 100){
    yJogador -= 5;
  }
  if(keyIsDown(40) && yJogador < 400){
    yJogador += 5;
  }
  
  fill(219);
  stroke(0);
  
  if(dist(xJogador, yJogador, xPos-50, yPos-80) < (50)){
   
   fill('green'); 
    ellipse(xPos-50, yPos-80, 150, 50);
  text("VALENTE", 100, 210, 150, 50);
    } 
    else{
  ellipse(xPos-50, yPos-80, 150, 50);
  text("VALENTE", 100, 210, 150, 50);
  ellipse(xPos-50, 350, 150, 50);
  text("TEMEROSO", 95, 340, 150, 50);
  ellipse(500, yPos-80, 150, 50);
  text("RECEOSO", 450, 210, 150, 50);
  ellipse(500, 350, 150, 50);
  text("COVARDE", 450, 340, 150, 50);
    }
}
  // Informações sobre o jogo
  else if(tela == 3){
    background(240);
    if (keyIsDown(ESCAPE)){
   tela = 1;
 }
    //textAlign(CENTER);
    fill('blue');
    textSize(32);
    text("Se trata de um jogo para alunos do\n        6º ano/Língua portuguesa. \n\n(EF06LP03) O jogador deve analisar \n  as diferenças de sentido e ajudar a\nSinonino, um menino meio atrapalhado\ncom as palavras, a encontrar o sinônimo\nque melhor corresponde à palavra \napresentada na rodada. \n         (Utilize as setas do teclado)", 50, 80);
    
  }


  // Tela de Créditos 
  else if(tela == 4){
        background(240);
    if (keyIsDown(ESCAPE)){
   tela = 1;
 }
    background(240);
    fill(0);
    noStroke();
    textSize(17);
    text("Orientadora: Thaísa Rafaela Costa dos Santos", 20, 230);
    text("(Professora de Língua Portuguesa na Rede\nMunicipal de Natal)", 20, 250);
    image(img, 100, 0, 200, 200);
    text("Programadora: Izabella Caroline P. da S. Moura", 290, 420);
   image(img1, 390, 190, 200, 200);
}
}