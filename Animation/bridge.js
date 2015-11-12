    var World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composites = Matter.Composites,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        Engine = Matter.Engine;

    var World = Matter.World,
        Engine = Matter.Engine,
        Body = Matter.Body,
        Composites = Matter.Composites;

        var engine = Engine.create(document.body),
            world = engine.world;
        
        var cradle = Composites.newtonsCradle(280, 100, 5, 30, 200);
        World.add(world, cradle);
        Body.translate(cradle.bodies[0], { x: -180, y: -100 });
        
        var renderOptions = engine.render.options;
        renderOptions.showVelocity = true;

        // run the engine
        Engine.run(engine);