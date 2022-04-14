interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {
    let validatedCircles = []
    for (let i = 0; i < 100000; i++) {
        let candidate = generateRandomPos()
        if (doesCirlceOverlapAll(validatedCircles, candidate)) {
            continue
        } else {
            validatedCircles.push(candidate)
        }
    }
    return validatedCircles
}

function generateRandomPos() {
    let validatedCircles = { pos: { x: randomInt(windowWidth), y: randomInt(windowHeight) }, radius: randomInt(100) }
    return validatedCircles
}

function randomInt(max: number) {
    return Math.floor(Math.random() * max)
}

function doCirclesOverlap(circle1: Circle, circle2: Circle):boolean {
    let distanceBetween = distance(circle1.pos, circle2.pos)
    if (distanceBetween < circle1.radius + circle2.radius) {
        return true
    } else {
        return false
    }
}

function test() {
    console.log(doCirclesOverlap({ pos: { x: 0, y: 0 }, radius: 100 }, { pos: { x: 0, y: 0 }, radius: 100 }))
    console.log(doCirclesOverlap({ pos: { x: 0, y: 0 }, radius: 100 }, { pos: { x: 301, y: 0 }, radius: 200 }))
    console.log(doCirclesOverlap({ pos: { x: 0, y: 0 }, radius: 100 }, { pos: { x: 299, y: 0 }, radius: 200 }))
}



function doesCirlceOverlapAll(arrayOfCirles: Circle[], circleToCheck: Circle):boolean {
    for (let circle of arrayOfCirles) {
        if (doCirclesOverlap(circle, circleToCheck)) {
            return true
        }
    } 
    return false
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