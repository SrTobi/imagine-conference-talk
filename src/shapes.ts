interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}


type Shape = Square | Rectangle | Circle;


function area(shape: Shape) {
    switch(shape.kind) {
        case "square": return shape.size * shape.size;
        case "rectangle": return shape.width * shape.height;
        case "circle": return Math.PI * shape.radius ** 2;
    }
}

area({
    kind: "circle",
    radius: 3
});

