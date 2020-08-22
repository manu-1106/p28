class mango{
    constructor(x,y){
       var options={
           isStatic:true,
           restitution:0,
           friction:1
       }
       this.body = Matter.Bodies.circle(x, y, 50, 50, options);
       this.width = width;
        this.height = height;
        this.image = loadImage("plucking mangoes/mango.png");
        World.add(world, this.body);

    }
}