//Matter.js
const { Engine, Render, Runner, World, Bodies } = Matter;

//size of the canvas
const width = 600;
const height = 600;

//cells
const cells = 3;

const engine = Engine.create();

const { world } = engine;
const render = Render.create({
  element: document.body,
  engine,
  options: {
    wireframes: true, //gives random color to shapes and fills it up
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

//Walls
const walls = [
  // .rectangle(x, y, width, height)
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];

World.add(world, walls);

// Maze generation

//[false,false,false]
//[false,false,false]
//[false,false,false]
const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

//[false,false]
//[false,false]
//[false,false]
const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

//[false,false]
//[false,false]
//[false,false]
const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

console.log(horizontals);
