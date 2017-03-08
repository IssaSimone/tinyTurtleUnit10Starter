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
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}
rectangle(60);

function hexagon(size){
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
}
hexagon(53);

function house(size){
    right(120);
    forward(size);
    right(120);
    forward(size);
    right(120);
    forward(size);
}
 rectangle(40);
 
function draw(shape,size){
    hexagon(size);
    rectangle(size);
    triangle(size);
    square(size);

}