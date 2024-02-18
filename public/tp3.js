class Game{
  constructor(size,tab,compt,pair,id1,tent,Interval,time){
      this.size=null;
      this.tab=tab;
      this.compt=compt;
      this.pair=pair;
      this.id1=id1;
      this.tent=tent;
      this.Interval;
      this.time=time;
  }

  create(){
    var ul = document.getElementById(`flex-container`);
    ul.innerHTML = '';
    for(let i=1; i<=(this.size*2); i++){
      var li = document.createElement('li');
      li.className = 'flex-item';
      var img = document.createElement('img');
      img.setAttribute('id', `im${i}`);
      img.setAttribute('class', 'image_css');
      img.setAttribute('src', "image"+(i-1)+".png");
      console.log(img.src);
      img.setAttribute('onclick', "memory.hide("+i+")");
      li.appendChild(img);
      ul.appendChild(li);
    }
  }

  Init(){
    this.tab = [];
    for(let i=1; i<((this.size*2)+1); i++){
      const image = document.getElementById(`im${i}`);
      console.log(test);
      var test = ((image.src).length);
      var x;
      if (test === 143){
        x = 10;
      }else{
        x = 11;
      }
      console.log(test);
      this.tab.push((image.src).substr((image.src).length - x))
      console.log(i);
      console.log(this.tab[i-1]);

    }
  }

  Shuffle(){
      this.tab.sort(() => Math.random() - 0.5);

  }

  Play(){
    
    try{
      this.Show_all();
    }catch{}

    if(this.size==null){
      this.size=2;
      var size = document.getElementById('size');
      size.innerHTML="Size : "+ this.size;
    }

    if(this.time==null){
      this.time=60;
    }

      this.create();

      this.reload();
      this.Init();
      this.Shuffle();

      this.pair= "";
      this.id1=70;
      this.compt=0;
      this.tent=5;
    

      for(let i=1; i<=(this.size*2) ; i++){
        const image = document.getElementById(`im${i}`);
        image.src = this.tab[i-1];
        console.log(this.tab[i-1]);
      }
      setTimeout(() =>this.Hidden(),5 * 1000);
      this.Interval=setInterval(()=>this.managerTimer(),1000);

      //clearInterval(this.Interval);
  

    const b2 =document.getElementById("bt2").removeAttribute("hidden");
    const b3 =document.getElementById("bt1").setAttribute("hidden", "true");
    this.compt=0;
    

  }

  Hidden(){

    try{
      this.Show_all();
    }catch{}
    this.Init();
    var temp = [];
    for(let i=0; i<this.size*2; i++){
      temp[i]=this.tab[i];
      console.log("Hidden temp" + temp[i]);
      }

    temp=this.tab;
    for(let i=1; i<=this.size*2; i++){
            const image = document.getElementById("im"+i);
            if(image.hasAttribute("onclick")){
              image.src="hide.png";
            }
    }
    
    for(let i=0; i<this.size*2; i++){
      temp[i]=this.tab[i];

    }

    document.getElementById("bt3").setAttribute("hidden", "true");
    document.getElementById("bt4").removeAttribute("hidden");


  }

  Show_all(){
    for(let i=1; i<=this.size*2; i++){
      const image = document.getElementById(`im${i}`);
      image.src = this.tab[i-1];
      if(image.hasAttribute("onclick")){
        image.setAttribute("onclick","memory.hide("+i+")");
      }
    }
    document.getElementById("bt3").removeAttribute("hidden");
    document.getElementById("bt4").setAttribute("hidden", "true");

  }

  show(id){

    const image = document.getElementById(`im${id}`);
    image.src = this.tab[id-1];
    image.setAttribute("onclick","memory.hide("+id+")");
    if ((this.pair==image.src)&&(image.src!="hide.png")&&(this.id1!=70)&&(this.id1!=id)){
      console.log(this.pair + " " + image.src);
      console.log("id1: " + this.id1 + " id: " + id);  
      this.findPair(id);
      console.log("Pair Trouvé");
    }
    else if(this.id1==70||(this.id1==id)){
      this.id1=id;
      console.log("id1: " + this.id1 + " id: " + id);
      this.pair=image.src;
      console.log("1 seule carte sélectionnée");
    }
    else if(this.id1!=70){
      console.log("id1: " + this.id1 + " id: " + id);
      setTimeout(() =>this.ResetChoice(id),5 * 1000);
      //this.pair=image.src;
      console.log("Pair Non Trouvé");
    }

    
  }

  hide(id){

    const image = document.getElementById(`im${id}`);
      image.src = "hide.png";
      image.setAttribute("onclick","memory.show("+id+")");
  }

  reload(){

    var randomNumber;
    var verif = [];
    console.log("size= " + this.size);
  for(let i=1; i<(this.size + 1); i++){
    do{var randomNumber=Math.floor(Math.random() * 43)}while(verif.includes(randomNumber));
    verif.push(randomNumber);
    console.log(randomNumber);
    const image = document.getElementById(`im${i}`);
    image.src = `image${randomNumber}.png`;
    console.log(image.src);
    var e = Number(this.size) + Number(i);
    console.log("e= " + e);
    const image2 = document.getElementById(`im${e}`);
    image2.src = `image${randomNumber}.png`;

  }

  verif = [];
}

  ResetChoice(id){
    const image = document.getElementById(`im${id}`);
    const image2 = document.getElementById(`im${this.id1}`);
    console.log("id1: " + this.id1 + " id: " + id);
    if(image.hasAttribute("onclick")){
      try{
        this.hide(id);
      }catch{}
      console.log("Cache la carte " + id);
    }

    if(image2.hasAttribute("onclick")){
      try{
        this.hide(this.id1);
      }catch{}
      console.log("Cache la carte " + this.id1);
    }

    this.tent=this.tent-1;
    var tent = document.getElementById('tent');
    tent.innerHTML="&#x2764;&#xFE0F:  " + this.tent;
    this.id1=70;
    this.pair="";
    
    
    if(this.tent==0){
      alert("Game Over try again");
      location.reload();
    }
    
    
  }

  findPair(id){
    this.compt=this.compt + 1;

    const image = document.getElementById(`im${id}`);
    image.removeAttribute("onclick");
    image.parentElement.style.backgroundColor="Green";
    const image2 = document.getElementById(`im${this.id1}`);
    image2.removeAttribute("onclick");
    image2.parentElement.style.backgroundColor="Green";
    var score = document.getElementById('score');
    score.innerHTML="Score:  " + this.compt;
    this.time = this.time + 10;
    this.id1=70;
    this.pair="";
    if(this.compt==this.size){
      alert("Congratulations! You win");
      location.reload();

    
    }
    
    if(this.tent==0){
    alert("Game Over try again");
    location.reload();
    }
    

  }

  managerTimer(){
    let timerElement = document.getElementById("timer");
    this.time-- ;
    timerElement.innerHTML = "Timer :" + this.time;


  if (this.time === 0) {
    clearInterval(this.Interval);
    alert("Game Over try again");
    location.reload();
    
  }

  }

  diff(){
    this.size = document.getElementById("nom").value;
    var size = document.getElementById('size');
    size.innerHTML="Size : "+ this.size;
  }

  def(){
    this.time = document.getElementById("timer2").value;
    this.time = Number(this.time);
  }


}

memory= new Game();


