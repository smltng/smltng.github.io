// Matter.js - http://brm.io/matter-js/

// Matter module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint;

// create a Matter.js engine
var engine = Engine.create(document.body, {
  render: {
    options: {
      showAngleIndicator: true,
      showVelocity: true,
      wireframes: false
    }
  }
});

// add a mouse controlled constraint
var mouseConstraint = MouseConstraint.create(engine);
World.add(engine.world, mouseConstraint);

// add a Newton's Cradle (using the Composites factory method!)
var cradle = Composites.newtonsCradle(280, 150, 5, 30, 200);
World.add(engine.world, cradle);

// offset the first body in the cradle so it will swing
//Body.translate(cradle.bodies[0], { x: -200, y: -180 });
//Body.translate(cradle.bodies[1], { x: -200, y: -100 });


// run the engine
Engine.run(engine);