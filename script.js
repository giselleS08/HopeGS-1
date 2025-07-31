
//To list:
//screens through first part



/* VARIABLES */
let flower;
let Button;
let screen = 0;
let score =0;
let duck;
let allow1 = true;
let allow2 = true;
let allow3 = true;
let allow4 = true;
let allow5 = true;
let allow6 = true;
let allow7 = true;
let allow8 = true;
let allow9 = true;
let allow10 = true;

let allows1 = true;
let allows2 = true;
let allows3 = true;
let allows4 = true;
let allows5 = true;
let allows6 = true;
let allows7 = true;
let allows8 = true;
let allows9 = true;
let allows10 = true;
let position = 0;
let bgImg;
let bgImg2;


/* PRELOAD LOADS FILES */
function preload(){
  bgImg = loadImage("assets/rain.png");
  bgImg2 = loadImage("assets/star.png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(253, 253, 150);
 

  Button = new Sprite (-300, -300, 100,50,"k");
  Button.color = "#FDFD96";
  Button.textSize = 35;
  Button.text = "Next";

  Barrier = new Sprite (300, 300+300, 100,20,"k");
  Barrier.color = "#40BF4D";

    

  TrashBin = new Sprite (300, 300+300, 100,20,"k");
  TrashBin.color = "#40BF4D";
  
  
  let PeskyDirtText = `
  ....aaas
  .addaas
  addaaass
  adaaaass
  aaaaasss
  saaassss
  .ssssss
  ..ssss
  `;
  let palette3 = {
    a: color(134,71,65),
    s:color(45,54,72),
    d:color(185,165,137)
  };




  let mainFlowerText = `
  ...........aaa
  .....aaaasssaaaa.aaa
  ....asssasddasssasssa
  ....asddasdffddsaddsa
  .aaaasdfaaffffdsaaasa
  .asssaaaasssaaaaasssaaaa
  .asdasssaddsasssaddsasssa
  .asdasddffdsasddffdsaddsa
  ..aaasdfaafaasdfaafaafdsa
  .asssaafaafdsaafaafdsaaaa
  .asddasdffddsasdffddsasssa
  .asdfasddasssasddasssfddsa
  .aaffasssaaaaasssaaaaffdsa
  asdffaaaasssaaaaasssaffaa
  asddfsssaddsasssaddsafdsa
  asssasddffdsasddffdsaddsa
  .aaaasdfaafaasdfaafaasssa
  .asdfaafaafdsaafaafdsaaa
  .asddasdffddsasdffddsadsa
  .asssasddasssasddasssadsa
  ..aaaasssaaaaasssaaaasssa
  ....asaaasdffffaafdsaaaa
  ....asddasddffdsaddsa
  ....asssasssaddsasssa
  .....aaa.aaaasssaaaa
  .............aaa`;

  let palette1 = {
    a: color(51,56,99),//dark

    s:color(118,188,239),//cyanlike
    d:color(86,149,234),//neutral blue
    f:color(55,96,193)//gray/dark blue
  };

      mainFlower = new Sprite();
        mainFlower.img = spriteArt(mainFlowerText, 12, palette1);
        mainFlower.y=-300;
        mainFlower.rotation =0;
  
 screen = 0;
  let goose = `
  ....bbb
  .baaab
  boobab
  .bbaab
  ..baab
  ..baab
  ..baab
  .baaabb
  .baaaaabb
  .baaaaaaab
  ..baaaaab
  ...bbbbb
  ..boobob
  ..bbbbbb`;

    goosee = new Sprite();
    goosee.img = spriteArt(goose, 7);
    goosee.x=-1000;
    goosee.rotation =0;

  let gooseCry = `
  ....bbb
  .baaab
  boobab
  .bbatb
  ..baab
  ..baab
  ..baab
  .baaabb
  .baaaaabb
  .baaaaaaab
  ..baaaaab
  ...bbbbb
  ..boobob
  ..bbbbbb`;

    goosee2 = new Sprite();
    goosee2.img = spriteArt(gooseCry, 7);
    goosee2.x=-700;
    goosee2.rotation =0;

  Muds = new Sprite();
  Muds.img = spriteArt(PeskyDirtText, 5, palette3);
  Muds.x=-1000;
  Muds.rotation =0;
  PeskyDirt1 = new Sprite();
      PeskyDirt1.img = spriteArt(PeskyDirtText, 6, palette3);
      PeskyDirt1.x=-100;
      PeskyDirt1.rotation =0;


  Mean1 = new Sprite();
    Mean1.img = spriteArt(PeskyDirtText, 9, palette3);
    Mean1.x=-900;
    Mean1.rotation =0;
    Mean2 = new Sprite();
    Mean2.img = spriteArt(PeskyDirtText, 9, palette3);
    Mean2.x=-900;
    Mean2.rotation =0;
    Mean3 = new Sprite();
    Mean3.img = spriteArt(PeskyDirtText, 9, palette3);
    Mean3.x=-900;
    Mean3.rotation =0;

  PeskyDirt2 = new Sprite();
  PeskyDirt2.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt2.x=-100;
  PeskyDirt2.rotation =0;
  little1 = new Sprite();
    little1.img = spriteArt(PeskyDirtText, 2, palette3);
    little1.x=-500;
    little1.rotation =0;

  little2 = new Sprite();
  little2.img = spriteArt(PeskyDirtText, 2, palette3);
  little2.x=-500;
  little2.rotation =0;

  little3 = new Sprite();
  little3.img = spriteArt(PeskyDirtText, 2, palette3);
  little3.x=-500;
  little3.rotation =0;

  little4 = new Sprite();
  little4.img = spriteArt(PeskyDirtText, 2, palette3);
  little4.x=-500;
  little4.rotation =0;

  little5 = new Sprite();
  little5.img = spriteArt(PeskyDirtText, 2, palette3);
  little5.x=-500;
  little5.rotation =0;

  little6 = new Sprite();
  little6.img = spriteArt(PeskyDirtText, 2, palette3);
  little6.x=-500;
  little6.rotation =0;

  PeskyDirt3 = new Sprite();
  PeskyDirt3.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt3.x=-500;
  PeskyDirt3.rotation =0;

  PeskyDirt4 = new Sprite();
  PeskyDirt4.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt4.x=-100;
  PeskyDirt4.rotation =0;

  PeskyDirt5 = new Sprite();
  PeskyDirt5.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt5.x=-100;
  PeskyDirt5.rotation =0;

  PeskyDirt6 = new Sprite();
  PeskyDirt6.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt6.x=-100;
  PeskyDirt6.rotation =0;

  PeskyDirt7 = new Sprite();
  PeskyDirt7.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt7.x=-100;
  PeskyDirt7.rotation =0;

  PeskyDirt8 = new Sprite();
  PeskyDirt8.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt8.x=-100;
  PeskyDirt8.rotation =0;

  PeskyDirt9 = new Sprite();
  PeskyDirt9.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt9.x=-100;
  PeskyDirt9.rotation =0;

  PeskyDirt10 = new Sprite();
  PeskyDirt10.img = spriteArt(PeskyDirtText, 6, palette3);
  PeskyDirt10.x=-100;
  PeskyDirt10.rotation =0;
  
  let star = `
  ....o
  ..o
  .oyo
  oyyyo
  .oyo
  ..o
  ..o`;

    sparkle = new Sprite();
    sparkle.img = spriteArt(star, 10);
    sparkle.y=1000;
    sparkle.rotation =0;

  let dino = `
  ....v.v
  .vtttt
  ..tbtbt
  .vttttt
  ..tvv
  tvttvt
  .ttvv
  ..t.t`;

    dinu = new Sprite();
    dinu.img = spriteArt(dino, 10);
    dinu.y=-1000;
    dinu.rotation =0;


  let snail = `
  ..ooo.tttt
  obottyytt
  oootyttyt
  .ootytyyt
  .ootytttt
  .oootyyyo
  .ooooooo`;

    slow = new Sprite();
    slow.img = spriteArt(snail, 6);
    slow.y=-1000;
    slow.rotation =0;

  let heart = `
  ...bb.bb
  bzrbrrb
  brrrrrb
  .brrrb
  ..brb
  ...b`;

    love = new Sprite();
    love.img = spriteArt(heart, 10);
    love.y=-1090;
    love.rotation =0;

  let longCat = `
  ......b...b
  ...blbbblb
  ...blllllb
  ...blblblb
  ...bllpllb
  .bbllaaallbb
  baaaaaaaaaaab
  .bbbaaaaabbb
  ...baaaaab
  ...baaaaab
  ...blaaalb
  ...bllallb
  ...bllallb
  ...bllallb
  ...bllallb
  ...blaaalb
  ...baaaaab
  ...baaaaab
  ...babbbab
  ...bab.bab
  ....b...b`;
  

    cat = new Sprite();
    cat.img = spriteArt(longCat, 5);
    cat.y=1600;
    cat.rotation =0;

  

  let capy = `
  ..........bb
  .bbbbbbbvvb
  bccvvvvvccb
  bcvvvbbvcb
  bcvvvvvvvbb
  bvvvvvvvvvvb
  bvvvvvvvvcvvb
  .bbbvvvvcvvvb
  ...bvvvvcvvvb
  ...bvvvvccvvb
  ...bvcbbbvvb`;


    bara = new Sprite();
    bara.img = spriteArt(capy, 7);
    bara.x = -100;
    bara.rotation =0;
 

  let bee = `
  ....bb.bb
  .baabaab
  ..baabab
  ...bbbbb
  ..bbybyyb
  .bybybyyyb
  bbybybybyb
  .bybybyyyb
  ..bbybyyb
  ...bbbbb`;


    busy = new Sprite();
    busy.img = spriteArt(bee, 6);
    busy.y=-1000;
    busy.rotation =0;



  let flower1 = `
  ..r.r.r
  rrrrr
  rrrrr
  rrrrr
  .rrr
  ..g
  g.g.g
  g.g.g
  .ggg
  ..g`;

  //pinkflower,rose

    rose = new Sprite();
    rose.img = spriteArt(flower1, 5);
    rose.y=-1000;
    rose.rotation =0;

  rose2 = new Sprite();
  rose2.img = spriteArt(flower1, 5);
  rose2.y=-1000;
  rose2.rotation =0;


  let flower3 = `
  ...sss
  saaas
  saaaas
  saaaas...sss
  .saaaas.saaas
  .saasassaasas
  ..saassssaaas
  ...sssssaaas
  .....ssssss
  .....s
  .....s`;

  let palette = {
    a: "#32CD32",
    s:"#2E6F40"
  };


    little = new Sprite();
      little.img = spriteArt(flower3, 4, palette);
      little.y=1900;
      little.rotation =0;
  little.collider = "kinematic";
  little1.collider = "kinematic";


  let flower2 = `
  .....v.v
  ...vvv
  ...cvc
  ....c
  gg..g.g
  .gg.g.gg
  .gg.gggg
  .gggggg
  ..ggggg
  ..gggg
  ...ggg
  ....g`;



    pinkflower = new Sprite();
      pinkflower.img = spriteArt(flower2, 5);
      pinkflower.y=1200;
      pinkflower.rotation =0;
  pinkflower2 = new Sprite();
  pinkflower2.img = spriteArt(flower2, 5);
  pinkflower2.y=1200;
  pinkflower2.rotation =0;
  pinkflower3 = new Sprite();
  pinkflower3.img = spriteArt(flower2, 5);
  pinkflower3.y=1200;
  pinkflower3.rotation =0;

  



  


  let sunText = `
  ......bbbbbbb
  ...byyyoooob
  ..byyyoooooob
  .byzyoooooooob
  byzyyooooooooob
  byzyoooooooooob
  bzyyoooooooooob
  bzyyoooooooooob
  bzyyoooooooooob
  byzyoooooooooob
  byzyoooooooooob
  .byzyoooooooob
  ..byyyoooooob
  ...byyyoooob
  ....bbbbbbb`;

   let palette2 = {
     b: "#000000",//dark

     y:"#FFFF00",
     z:"#FFFFFF",//neutral blue
     o:" #FFD700"//gray/dark blue
   };

        sun = new Sprite();
          sun.img = spriteArt(sunText, 10, palette2);
          sun.y=-3470;
          sun.rotation =0;

  let playButtonText = `
 .......bb
 ...bbbzzbbb
 ..bzzbzzbzzb
 ..bzzzbbzzzb
 ..bbzboobzbb
  bzzboooobzzb
  bzzboooobzzb
  .bbzboobzbb
  .bzzzbbzzzb
  .bzzbzzbzzb
  ..bbbzzbbb
  .....bb`;



      playButton = new Sprite();
        playButton.img = spriteArt(playButtonText, 17);
        playButton.y=250;
  playButton.x=180;

        playButton.rotation =0;
  setInterval(changeTarget, 1000);
}

/* DRAW LOOP REPEATS */
function draw() {
  background(253, 253, 150);

  if(playButton.mouse.pressing() )
  {
    screen = 1;
    
  }



  if(Button.mouse.presses())
    {
      screen+=1;
      
    }


  



  if (screen==0)
  {
    Screen0();
  }
  if (screen == 1)
  {
    Screen1();
  }
    if (screen == 2)
    {
      Screen2();
    }
   else if (screen == 3)
    {
      Screen3();
      

    }
   else if (screen == 4)
    {
      Screen4();
    }
   else if (screen == 5)
    {
      Screen5();
    } 
   else if (screen == 6)
    {
      Screen6();
    }
   else if (screen == 7)
    {
      Screen7();
    }
   else if (screen == 8)
    { 
      Screen8();
      Muds.vel.y =5;
      Muds.direction = "down";
      if (kb.pressing("left"))
        Barrier.x-=5;
      else if (kb.pressing("right"))
        Barrier.x+=5;
      else
        Barrier.x+=0;

      if(Barrier.x>=350)
        Barrier.x = 350;
      else if (Barrier.x<=50)
       Barrier.x = 50;

     if (Muds.y >= 410)
     {

       Muds.y = -10;
        Muds.x= random(10,390);
     }
      

      

     if (Muds.collides(Barrier))
        {
          Muds.y=-20;
          Muds.x= random(10,390);
          Muds.vel.y=random(7,12)
          Muds.direction = "down";
          score +=1;
        }
      
      if (score >= 10)
        {
          Barrier.x = 2000;
          Barrier.vel.x= 0;
          Muds.vel.y = 0;
          Muds.x=-2000
          screen = 9;
        }

      

      
    }
   else if (screen == 9)
    {
      Screen9();
    }
   else if (screen == 10)
    {
      Screen10();
    } 
   else  if (screen == 11)
    {
      Screen11();
    }
   else if (screen == 12)
    {
      Screen12();
    }
   else if (screen == 13)
    {
      Screen13();
    }
   else if (screen == 14)
    {
      Screen14();
    }
   else if (screen == 15)
    {
      Screen15();
    } 
   else if (screen == 16)
    {
      Screen16();
      if(PeskyDirt1.mouse.presses())
      {
        allow1 = false;
      }
      if(PeskyDirt2.mouse.presses())
        {
          allow2 = false;
        }
      if(PeskyDirt3.mouse.presses())
        {
          allow3 = false;
        }
      if(PeskyDirt4.mouse.presses())
        {
          allow4 = false;
        }
      if(PeskyDirt5.mouse.presses())
        {
          allow5 = false;
        }
      if(PeskyDirt6.mouse.presses())
        {
          allow6 = false;
        }
        if(PeskyDirt7.mouse.presses())
          {
            allow7 = false;
          }
        if(PeskyDirt8.mouse.presses())
          {
            allow8 = false;
          }
        if(PeskyDirt9.mouse.presses())
          {
            allow9 = false;
          }
        if(PeskyDirt10.mouse.presses())
          {
            allow10 = false;
          }
      if ( allow1 == false && allow2 == false && allow3 == false && allow4 == false && allow5 == false && allow6 == false && allow7 == false && allow8 == false && allow9 == false && allow10 == false)
        {
          screen+=1;
        }
    }
   else if (screen == 17)
    {
      Screen17();
    } 
   else if (screen == 18)
    {
      Screen18();
    }
   else if (screen == 19)
    {
      Screen19();
    }
   else if (screen == 20)
    {
      Screen20();
    } 
   else if (screen == 21)
    {
      Screen21();
      if ( allows1 == false && allows2 == false && allows3 == false && allows4 == false && allows5 == false && allows6 == false && allows7 == false && allows8 == false && allows9 == false && allows10 == false)
        {
          screen+=1;
        }
    }
   else if (screen == 22)
    {
      Screen22();
    }
   else if (screen == 23)
    {
      Screen23();
    }
   else if (screen == 24)
    {
      Screen24();
    }
   else if (screen == 25)
    {
      Screen25();
    } 
   else if (screen == 26)
    {
      Screen26();
    }
  print(screen);

  
}

/* FUNCTIONS */

function Screen0(){
  background(253, 253, 150);
  fill("black");
  textSize(20);
 text("Click the flower to start!", 100,375);
  textSize(30);
  text("Dreams", 150,100);
}


// Screen 1
//Show groups of people planting plants
function Screen1(){
  Button.pos = {x:340, y:350};
  textSize(18);
  text("In this world, plants are \ndreams. Everyone plants one \nin hopes their dreams come true.", 10, 330);
    playButton.pos = {x:-100,y:-1090};
  //pinkflower,rose

    little1.pos={x:115, y: 75};
    little1.rotation = 0;
    little2.pos={x:115, y: 170};
    little2.rotation = 0;
  little3.pos={x:115, y: 265};
  little3.rotation = 0;
  little4.pos={x:250, y: 75};
  little4.rotation = 0;
  little5.pos={x:250, y: 170};
  little5.rotation = 0;
  little6.pos={x:250, y: 265};
  little6.rotation = 0;

  dinu.pos={x:40, y: 50};
  dinu.rotation = 0;
  busy.pos={x:40, y: 150};
  busy.rotation =0;
  slow.pos={x:330, y: 160};
  slow.rotation =0;
  cat.pos={x:40, y: 255};
  bara.pos={x:330, y: 50};
  bara.rotation =0;
  goosee.pos={x:330, y: 255};
  goosee.rotation =0;
}

// Screen 2
// Zoom on goose growing a plant
function Screen2(){
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  goosee.pos={x:330, y: -255};


  little1.pos={x:140, y: 230};
    little1.rotation = 0;
    little2.pos={x:115, y: -170};
    little2.rotation = 0;
  little3.pos={x:115, y: -265};
  little3.rotation = 0;
  little4.pos={x:250, y: -75};
  little4.rotation = 0;
  little5.pos={x:250, y: -170};
  little5.rotation = 0;
  little6.pos={x:250, y: -265};
  little6.rotation = 0;
  
  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little.pos={x:160, y: -230};
  little.rotation =0;
  text("One day, a goose named Goosé \nreally wanted her seed to grow \ninto a beautiful and healthy flower.", 10, 330 );
}

// Screen 3
//everyone's is waiting
function Screen3(){
  little1.pos={x:115, y: 75};
    little1.rotation = 0;
    little2.pos={x:115, y: 170};
    little2.rotation = 0;
  little3.pos={x:115, y: 265};
  little3.rotation = 0;
  little4.pos={x:250, y: 75};
  little4.rotation = 0;
  little5.pos={x:250, y: 170};
  little5.rotation = 0;
  little6.pos={x:250, y: 265};
  little6.rotation = 0;

  dinu.pos={x:40, y: 50};
  dinu.rotation = 0;
  busy.pos={x:40, y: 150};
  busy.rotation =0;
  slow.pos={x:330, y: 160};
  slow.rotation =0;
  cat.pos={x:40, y: 255};
  cat.rotation =0;
  bara.pos={x:330, y: 50};
  bara.rotation =0;
  goosee.pos={x:330, y: 255};
  goosee.rotation =0;
  
  text("Everybody waited for their \nseeds to grow...", 10, 350 );
}

// Screen 4
// blooms
function Screen4(){
  pinkflower.pos={x:115, y: 60};
  pinkflower.rotation = 0;
  rose.pos={x:115, y: 155};
  rose.rotation = 0;

  
  dinu.pos={x:40, y: 50};
  dinu.rotation = 0;
  busy.pos={x:40, y: 150};
  busy.rotation =0;
  slow.pos={x:330, y: 160};
  slow.rotation =0;
  cat.pos={x:40, y: 255};
  bara.pos={x:330, y: 50};
  bara.rotation =0;
  goosee.pos={x:330, y: 255};
  goosee.rotation =0;

  little1.pos={x:250, y: 265};
    little1.rotation = 0;
    little2.pos={x:115, y: -170};
    little2.rotation = 0;
  little3.pos={x:115, y: -265};
  little3.rotation = 0;
  little4.pos={x:250, y: -75};
  little4.rotation = 0;
  little5.pos={x:250, y: -170};
  little5.rotation = 0;
  little6.pos={x:250, y: -265};
  little6.rotation = 0;

  //rose2,pinkflower2,pinkflower3
  pinkflower2.pos={x:250, y: 60};
  pinkflower2.rotation = 0;
  rose2.pos={x:250, y: 155};
  rose2.rotation = 0;
  pinkflower3.pos={x:115, y: 265};
  pinkflower3.rotation = 0;

  
  text("...and eventually, everybody's \nplants began to grow into beautiful \nflowers, all except for Goosé's \nseedling (つ﹏<。)", 10, 325 );
}

// Screen 5
//laughs& awful remarks
function Screen5(){
  pinkflower.pos={x:115, y: 60};
  pinkflower.rotation = 0;
  rose.pos={x:115, y: 155};
  rose.rotation = 0;

  dinu.pos={x:40, y: 50};
  dinu.rotation = 0;
  busy.pos={x:40, y: 150};
  busy.rotation =0;
  slow.pos={x:330, y: 160};
  slow.rotation =0;
  cat.pos={x:40, y: 255};
  bara.pos={x:330, y: 50};
  bara.rotation =0;
  goosee.pos={x:330, y: 255};
  goosee.rotation =0;
  text("Since Goosé's seed didn't show \nany signs of growth, everyone\nmade fun of Goosé.", 10, 330 );

}

// Screen 6
//scene full of haha's
function Screen6(){

  dinu.pos={x:100, y: 255};
  dinu.rotation = 0;
  busy.pos={x:240, y: 255};
  busy.rotation =0;
  slow.pos={x:170, y: 255};
  slow.rotation =0;
  cat.pos={x:40, y: 255};
  cat.rotation =0;
  bara.pos={x:330, y: 255};
  bara.rotation =0;
  goosee.pos={x:-330, y: 255};
  goosee.rotation =0;
  little.pos={x:-265, y: 280};
  little.rotation =0;

  
  pinkflower2.pos={x:-250, y: -60};
  pinkflower2.rotation = 0;
  rose2.pos={x:-250, y: -155};
  rose2.rotation = 0;
  pinkflower3.pos={x:-115, y: -265};
  pinkflower3.rotation = 0;
  pinkflower.pos={x:-115, y: -60};
  pinkflower.rotation = 0;
  rose.pos={x:-115, y: -155};
  rose.rotation = 0;
  little1.pos={x:-250, y: -265};
  little1.rotation = 0;

  text("hahaha", 200, 50 );
  text("loser", 10, 100 );
  text("your seed will never grow", 70, 150 );
  text("foolish", 10, 350 );
  text("waste of time on a seed", 20, 390 );

}

// Screen 7
//turn to mud balls
function Screen7(){
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:-330, y:-50};
  goosee.pos={x:330, y: -255};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: -200};
  goosee.rotation =0;
  little.pos={x:160, y: -230};
  little.rotation =0;
  

  Mean1.pos={x:200, y: 200};
    Mean2.pos={x:300, y: 200};
    Mean3.pos={x:100, y: 200};
  text("These hateful comments about \nGoosé's plant turned to balls of \nnegative mud ˙◠˙", 10, 330 );

}

// Screen 8
//collection
function Screen8(){
  background(253, 253, 150);
  Button.pos = {x:-300, y:-300};
  Barrier.y=300;

  Mean1.pos={x:-200, y: -200};
  Mean2.pos={x:-300, y: -200};
  Mean3.pos={x:-100, y: -200};
  textSize(15);
  text("Score: "+ score, 10, 15);
  
  text("Collect mud \nballs to \nprotect the \nplant", 310, 15);
  textSize(18);
  text("Use left and right arrow keys \nto move green barrier", 50, 370);
  
}

// Screen 9
//some gets on  Goosé 
function Screen9(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  goosee.pos={x:330, y: -255};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  Muds.pos = { x: 240, y: 200 };
  Muds.rotation = 0;
  little1.pos={x:140, y: 230};
  little1.rotation = 0;
  textSize(18);
  text("Although, Goosé managed to \nprotect her seedling from the \nnegative mud balls, some mud \ngot on Goosé...", 10, 325 );
}

// Screen 10
//Goosé looks at plant
function Screen10(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  goosee.pos={x:330, y: -255};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little1.pos={x:160, y: 230};
  little1.rotation =0;
  little.pos={x:-160, y: -230};
  little.rotation =0;
  Muds.pos = { x: 240, y: 200 };
  Muds.rotation = 0;
  textSize(18);
  text("The negativity from the mud \nmade Goosé lose hope in her \nseedling from ever growing ( ´ ｰ `)", 10, 330 );
}

// Screen 11
//mud inches toward her
function Screen11(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  goosee.pos={x:330, y: -255};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little1.pos={x:160, y: 230};
  little1.rotation =0;
  Muds.pos = { x: 240, y: 200 };
  Muds.rotation = 0;
  PeskyDirt1.pos = { x: 300, y: 230 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 345, y: 230 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 322, y: 200 };
  PeskyDirt3.rotation = 0;
  textSize(18);
  text("As Goosé began to believe that \nher seedling would never grow, \nmud balls came closer and \ncloser to her...", 10, 325 );

}

// Screen 12
//a mountain of mud hardens
function Screen12(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:-40, y: -50};
  busy.pos={x:-40, y: -150};
  slow.pos={x:-330, y: -160};
  cat.pos={x:-40, y: -255};
  bara.pos={x:-330, y:-50};
  goosee.pos={x:-330, y: -255};

  pinkflower.pos={x:-115, y: -60};
  rose.pos={x:-115, y: -155};
  goosee.pos={x:200, y: 200};
  goosee.rotation =0;
  little1.pos={x:160, y: -230};
  little1.rotation =0;
  Muds.pos = { x: -240, y: 200 };
  Muds.rotation = 0;
  PeskyDirt1.pos = { x: 190, y: 160 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 170, y: 190 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 210, y: 190 };
  PeskyDirt3.rotation = 0;
  PeskyDirt4.pos = { x: 160, y: 220 }; 
  PeskyDirt4.rotation = 0;
  PeskyDirt5.pos = { x: 190, y: 220 };
  PeskyDirt5.rotation = 0;
  PeskyDirt6.pos = { x: 220, y: 220 };
  PeskyDirt6.rotation = 0;
  PeskyDirt7.pos = { x: 150, y: 250 };
  PeskyDirt7.rotation = 0;
  PeskyDirt8.pos = { x: 180, y: 250 };
  PeskyDirt8.rotation = 0;
  PeskyDirt9.pos = { x: 205, y: 250 };
  PeskyDirt9.rotation = 0;
  PeskyDirt10.pos = { x: 230, y: 250 };
  PeskyDirt10.rotation = 0;
  
  textSize(18);
  text("\n...becoming a messy mountain \nof negativity ˙◠˙", 10, 330 );

}

// Screen 13
//look at her hands
function Screen13(){
  background(134,71,65);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  goosee.pos={x:330, y: -255};
//color(134,71,65),
    //s:color(45,54,72),
    //d:color(185,165,137)
  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:-225, y: -200};
  goosee.rotation =0;
  little1.pos={x:160, y: -230};
  little1.rotation =0;
  PeskyDirt1.pos = { x: 190, y: -160 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 170, y: -190 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 210, y: -190 };
  PeskyDirt3.rotation = 0;
  PeskyDirt4.pos = { x: 160, y:- 220 }; 
  PeskyDirt4.rotation = 0;
  PeskyDirt5.pos = { x: 190, y: -220 };
  PeskyDirt5.rotation = 0;
  PeskyDirt6.pos = { x: 220, y: -220 };
  PeskyDirt6.rotation = 0;
  PeskyDirt7.pos = { x: 150, y: -250 };
  PeskyDirt7.rotation = 0;
  PeskyDirt8.pos = { x: 180, y: -250 };
  PeskyDirt8.rotation = 0;
  PeskyDirt9.pos = { x: 205, y: -250 };
  PeskyDirt9.rotation = 0;
  PeskyDirt10.pos = { x: 230, y: -250 };
  PeskyDirt10.rotation = 0;
  Button.pos = {x:340, y:350};
  Muds.pos = { x: -240, y: 200 };
  Muds.rotation = 0;
  goosee2.pos={x:225, y: 200};
  goosee2.rotation =0;
  textSize(18);
  text("Inside the mountain of dirt, Goosé \nfelt lost and sad because she \nbelieved the negative remarks that \nher seed wouldn't grow.", 10, 325 );
}

// Screen 14
//tears form
function Screen14(){
  background(134,71,65);
    Button.pos = {x:340, y:350};
    dinu.pos={x:40, y: -50};
    busy.pos={x:40, y: -150};
    slow.pos={x:330, y: -160};
    cat.pos={x:40, y: -255};
    bara.pos={x:330, y:-50};
    goosee.pos={x:-330, y: -255};
  //color(134,71,65),
      //s:color(45,54,72),
      //d:color(185,165,137)
    pinkflower.pos={x:115, y: -60};
    rose.pos={x:115, y: -155};
      goosee2.pos={x:225, y: 200};
      goosee2.rotation =0;
    little1.pos={x:160, y: -230};
    little1.rotation =0;
    PeskyDirt1.pos = { x: 190, y: -160 };
    PeskyDirt1.rotation = 0;
    PeskyDirt2.pos = { x: 170, y: -190 };
    PeskyDirt2.rotation = 0;
    PeskyDirt3.pos = { x: 210, y: -190 };
    PeskyDirt3.rotation = 0;
    PeskyDirt4.pos = { x: 160, y:-220 }; 
    PeskyDirt4.rotation = 0;
    PeskyDirt5.pos = { x: 190, y: -220 };
    PeskyDirt5.rotation = 0;
    PeskyDirt6.pos = { x: 220, y: -220 };
    PeskyDirt6.rotation = 0;
    PeskyDirt7.pos = { x: 150, y: -250 };
    PeskyDirt7.rotation = 0;
    PeskyDirt8.pos = { x: 180, y: -250 };
    PeskyDirt8.rotation = 0;
    PeskyDirt9.pos = { x: 205, y: -250 };
    PeskyDirt9.rotation = 0;
    PeskyDirt10.pos = { x: 230, y: -250 };
    PeskyDirt10.rotation = 0;
    Button.pos = {x:340, y:350};
    Muds.pos = { x: -240, y: 200 };
    Muds.rotation = 0;
  textSize(18);
  text("After a time of grief, Goosé \nrealized that her plant would only \ngrow if she was there for it and \ntaking care of her beloved plant.", 10, 325 );

}

// Screen 15
//start escaping
function Screen15(){
  background(134,71,65);
    Button.pos = {x:340, y:350};
    dinu.pos={x:40, y: -50};
    busy.pos={x:40, y: -150};
    slow.pos={x:330, y: -160};
    cat.pos={x:40, y: -255};
    bara.pos={x:330, y:-50};
    goosee.pos={x:330, y: -255};
  //color(134,71,65),
      //s:color(45,54,72),
      //d:color(185,165,137)
    pinkflower.pos={x:115, y: -60};
    rose.pos={x:115, y: -155};
    goosee.pos={x:225, y: 200};
    goosee.rotation =0;
    little1.pos={x:160, y: -230};
    little1.rotation =0;
    PeskyDirt1.pos = { x: 190, y: -160 };
    PeskyDirt1.rotation = 0;
    PeskyDirt2.pos = { x: 170, y: -190 };
    PeskyDirt2.rotation = 0;
    PeskyDirt3.pos = { x: 210, y: -190 };
    PeskyDirt3.rotation = 0;
    PeskyDirt4.pos = { x: 160, y:-220 }; 
    PeskyDirt4.rotation = 0;
    PeskyDirt5.pos = { x: 190, y: -220 };
    PeskyDirt5.rotation = 0;
    PeskyDirt6.pos = { x: 220, y: -220 };
    PeskyDirt6.rotation = 0;
    PeskyDirt7.pos = { x: 150, y: -250 };
    PeskyDirt7.rotation = 0;
    PeskyDirt8.pos = { x: 180, y: -250 };
    PeskyDirt8.rotation = 0;
    PeskyDirt9.pos = { x: 205, y: -250 };
    PeskyDirt9.rotation = 0;
    PeskyDirt10.pos = { x: 230, y: -250 };
    PeskyDirt10.rotation = 0;
    Button.pos = {x:340, y:350};
    Muds.pos = { x: -240, y: 200 };
    Muds.rotation = 0;
  goosee2.pos={x:-225, y: -200};
  goosee2.rotation =0;
  textSize(18);
   text("But first, Goosé needed to get out \nof the mountain of negativity. ", 10, 330 );

}

// Screen 16
//click to clear mud
function Screen16(){
  background(253, 253, 150);
  goosee.pos={x:200, y: 200};
  goosee.rotation =0;
  little1.pos={x:160, y: -230};
  little1.rotation =0;
  textSize(18);
  if (allow1 == true)
  {
    PeskyDirt1.pos = { x: 190, y: 160 };
    PeskyDirt1.rotation = 0;
  }
  else
  {
    PeskyDirt1.pos = { x: -190, y: 160 };
    PeskyDirt1.rotation = 0;
  }

  if (allow2 == true)
    {
      PeskyDirt2.pos = { x: 170, y: 190 };
      PeskyDirt2.rotation = 0;
      
    }
    else
    {
      PeskyDirt2.pos = { x: -170, y: 190 };
      PeskyDirt2.rotation = 0;
    }

  if (allow3 == true)
    {
      PeskyDirt3.pos = { x: 210, y: 190 };
      PeskyDirt3.rotation = 0;
      
    }
    else
    {
      PeskyDirt3.pos = { x: -210, y: 190 };
      PeskyDirt3.rotation = 0;
    }

  if (allow4 == true)
    {
      PeskyDirt4.pos = { x: 160, y: 220 }; 
      PeskyDirt4.rotation = 0;
      
    }
    else
    {
      PeskyDirt4.pos = { x: -160, y: 220 }; 
      PeskyDirt4.rotation = 0;
    }

  if (allow5 == true)
    {
      PeskyDirt5.pos = { x: 190, y: 220 };
      PeskyDirt5.rotation = 0;
      
    }
    else
    {
      PeskyDirt5.pos = { x: -190, y: 220 };
      PeskyDirt5.rotation = 0;
    }

  if (allow6 == true)
    {
      PeskyDirt6.pos = { x: 220, y: 220 };
      PeskyDirt6.rotation = 0;
      
    }
    else
    {
      PeskyDirt6.pos = { x: -220, y: 220 };
      PeskyDirt6.rotation = 0;
    }

    if (allow7 == true)
      {
        PeskyDirt7.pos = { x: 150, y: 250 };
        PeskyDirt7.rotation = 0;
        
      }
      else
      {
        PeskyDirt7.pos = { x: -150, y: 250 };
        PeskyDirt7.rotation = 0;
      }

    if (allow8 == true)
      {
        PeskyDirt8.pos = { x: 180, y: 250 };
        PeskyDirt8.rotation = 0;
        
      }
      else
      {
        PeskyDirt8.pos = { x: -180, y: 250 };
        PeskyDirt8.rotation = 0;
      }

    if (allow9 == true)
      {
        PeskyDirt9.pos = { x: 205, y: 250 };
        PeskyDirt9.rotation = 0;
        
      }
      else
      {
        PeskyDirt9.pos = { x: -205, y: 250 };
        PeskyDirt9.rotation = 0;
      }

    if (allow10 == true)
      {
        PeskyDirt10.pos = { x: 230, y: 250 };
        PeskyDirt10.rotation = 0;
      }
      else
      {
        PeskyDirt10.pos = { x: -230, y: 250 };
        PeskyDirt10.rotation = 0;
      }
 
  


  text("Click all the mud off of Goosé ᕙ( •̀ ᗜ •́ )ᕗ " , 30, 385 );
  Button.pos = {x:300, y:-300};
}

// Screen 17
// exit
function Screen17(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
    dinu.pos={x:40, y: -50};
    busy.pos={x:40, y: -150};
    slow.pos={x:330, y: -160};
    cat.pos={x:40, y: -255};
    bara.pos={x:330, y:-50};
    goosee.pos={x:330, y: -255};
  //color(134,71,65),
      //s:color(45,54,72),
      //d:color(185,165,137)
    pinkflower.pos={x:115, y: -60};
    rose.pos={x:115, y: -155};
    goosee.pos={x:225, y: 200};
    goosee.rotation =0;
    little1.pos={x:160, y: -230};
    little1.rotation =0;
    PeskyDirt1.pos = { x: 190, y: -160 };
    PeskyDirt1.rotation = 0;
    PeskyDirt2.pos = { x: 170, y: -190 };
    PeskyDirt2.rotation = 0;
    PeskyDirt3.pos = { x: 210, y: -190 };
    PeskyDirt3.rotation = 0;
    PeskyDirt4.pos = { x: 160, y:-220 }; 
    PeskyDirt4.rotation = 0;
    PeskyDirt5.pos = { x: 190, y: -220 };
    PeskyDirt5.rotation = 0;
    PeskyDirt6.pos = { x: 220, y: -220 };
    PeskyDirt6.rotation = 0;
    PeskyDirt7.pos = { x: 150, y: -250 };
    PeskyDirt7.rotation = 0;
    PeskyDirt8.pos = { x: 180, y: -250 };
    PeskyDirt8.rotation = 0;
    PeskyDirt9.pos = { x: 205, y: -250 };
    PeskyDirt9.rotation = 0;
    PeskyDirt10.pos = { x: 230, y: -250 };
    PeskyDirt10.rotation = 0;
    Button.pos = {x:340, y:350};
    Muds.pos = { x: -240, y: 200 };
    Muds.rotation = 0;
  text("Yayaya, Goosé escaped from \nthe mud mountain of negativity! \nദ്ദി ˉ͈̀꒳ˉ͈́ )✧", 10, 330 );
}

// Screen 18
//more mud comes
function Screen18(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  goosee.pos={x:330, y: -255};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little1.pos={x:160, y: 230};
  little1.rotation =0;
  Muds.pos = { x: -240, y: 200 };
  Muds.rotation = 0;
  PeskyDirt1.pos = { x: 300, y: 230 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 345, y: 230 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 322, y: 200 };
  PeskyDirt3.rotation = 0;
  text("However, the negative mud won't \nleave her alone... ૮₍ ˃ ⤙ ˂ ₎ა ", 10, 330 );

}

// Screen 19
//gets on her
function Screen19(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  goosee.pos={x:330, y: -255};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little1.pos={x:160, y: 230};
  little1.rotation =0;
  Muds.pos = { x: 240, y: 200 };
  Muds.rotation = 0;
  PeskyDirt1.pos = { x: 300, y: 230 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 345, y: 230 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 322, y: 200 };
  PeskyDirt3.rotation = 0;
  textSize(18);
  text("The mud still bothers her because \nit's stopping her from taking care \nof her seed...", 10, 330 );
}

// Screen 20
//grab and squish
function Screen20(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  goosee.pos={x:330, y: -255};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little1.pos={x:160, y: 230};
  little1.rotation =0;
  Muds.pos = { x: 240, y: 200 };
  Muds.rotation = 0;
  PeskyDirt1.pos = { x: 300, y: 230 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 345, y: 230 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 322, y: 200 };
  PeskyDirt3.rotation = 0;
  textSize(18);
  text("...so Goosé decides to flatten the \nnegative mud and use it as \nfertilizer for her seedling", 10, 330 );
}

// Screen 21
// draging game
function Screen21(){

  background(253, 253, 150);
  dinu.pos={x:-40, y: -50};
  busy.pos={x:-40, y: -150};
  slow.pos={x:-330, y: -160};
  cat.pos={x:-40, y: -255};
  bara.pos={x:-330, y:-50};

  pinkflower.pos={x:-115, y: -60};
  rose.pos={x:-115, y: -155};
  goosee.pos={x:-225, y: -200};
  goosee.rotation =0;
  
  
  Button.pos = {x:-340, y:-350};
  Muds.pos = { x: -240, y: 200 };
  Muds.rotation = 0;
  text("Drag and the mud balls to the seed" , 50, 390 );
  
  little1.rotation =0;

  
 
  
  
  
 
  

  if (PeskyDirt10.mouse.dragging()) {
    PeskyDirt10.moveTowards(
    mouse.x + PeskyDirt10.mouse.x,
    mouse.y + PeskyDirt10.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt10.collides(little1))
  {
    allows10 = false;
  }

  }
  else
  {
  if(allows10 == true)
  {
    PeskyDirt10.pos = { x: 230, y: 250 };
    PeskyDirt10.rotation = 0;

  }
  else
  {
    PeskyDirt10.pos = { x: 230, y: -250 };
    PeskyDirt10.rotation = 0;
  }

  }
  
  if (PeskyDirt1.mouse.dragging()) {
      PeskyDirt1.moveTowards(
      mouse.x + PeskyDirt1.mouse.x,
      mouse.y + PeskyDirt1.mouse.y,
      1 // full tracking
    );
    if (PeskyDirt1.collides(little1))
    {
      allows1 = false;
    }
    
  }
  else
  {
    if(allows1 == true)
    {
      PeskyDirt1.pos = { x: 190, y: 160 };
      PeskyDirt1.rotation = 0;
    }
    else
    {
      PeskyDirt1.pos = { x: 230, y: -250 };
      PeskyDirt1.rotation = 0;
    }
    
  }

  if (PeskyDirt2.mouse.dragging()) {
    PeskyDirt2.moveTowards(
    mouse.x + PeskyDirt2.mouse.x,
    mouse.y + PeskyDirt2.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt2.collides(little1))
  {
    allows2 = false;
  }

  }
  else
  {
  if(allows2 == true)
  {
    PeskyDirt2.pos = { x: 170, y: 190 };
    PeskyDirt2.rotation = 0;
  }
  else
  {
    PeskyDirt2.pos = { x: 230, y: -250 };
    PeskyDirt2.rotation = 0;
  }

  }

  if (PeskyDirt3.mouse.dragging()) {
    PeskyDirt3.moveTowards(
    mouse.x + PeskyDirt3.mouse.x,
    mouse.y + PeskyDirt3.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt3.collides(little1))
  {
    allows3 = false;
  }

  }
  else
  {
  if(allows3 == true)
  {
    PeskyDirt3.pos = { x: 210, y: 190 };
    PeskyDirt3.rotation = 0;
  }
  else
  {
    PeskyDirt3.pos = { x: 230, y: -250 };
    PeskyDirt3.rotation = 0;
  }

  }

  if (PeskyDirt4.mouse.dragging()) {
    PeskyDirt4.moveTowards(
    mouse.x + PeskyDirt4.mouse.x,
    mouse.y + PeskyDirt4.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt4.collides(little1))
  {
    allows4 = false;
  }

  }
  else
  {
  if(allows4 == true)
  {
    PeskyDirt4.pos = { x: 160, y:220 }; 
    PeskyDirt4.rotation = 0;
  }
  else
  {
    PeskyDirt4.pos = { x: 230, y: -250 };
    PeskyDirt4.rotation = 0;
  }

  }

  if (PeskyDirt5.mouse.dragging()) {
    PeskyDirt5.moveTowards(
    mouse.x + PeskyDirt5.mouse.x,
    mouse.y + PeskyDirt5.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt5.collides(little1))
  {
    allows5 = false;
  }

  }
  else
  {
  if(allows5 == true)
  {
    PeskyDirt5.pos = { x: 190, y: 220 };
    PeskyDirt5.rotation = 0;
  }
  else
  {
    PeskyDirt5.pos = { x: 230, y: -250 };
    PeskyDirt5.rotation = 0;
  }

  }

  if (PeskyDirt6.mouse.dragging()) {
    PeskyDirt6.moveTowards(
    mouse.x + PeskyDirt6.mouse.x,
    mouse.y + PeskyDirt6.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt6.collides(little1))
  {
    allows6 = false;
  }

  }
  else
  {
  if(allows6 == true)
  {
    PeskyDirt6.pos = { x: 220, y: 220 };
    PeskyDirt6.rotation = 0;
   
  }
  else
  {
    PeskyDirt6.pos = { x: 230, y: -250 };
    PeskyDirt6.rotation = 0;
  }

  }

  if (PeskyDirt7.mouse.dragging()) {
    PeskyDirt7.moveTowards(
    mouse.x + PeskyDirt7.mouse.x,
    mouse.y + PeskyDirt7.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt7.collides(little1))
  {
    allows7 = false;
  }

  }
  else
  {
  if(allows7 == true)
  {
    PeskyDirt7.pos = { x: 150, y: 250 };
    PeskyDirt7.rotation = 0;
    
  }
  else
  {
    PeskyDirt7.pos = { x: 230, y: -250 };
    PeskyDirt7.rotation = 0;
  }

  }

  if (PeskyDirt8.mouse.dragging()) {
    PeskyDirt8.moveTowards(
    mouse.x + PeskyDirt8.mouse.x,
    mouse.y + PeskyDirt8.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt8.collides(little1))
  {
    allows8 = false;
  }

  }
  else
  {
  if(allows8 == true)
  {
    PeskyDirt8.pos = { x: 180, y: 250 };
    PeskyDirt8.rotation = 0;
  }
  else
  {
    PeskyDirt8.pos = { x: 230, y: -250 };
    PeskyDirt8.rotation = 0;
  }

  }

  if (PeskyDirt9.mouse.dragging()) {
    PeskyDirt9.moveTowards(
    mouse.x + PeskyDirt9.mouse.x,
    mouse.y + PeskyDirt9.mouse.y,
    1 // full tracking
  );
  if (PeskyDirt9.collides(little1))
  {
    allows9 = false;
  }

  }
  else
  {
  if(allows9 == true)
  {
    PeskyDirt9.pos = { x: 205, y: 250 };
    PeskyDirt9.rotation = 0;

  }
  else
  {
    PeskyDirt9.pos = { x: 230, y: -250 };
    PeskyDirt9.rotation = 0;
  }

  }

}

// Screen 22
//look around
function Screen22(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little.pos={x:160, y: -230};
  little.rotation =0;
  PeskyDirt1.pos = { x: 190, y: -160 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 170, y: -190 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 210, y: -190 };
  PeskyDirt3.rotation = 0;
  PeskyDirt4.pos = { x: 160, y:-220 }; 
  PeskyDirt4.rotation = 0;
  PeskyDirt5.pos = { x: 190, y: -220 };
  PeskyDirt5.rotation = 0;
  PeskyDirt6.pos = { x: 220, y: -220 };
  PeskyDirt6.rotation = 0;
  PeskyDirt7.pos = { x: 150, y: -250 };
  PeskyDirt7.rotation = 0;
  PeskyDirt8.pos = { x: 180, y: -250 };
  PeskyDirt8.rotation = 0;
  PeskyDirt9.pos = { x: 205, y: -250 };
  PeskyDirt9.rotation = 0;
  PeskyDirt10.pos = { x: 230, y: -250 };
  PeskyDirt10.rotation = 0;
  Button.pos = {x:340, y:350};
  Muds.pos = { x: -240, y: 200 };
  Muds.rotation = 0;
  little1.pos={x:160, y: 230};
  little1.rotation =0;
  textSize(18);
  text("Goosé took care of seedling \nday and night", 10, 330 );
}

// Screen 23
//gives it a heart
function Screen23(){
  background(253, 253, 150);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};
  
  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little.pos={x:160, y: -230};
  little.rotation =0;
  PeskyDirt1.pos = { x: 190, y: -160 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 170, y: -190 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 210, y: -190 };
  PeskyDirt3.rotation = 0;
  PeskyDirt4.pos = { x: 160, y:-220 }; 
  PeskyDirt4.rotation = 0;
  PeskyDirt5.pos = { x: 190, y: -220 };
  PeskyDirt5.rotation = 0;
  PeskyDirt6.pos = { x: 220, y: -220 };
  PeskyDirt6.rotation = 0;
  PeskyDirt7.pos = { x: 150, y: -250 };
  PeskyDirt7.rotation = 0;
  PeskyDirt8.pos = { x: 180, y: -250 };
  PeskyDirt8.rotation = 0;
  PeskyDirt9.pos = { x: 205, y: -250 };
  PeskyDirt9.rotation = 0;
  PeskyDirt10.pos = { x: 230, y: -250 };
  PeskyDirt10.rotation = 0;
  Button.pos = {x:340, y:350};
  Muds.pos = { x: -240, y: 200 };
  Muds.rotation = 0;

  little1.pos={x:160, y: 230};
  little1.rotation =0;
  textSize(18);
  text("Goosé poured all her love into \nthe well being of her plant <3", 10, 330 );

}



// Screen 25
//rain
function Screen24(){
  background(bgImg);
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little.pos={x:160, y: -230};
  little.rotation =0;
  PeskyDirt1.pos = { x: 190, y: -160 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 170, y: -190 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 210, y: -190 };
  PeskyDirt3.rotation = 0;
  PeskyDirt4.pos = { x: 160, y:-220 }; 
  PeskyDirt4.rotation = 0;
  PeskyDirt5.pos = { x: 190, y: -220 };
  PeskyDirt5.rotation = 0;
  PeskyDirt6.pos = { x: 220, y: -220 };
  PeskyDirt6.rotation = 0;
  PeskyDirt7.pos = { x: 150, y: -250 };
  PeskyDirt7.rotation = 0;
  PeskyDirt8.pos = { x: 180, y: -250 };
  PeskyDirt8.rotation = 0;
  PeskyDirt9.pos = { x: 205, y: -250 };
  PeskyDirt9.rotation = 0;
  PeskyDirt10.pos = { x: 230, y: -250 };
  PeskyDirt10.rotation = 0;
  Button.pos = {x:340, y:350};
  Muds.pos = { x: -240, y: 200 };
  Muds.rotation = 0;
  little1.pos={x:160, y: 230};
  little1.rotation =0;
  textSize(22);
  fill("white");
  text("Even on the worst days, \nGoosé never stopped taking \ncare of her seedling ", 10, 330 );

}

// Screen 26
// shake of earth
function Screen25(){
  background(253, 253, 150);
  fill("black");
  Button.pos = {x:340, y:350};
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  little1.pos={x:160, y: -230};
  little1.rotation =0;
  PeskyDirt1.pos = { x: 190, y: -160 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 170, y: -190 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 210, y: -190 };
  PeskyDirt3.rotation = 0;
  PeskyDirt4.pos = { x: 160, y:-220 }; 
  PeskyDirt4.rotation = 0;
  PeskyDirt5.pos = { x: 190, y: -220 };
  PeskyDirt5.rotation = 0;
  PeskyDirt6.pos = { x: 220, y: -220 };
  PeskyDirt6.rotation = 0;
  PeskyDirt7.pos = { x: 150, y: -250 };
  PeskyDirt7.rotation = 0;
  PeskyDirt8.pos = { x: 180, y: -250 };
  PeskyDirt8.rotation = 0;
  PeskyDirt9.pos = { x: 205, y: -250 };
  PeskyDirt9.rotation = 0;
  PeskyDirt10.pos = { x: 230, y: -250 };
  PeskyDirt10.rotation = 0;
  Button.pos = {x:340, y:350};
  Muds.pos = { x: -240, y: 200 };
  little.pos={x:160, y: 230};
  little.rotation =0;
  Muds.rotation = 0;
  text("One day, her plant finally \nsurfaced and it wasn't \nbefore long... " ,10, 330 );

}



// Screen 28
// show her standing on a giant marigold in the middle of the sky
function Screen26(){
  background(bgImg2);
  dinu.pos={x:40, y: -50};
  busy.pos={x:40, y: -150};
  slow.pos={x:330, y: -160};
  cat.pos={x:40, y: -255};
  bara.pos={x:330, y:-50};

  pinkflower.pos={x:115, y: -60};
  rose.pos={x:115, y: -155};
  
  little.pos={x:160, y: -230};
  little.rotation =0;
  PeskyDirt1.pos = { x: 190, y: -160 };
  PeskyDirt1.rotation = 0;
  PeskyDirt2.pos = { x: 170, y: -190 };
  PeskyDirt2.rotation = 0;
  PeskyDirt3.pos = { x: 210, y: -190 };
  PeskyDirt3.rotation = 0;
  PeskyDirt4.pos = { x: 160, y:-220 }; 
  PeskyDirt4.rotation = 0;
  PeskyDirt5.pos = { x: 190, y: -220 };
  PeskyDirt5.rotation = 0;
  PeskyDirt6.pos = { x: 220, y: -220 };
  PeskyDirt6.rotation = 0;
  PeskyDirt7.pos = { x: 150, y: -250 };
  PeskyDirt7.rotation = 0;
  PeskyDirt8.pos = { x: 180, y: -250 };
  PeskyDirt8.rotation = 0;
  PeskyDirt9.pos = { x: 205, y: -250 };
  PeskyDirt9.rotation = 0;
  PeskyDirt10.pos = { x: 230, y: -250 };
  PeskyDirt10.rotation = 0;
  Button.pos = {x:340, y:-350};
  Muds.pos = { x: -240, y: 200 };
  mainFlower.pos = { x: 185, y: 300 };
  mainFlower.rotation = 0;
  goosee.pos={x:225, y: 200};
  goosee.rotation =0;
  Muds.rotation = 0;
  little1.pos={x:-160, y: -230};
  little1.rotation =0;
  fill("white");
  text("...Goosé's plant grew so big \nthat it reached the stars", 90, 50 );

}
//if extra time, make goose big on screen 2
// make all seeds in screen 1 and seed in screen 2
//put heart in screen 2
//tear on goose screen10+14+15

function changeTarget(){
  
 if (screen == 21){
   position = Math.floor(random(1, 5)); // Ensure integer positions
   switch (position) {
       case 1:
           little1.pos = { x: 30, y: 30 };
           break;
       case 2:
           little1.pos = { x: 30, y: 330 };
           break;
       case 3:
           little1.pos = { x: 330, y: 330 };
           break;
       case 4:
           little1.pos = { x: 330, y: 30 };
           break;
       default:
           little1.pos = { x: 265, y: 280 }; // Default position
   }
 }
   
  

    
  

  
  
}