class paper
{
constructor(x,y)
{
    this.x= 130;
    this.y= 145;

    var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
    }
    this.image=loadImage("paper.png")
}
display(){

push()
			translate();
			rectMode(CENTER)
			fill("white")
			rect(130,145,width,height);
			pop()

























}



































}