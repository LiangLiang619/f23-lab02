import { Shape } from "../shapes/shape";

function circle(radius: number): Shape {
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius;
        },
    };
}

export { circle };

// function circle(radius: number): Shape {
//     return {
//         radius,
//         computeArea: function (): number {
//             return Math.PI * radius * radius
//         }
//     }
// }

// export { circle }