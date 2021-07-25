var socket;
var graphics;
var picker;

function pencil(data) {
    graphics.noStroke();
    graphics.fill(data.c);
    graphics.ellipse(data.x, data.y, 20, 20);
}

function socketMouse(data) {
    pencil(data);
}

function socketConnection(data) {
    console.log(data.client.conn.server.clientsCount);
}

function setup() {   
    createCanvas(displayWidth, displayWidth);
    graphics = createGraphics(displayWidth, displayWidth);
    graphics.background(10);

    picker = createColorPicker(255);
    picker.position(10, 70);    
    
    socket = io.connect(window.location.host);
    socket.on('mouse', socketMouse);
    socket.on('connection', socketConnection);
    
}

function mouseDragged() {
    var data = {
        x: mouseX,
        y: mouseY,
        c: picker.color().levels,
    }
    socket.emit('mouse', data)
    pencil(data);
}

function draw() {
    image(graphics, 0, 0, displayWidth, displayWidth);
    graphics.textSize(48);
    graphics.textFont('Georgia');
    graphics.fill(255);
    graphics.text('kech.je blackboard', 10, 58);
}