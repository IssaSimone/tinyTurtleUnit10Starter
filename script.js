TinyTurtle.apply(window, [undefined, 400, 400]);

function square(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}
square(25);
square(48)

function triangle(size){
forward (size);
right(120);
forward(size)
right(120)
forward(size)
right(120)
}

triangle(32);
triangle(94);

function rectangle(size){
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}
rectangle();

function hexagon(){
    right(60);
    forward(60);
    right(60);
    forward(60);
    right(60);
    forward(60);
    right(60);
    forward(60);
    right(60);
    forward(60);
    right(60);
}
hexagon();

function house(){
    right(30);
    forward(70);