var dot=[];
var drawing=[];
var colour='white';
var r;

function setup() {
  canvas=createCanvas(1350,600);
  canvas.mousePressed(dragged);

  r=createButton("Red");
  g=createButton("Green");
  b=createButton("Blue");
  y=createButton("Yellow");
  w=createButton("White");
  p=createButton("Pink");
  pur=createButton("Purple");
  v=createButton("Violet");
  c=createButton("Coral");
  ol=createButton("Olive");
  t=createButton("Turquoise");
  m=createButton("Magenta");
  or=createButton("Orange");
  pp=createButton("Peach");
  te=createButton("Teal");
  slider=createSlider(1,15,1,1);
}

function draw() {
  background(0); 

  slider.position(100,500);
  
  if(mouseIsPressed){
    if(mouseX>400){
      var val=slider.value();
    var point=[mouseX,mouseY,colour,val];
    dot.push(point);
    }
  }
  
  noFill();
  for(var i=0;i<drawing.length;i++){
    var path=drawing[i];
    
  beginShape();
  for(var k=0;k<path.length;k++){
    stroke(path[k][2]);
    strokeWeight(path[k][3]);
  vertex(path[k][0],path[k][1]);
  }
  endShape();
}

r.position(0,00);
r.mousePressed(()=>{
  colour="red";
})

g.position(100,00);
g.mousePressed(()=>{
  colour="green";
})

b.position(200,00);
b.mousePressed(()=>{
  colour="blue";
})

y.position(0,100);
y.mousePressed(()=>{
  colour="yellow";
})

w.position(100,100);
w.mousePressed(()=>{
  colour="white";
})

p.position(200,100);
p.mousePressed(()=>{
  colour="pink";
})

pur.position(0,200);
pur.mousePressed(()=>{
  colour="purple";
})

v.position(100,200);
v.mousePressed(()=>{
  colour="violet";
})

c.position(200,200);
c.mousePressed(()=>{
  colour="coral";
})

t.position(0,300);
t.mousePressed(()=>{
  colour="turquoise";
})

ol.position(100,300);
ol.mousePressed(()=>{
  colour="olive";
})

pp.position(200,300);
pp.mousePressed(()=>{
  colour="peachpuff";
})

or.position(0,400);
or.mousePressed(()=>{
  colour="orange";
})

m.position(100,400);
m.mousePressed(()=>{
  colour="magenta";
})

te.position(200,400);
te.mousePressed(()=>{
  colour="teal";
})

textSize(50);
stroke("white");

strokeWeight(10);
line(400,0,400,700);

strokeWeight(1);
text("THICKNESS : "+slider.value(),0,580);

}
function dragged(){
  dot=[];
  drawing.push(dot);
}

