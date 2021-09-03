class Rope{
	constructor(body1,body2,pointA,pointB)
{
     this.pointA=pointA
	 this.pointB=pointB

	 var options={
        bodyA:body1
		bodyB:body2
        pointB:{x:this.pointA,y:this.pointB}	
	 }
	//create rope constraint here
	 con = Constraint.create({
		 pointA: {x:400,y:20}
		 bodyB:ball
		 length: 100
		 stiffness:0.5
	 })
	}


    //create display() here 
       display()
{
	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position

	strokeWeight(2)
line(con.pointA.x,con.pointA.y)

}
}
