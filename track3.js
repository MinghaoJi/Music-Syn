var num = 32, countNum=15;
var array=[];
for(var i=0; i<num; i++) {
  array.push(0)
}
for (var i=0; i<480; i++) {//buttons for each key
  var btn = document.createElement('button');
  if(i%num==0){
    countNum--;
    document.write("<br>");
  }
  btn.id=i;
  btn.innerHTML = countNum;
  btn.style.width = "39px";
  btn.addEventListener('click', function(event) {
    if(this.style.backgroundColor!='green'){
      array[this.id%32] += 1 << parseInt(this.innerHTML);
      this.style.backgroundColor = "green";
    }else{
      array[this.id%32] -= 1 << parseInt(this.innerHTML);
      this.style.backgroundColor = "white";
    }
    //alert('You clicked button '+ event.target.id);
  });
  document.body.appendChild(btn);
}

document.write("<br><br>");//button for keeping track
var button = document.createElement("button");
button.innerHTML = "Show track";
button.addEventListener('click', function(event) {
  var res='';
  for(var i=0;i<num;i++){
    if(array[i]>0){
      res+=(i+1)+' sequence has keys: ';
      var tmp = array[i];
      for(var k=0;k<15;k++){
        if(tmp & 1>0){
          res+=k+' ';
        }
        tmp=tmp>>1;
      }
      res+='\n';
    }
  }
  alert('The track is\n'+ res);
});
document.body.appendChild(button);

document.write("<br>");//button for clearing
var button = document.createElement("button");
button.innerHTML = "Remove track";
button.addEventListener('click', function(event) {
  for(var i=0;i<num;i++){
    if(array[i]>0){
      var tmp = array[i];
      for(var k=0;k<15;k++){
        if(tmp & 1>0){
          document.getElementById(i+(14-k)*num).style.backgroundColor = "white";
        }
        tmp=tmp>>1;
      }
      array[i]=0;
    }
  }
  alert('The track is removed');
});
document.body.appendChild(button);
