///=================SECRET PROJECT!!!!!!! DO NOT LOOK AND SPOIL IT!!!======================================

setInterval(animate, 500);


let progCounter = 1;
let aniFrameCounter = 0;

//Backgound Image List.
let ImgList1 = ["",
   ["url('Images/Zones/IntroScreen/IntroScreenv4.png')","url('Images/Zones/IntroScreen/IntroScreenv4(frame2)(UPZ).png')"],
   ["url('Images/Zones/Zone1/Zone1Img1(frame1)(GR).png')","url('Images/Zones/Zone1/Zone1Img1(frame2)(GR).png')"],
   ["url('Images/Zones/Zone2/Zone2.png')","url('Images/Zones/Zone2/Zone2(Frame2)(GR).png')"],
   ["url('Images/Zones/Zone3/Zone3.png')","url('Images/Zones/Zone3/Zone3(frame2)(GR).png')"],
  ["url('Images/Zones/Zone3/Zone3%20DARK.png')","url('Images/Zones/Zone3/Zone3%20DARK.png')"]];


//Positions of the interaction areas based on the area.
let progButtPos = [
  "250px auto auto auto",
  "350px auto auto 1025px",
  "500px 0px auto auto",
  "400px 450px auto auto"];

let interactionBoxPosY = ["350px","210px","630px","350px"];
let interactionBoxPosX = ["280px","280px","900px","650px"];

//Dialog lists based on what is clicked
let progDia = ["ERROR","You have come to a strange dungeon... Enter if you dare...",
              "You enter a musty room... The air is stagnant and smells of stale wood...",
              "A large cavern vista sits before you. The faint echo of water rushing in the darkness tells you the area is immense.",
              "You approach a small campsite... something seems familiar.",
              "You put the fire out... That didn't seem like a good idea."]

let branchDia = ["ERROR!","The flame flickers with a strange purple hue...",
                "The barrel is filled with rusty fishing gear...",
                "The waterfall seems to fall endlessly into the cavern below...",
                "The tent is empty.",
                 "You can't see anything."];

function changeBackgound(){
  console.log("changeBackground activated!...");
  document.getElementById("backgroundImg").style.backgroundImage = ImgList1[progCounter+1][0];
  document.getElementById("frame2").style.backgroundImage = ImgList1[progCounter+1][1];
  document.getElementById("progButton").style.margin = progButtPos[progCounter];
  document.getElementById("interactionBox").style.bottom = interactionBoxPosY[progCounter];
  document.getElementById("interactionBox").style.left = interactionBoxPosX[progCounter];
  progCounter++;
  
  document.getElementById("diaBox").innerText = progDia[progCounter];
  
  console.log("progCounter changed to "+ progCounter+"...");
}

function itemClicked(){
  console.log("Clickable clicked!");
  document.getElementById("diaBox").innerText = branchDia[progCounter];
}

function littleGuyChecker(){
  if(progCounter == 2){
    document.getElementById("littleGuy").style.display ="block";
  }else{
    document.getElementById("littleGuy").style.display ="none";
  }
  console.log("working");
}


let littleGuyCounter = 1;
let littleGuyCounter2 = 1;

function animate(){
  if (aniFrameCounter < 1){
    aniFrameCounter++
    document.getElementById("frame2").style.zIndex = "1";
  }else{
    console.log("Animating frame2");
    aniFrameCounter = 0;
    document.getElementById("frame2").style.zIndex = "-1";

  if(progCounter == 5 && littleGuyCounter <= 5){
    console.log("worjksj");
    document.getElementById("littleGuy"+littleGuyCounter).style.display ="block";
    littleGuyCounter++
  }else
    if(littleGuyCounter > 5 && littleGuyCounter2 <= 5){
      document.getElementById("littleGuy"+littleGuyCounter2).style.backgroundImage ="url('Images/Little%20Guy/LittleGuy(1)(GR).png')";
      littleGuyCounter2++
    }else
      if(littleGuyCounter2 > 5){
        document.getElementById("GameOverScreen").style.zIndex ="10";
        document.getElementById("diaBox").innerText = "YOU HAVE BEEN GNOMED.";
      }
    
  }
}
