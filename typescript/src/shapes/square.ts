import { Shape } from "../shapes/shape";

function square(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }