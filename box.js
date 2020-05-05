class Boxes extends BaseClass{
    constructor(x,y){
        super(x,y,25,35);
        this.visibility = 255;
    }
    display(){
        //console.log(this.body.speed);
        if(this.body.speed < 4){
            super.display();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 3;
            tint(255,this.Visiblity);
            
            pop();
        }
    }
}