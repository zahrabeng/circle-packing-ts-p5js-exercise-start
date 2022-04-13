interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {
    const circles: Circle[] = [];

    for (let i = 0; i < 100000; i++) {
        const candidate = { pos: randomPosition(), radius: random(10, 100) }
        if (noOverlapWithAny(candidate, circles)) {
            circles.push(candidate)
        }
    }
    return circles;
}

/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}

function randomPosition() {
    return {
        x: random(width),
        y: random(height)
    }
}

function noOverlapWithAny(circle: Circle, otherCircles: Circle[]): boolean {
    return !otherCircles.some(other => overlap(circle, other));
}

function overlap(c1: Circle, c2: Circle): boolean {
    return distance(c1.pos, c2.pos) < c1.radius + c2.radius;
}