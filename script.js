setInterval(animate, 1000);


let progCounter = 1;
let aniFrameCounter = 0;

//Backgound Image List.
let ImgList1 = ["",
   ["url('Images/Zones/IntroScreen/IntroScreenv4.png')","url('Images/Zones/IntroScreen/IntroScreenv4(frame2)(UPZ).png')"],
   ["url('Images/Zones/Zone1/Zone1Img1(frame1)(GR).png')","url('Images/Zones/Zone1/Zone1Img1(frame2)(GR).png')"],
   ["url('Images/Zones/Zone2/Zone2.png')"],
   ["url('Images/Zones/Zone3/Zone3.png')"],
  ["url('Images/Zones/Zone3/Zone3%20DARK.png')"]];


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
              "You enter a musty room... The air is musty and smells of stale wood...",
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
  document.getElementById("backgroundImg").style.backgroundImage = ImgList1[progCounter][0];
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



function animate(){
  if (aniFrameCounter < 1){
    aniFrameCounter++
    console.log("Animating frame1");
    document.getElementById("backgroundImg").style.backgroundImage = ImgList1[progCounter][aniFrameCounter];
    console.log(aniFrameCounter);
    console.log(ImgList1[progCounter][aniFrameCounter]);
  }else{
    console.log("Animating frame2");
    aniFrameCounter = 0;
    document.getElementById("backgroundImg").style.backgroundImage = ImgList1[progCounter][aniFrameCounter];
    console.log(aniFrameCounter);
  }
}
