class Paper {
    constructor(x, y, height) {

        var options = {

            'isStatic': false,
            'retitution': 0.3,
            'density': 1.2,
            'friction': 0.5
    
        }

        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = 20;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();



    }



}