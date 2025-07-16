
//Wednesday:
//Work on rough draft
//Thursday:
//Add visuals



/* VARIABLES */
let flower;
let Button;
let screen;



/* PRELOAD LOADS FILES */
function preload(){
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(253, 253, 150);
  
  
  
  
}

/* DRAW LOOP REPEATS */
function draw() {
  
  Screen0();
  if(Play.mouse.pressing() || Petals.mouse.pressing() ||Petals1.mouse.pressing() ||Petals2.mouse.pressing() ||Petals3.mouse.pressing() ||Petals4.mouse.pressing() ||Petals5.mouse.pressing())
  {
    Screen1();
  }

  

}

/* FUNCTIONS */
//Screen 0
//Homescreen
function Screen0() {
  ////Petals
    Petals = new Sprite (150, 200+50 , 100,"k");
    Petals.color = "white";

    Petals1 = new Sprite (175, 150+50 , 100,"k");
    Petals1.color = "white";

    Petals2 = new Sprite (225, 150+50 , 100,"k");
    Petals2.color = "white";

    Petals3 = new Sprite (250, 200+50 , 100,"k");
    Petals3.color = "white";

    Petals4 = new Sprite (225, 250+50 , 100,"k");
    Petals4.color = "white";

    Petals5 = new Sprite (175, 250 +50 , 100,"k");
    Petals5.color = "white";


  Play = new Sprite (200, 250, 100,"k");
  Play.color = "#FDFD96";
  Play.textSize = 35;
  Play.text = "Play";

  if(Play.mouse.pressing())
    { 
      print("1");
      Screen1();
    }
}


// Screen 1
//Show groups of people planting plants
function Screen1(){
  Button = new Sprite (100, 300, 100,50,"k");
  Button.color = "#FDFD96";
  Button.textSize = 35;
  Button.text = "Next";
  Petals.x = -200;
}

// Screen 2
// Zoom on girl growing a plant

// Screen 3
//everyone's is growing

// Screen 4
// wait & wait


// Screen 5
//small bloom

// Screen 6
//laughs& awful remarks


// Screen 7
//turn to mud balls

// Screen 8
//collection

// Screen 9
//some gets on the girl 

// Screen 10
//girl looks at plant

// Screen 11
//mud inches toward her

// Screen 12
//a mountain of mud hardens

// Screen 13
//look at her hands


// Screen 14
//tears form

// Screen 15
//start escaping

// Screen 16
//click to clear mud

// Screen 17
// exit

// Screen 18
//more mud comes

// Screen 19
//gets on her

// Screen 20
//grab and squish

// Screen 21
// draging game

// Screen 22
//look around

// Screen 23
//gives it a heart

// Screen 24
//proud of her little dream

// Screen 25
//rain

// Screen 26
// shake of earth

// Screen 27
// sky rockets

// Screen 28
// show her standing on a giant marigold in the middle of the sky
