import { Shape } from "./shapes/shape";

interface Renderer {
    draw(): void;
}

function newRenderer(shape: Shape): Renderer {
    return {
        draw() {
            const area: number = shape.computeArea();
            console.log("Shape drawn\n" + "Its area is " + area);
        },
    };
}

export { newRenderer };

// function newRenderer(rectangle: Rectangle) {
//     return {
//         draw() {
//             const area: number = rectangle.computeArea()
//             console.log("Shape drawn\n" + "Its area is " + area)
//         }
//     }
// }

// export { newRenderer }