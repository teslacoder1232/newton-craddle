class Rope {

    constructor(x,y,height,width){
    
    var options = {
        isStatic: true,
        'restitution': 0,
         'friction':0,
         'density':1
         
    }
    
    this.body = Bodies.rectangle(x,y,height,width,options);
    this.width = width;
    this.height = height;
    
// World.add(world,this.body)
    }
    display(){
    
    rectMode(CENTER);
    
    fill("grey");
    
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    }
    };

