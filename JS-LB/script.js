console.log('Chailiye shru karte hai');
let rectangle = {
    length: 1,
    breadth: 2,
    draw: function()  {
        console.log("draw");
    }
};

//factory function


function createRectangle(len, bre){
    let rectangle = {
        length: len,
        breadth: bre,
        draw: function()  {
            console.log("draw");
        }
    };
    return rectangle;
}

let rectangleObj1 = createRectangle(4, 5);
let rectangleObj2 = createRectangle(4, 5);
let rectangleObj3 = createRectangle(4, 5);


function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
}

// Move the draw method to the prototype
Rectangle.prototype.draw = function() {
    console.log('drawing');
};


let rectangleObject = new Rectangle(4, 6);

rectangleObject.color = 'yellow';  
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject)

