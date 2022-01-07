if(getQr("canvas")==null){
  const canvasEl=docuement.createElement("canvas");
  document.body.appendChild(canvasEl);
}

ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.font="16px Arial";
ctx.fillStyle='white';
ctx.fillText("loading...",20,20);


class TextAnimation{//this class animate particles
  constructor(x,y,endX,endY,color){
   this.x=x;
   this.y=y;
    this.endX=endX;
    this.endY=endY;
    this.color=color;
  }
draw(){//draw particle
  ctx.save();
  ctx.beginPath();
  ctx.arc(this.x,this.y,1,0,Math.PI*2,true);
  ctx.fillStyle=this.color;
  ctx.fill();
  ctx.closePath()
  ctx.restore();
 
}

update(){
  if(this.x==this.endX && this.y==this.endY)return "save";
  let Xis={nagetive:false}//Xis means X is nagetive or positive => Xis
  let Yis={nagetive:false}
if(this.x > this.endX){
  this.x -= 5;
  Xis.nagetive=true
}
else{
this.x += 5;
Xis.nagetive=false
} 
//end checking X


if(this.y > this.endY){
this.y -= 5;
Yis.nagetive=true
}
else{
  this.y += 5;
  Yis.nagetive=false 
  
}//end checking for Y

//detecting main position for X co ordinant
const testNagetiveNumberCollision = (Xis.nagetive && (this.x <= this.endX));

const testPositiveNumberCollision = (!Xis.nagetive && (this.x >= this.endX))

if( testNagetiveNumberCollision || testPositiveNumberCollision ){
//end x movement
this.x=this.endX;
}
//Y co ordinate as well

const testNagetiveNumberCollisionY = (Yis.nagetive && (this.Yis <= this.endY));

const testPositiveNumberCollisionY = (!Yis.nagetive && (this.y >= this.endY))

if( testNagetiveNumberCollisionY || testPositiveNumberCollisionY ){
//end x movement
this.y=this.endY;
}



}

}

class TextPaticles{
  //here will container and get the pexel data
  //fail to draw text from image pexel data i need to draw the text from scratch
getPexel(){
  const imageData=ctx.getImageData(0,0,canvas.width,canvas.height);
  const data=imageData.data;
  const cw=imageData.width;
  const ch=imageData.height;
ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);
  for(let y=0;y<=ch;y++){//vartical reading
    for(let x=0;x<=cw;x++){//for horizontal reading
//getting target color using formulea
const n=(y*cw+x)*4;
const red=data[n];
const green=data[n+1];
const blue=data[n+2];
const alphar=data[n+3];

//end reading..
if(red >= 100 && green >= 100 && blue >= 100){

const color=("rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")");
  animatedTextParticleList.push(new TextAnimation(random(0,canvas.width),random(0,canvas.height),x,y,color ));

}
    }
  }
 
}

  drawBox(x,y,color){//draw circle
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2,true);
    ctx.fillStyle=color;
    ctx.fill();
    ctx.closePath()
  }

}


const animatedTextParticleList=[];
let interval=null;


function init(){
  ctx.beginPath();
    ctx.fillstyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);  
  ctx.closePath();
animatedTextParticleList.forEach((e,i)=>{
e.draw();
e.update();
}); 
interval=requestAnimationFrame(init);
}
audio=document.createElement("audio");
audio.src="https://dl.dropbox.com/s/sy2pp8acc61j4mc/Musica.mp3" 
onload=()=>{
  
const text=new TextPaticles();

ctx.clearRect(0,0, canvas.width, canvas.height);

ctx.font="100px arial"
ctx.fillStyle="white";
ctx.fillText("2022",canvas.width/2-120,canvas.height/2);
text.getPexel();
console.log("onloaded");
init();
alert("Code writen with much love❣️ from Austine Samuel software developer Nigeria (: ")
//force audio to play
console.log(audio.readyState)
let play=setInterval (()=>{
if(audio.readyState>=2){
alert('Just celebrating more click screen to play Music');
clearInterval(play);
}

},500);

}


onclick=()=>{
audio.play()
}

//Code writen with much love from Austine Samuel software developer Nigeria (:
//feel free to use this code in any of your software
//to change the 2022 Text another text just change "2022" string on line 149 fillText() function
//your contributions are welcome