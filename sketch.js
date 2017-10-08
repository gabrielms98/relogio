


function setup(){
 createCanvas(400, 400);
 angleMode(DEGREES);
}

function draw(){
  background(0);
  translate(200, 200);
  rotate(-90);

  let hora = hour();
  let minuto = minute();
  let segundo = second();

  strokeWeight(8);
  stroke(242, 8, 8);
  noFill();
  let segundos = map(segundo, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, segundos);

  stroke(14, 59, 231);
  let minutos = map(minuto, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minutos);

  stroke(4, 241, 20);
  let horas = map(hora%12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, horas);

  push();
  rotate(segundos);
  stroke(242, 8, 8);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minutos);
  stroke(14, 59, 231);
  line(0, 0, 80, 0);
  pop();

  push();
  rotate(horas);
  stroke(4, 241, 20);
  line(0, 0, 60, 0);
  pop();

  stroke(150, 100, 255);
  point(0, 0);

  fill(255);
  noStroke();
  text(hora + ':' + minuto + ':' + segundo, 10, 200);

  // console.log(hora + minuto + segundo);

}
