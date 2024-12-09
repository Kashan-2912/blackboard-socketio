let socket;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0,0,0);
    socket = io.connect('http://localhost:3000');
    socket.on('draw', (data) => {    
        fill(0,255,156);
        noStroke();
        ellipse(data.x, data.y, 30, 30);
    })
}

function mouseDragged() {
    fill(255,0,0);
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);

    const data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('draw', data);

}

//    function draw() {
//      if (mouseIsPressed) {
//        fill(0);
//      } else {
//        fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }