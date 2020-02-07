function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  let timer='';
  let today=new Date();
  let day=Math.floor((this.tl-today)/(24*60*60*1000));
  let hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  let min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  let sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  let me=this;

  if( ( this.tl - today ) > 0 ){
   timer += `
   <span class="number-wrapper">
   <div class="line"></div>
   <span class="number day"> ${this.addZero(day)} </span>
   <div class="caption">DAYS</div></span>`;
   timer += `
   <span class="number-wrapper">
   <div class="line"></div>
   <span class="number day"> ${this.addZero(hour)} </span>
   <div class="caption">HOURS</div></span>`;
   timer += `
   <span class="number-wrapper">
   <div class="line"></div>
   <span class="number day"> ${this.addZero(min)} </span>
   <div class="caption">MINUTES</div></span>`
   timer += `
   <span class="number-wrapper">
   <div class="line"></div>
   <span class="number sec"> ${this.addZero(sec)} </span>
   <div class="caption">SECONDS</div></span>`;
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },
 addZero:function(num){ return ('0'+num).slice(-2); 
}
}
function CDT(){

 // Set countdown limit
 let tl = new Date('2020/11/30 00:00:00');

 // You can add time's up message here
 let timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><div class="number end">Time is up!</div></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}
