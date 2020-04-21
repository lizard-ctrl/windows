let capture;
let tracker;
let positions;
let canv;
/*let sx = 300;
let sy = 200; 
let sw = 200; 
let sh = 210; 
let dx = 250; 
let dy = 150; 
let dw = 150; 
let dh = 100; 
testing copy paste variables
*/



function setup() {
  
   
    createCanvas(windowWidth, windowHeight);
  
    capture = createCapture(VIDEO);
    capture.elt.setAttribute('playsinline', ''); 
    capture.size(width, height);
    capture.hide();

    tracker = new clm.tracker(); 
    tracker.init(); 
    tracker.start(capture.elt); 
    

    canv = createGraphics(windowWidth, windowHeight);
  
}

function draw() {
    
    
    
    image(capture, 0, 0, width, height);
    tint(50,100,20);
    let positions = tracker.getCurrentPosition(); 
    console.log(positions); 
  
    noFill();
    stroke(255);
  
    /*beginShape();
    for (let i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
    }
    endShape();
    // checking facial recognition
    */

    if (positions.length > 0) {
        canv.stroke(20,100,20);
        canv.fill(0, 255, 255);
        imageMode(CENTER);
        let e1sx = positions[19][0];
        let e1sy = positions[20][1];
        let e1sw = 100;
        let e1sh = 100;
        let e1dx = positions[19][0];
        let e1dy = positions[20][1];
        let e1dw = 100;
        let e1dh = 100;
    
    
        let e2sx = positions[30][0];
        let e2sy = positions[29][1];
        let e2sw = 100;
        let e2sh = 100;
        let e2dx = random(positions[0][0]-100,positions.length);
        let e2dy = random(positions[0][1]-100, positions.length);
        let e2dw = 20;
        let e2dh = 20;

        let c=get(positions[19][0],positions[20][1]);
        
        canv.fill(c);
        canv.copy(capture, e1sx, e1sy, e1sw, e1sh, e1dx, e1dy, e1dw-50, e1dh-50);
        canv.copy(capture, e1sx, e1sy, e1sw, e1sh, e1dx-100, e1dy-150, e1dw-80, e1dh-80);
        canv.copy(capture, e1sx, e1sy, e1sw, e1sh, e1dx, e1dy-200, e1dw, e1dh);
        canv.copy(capture, e1sx, e1sy, e1sw, e1sh, e1dx-550, e1dy-200, e1dw+50, e1dh+50);
        
        //version1
       
       
       
       // canv.copy(capture, e2sx, e2sy, e2sw, e2sh, e2dx+100, e2dy, e2dw, e2dh);
        //canv.copy(capture, e2sx, e2sy, e2sw, e2sh, e2dx+100, e2dy, e2dw, e2dh);
        
        //version 2
        
        imageMode(CORNER);
        image(canv, 0, 0, width, height);
    }
    
    
    filter(POSTERIZE, 12);
   //filter(ERODE,5);
   //filter(INVERT);
}