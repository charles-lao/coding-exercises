const circle = (radius) => {
    const proto = {
        type: 'Circle',
        area: (args) => Math.PI * Math.pow(args.radius, 2)
    }

    const basics = shapeInterface(proto)
    const abstraction = manageShapeInterface(() => basics.area())
    const composite = Object.assign({}, basics, abstraction)
    return Object.assign(Object.create(composite), {radius})
}

const square(length) => {
    const proto = {
        length,
        type: 'Square',
        area: (args) => Math.pow(args.length, 2)
    }

    const basics = shapeInterface(proto)
    const composite = Object.assign({}, basics)
    return Object.assign(Object.create(composite), {length})
}

const areaCalculator = (s) => {
    const proto = {
        sum() {
           const area = []

            for (shape of this.shapes) {
                if(Object.getPrototypeOf(shape).type === 'shapeInterface') {
                    area.push(shape.area())
                } else {
                    throw new Error('this is not a shapeInterface object')
                }
            }

            return area.reduce((v, c) => c += v, 0)
        },
           
        output () {
            return `
                <h1>
                    Sum of the areas of provided shapes:
                    ${this.sum()}
                </h1>
            `
        }
    }
    return Object.assign(Object.create(proto), {shapes: s})
}

const volumeCalculator = (s) => {
    const proto = {
        type: 'volumeCalculator'
    }
    const areaCalProto = Object.getPrototypeOf(areaCalculator())
    const inherit = Object.assign({}, areaCalProto, proto)
    return Object.assign(Object.create(inherit), {shapes: s})
}



const shapes = [
    circle(2),
    square(5),
    square(6)
]

const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state),
})

const solidShapeInterface = (state) => ({
    type: 'solidShapeInterface',
    volume: () => state.volume(state)
})

const cubo = (length) => {
    const proto = {
        length,
        type: 'Cubo',
        area: (args) => Math.pow(args.length, 2),
        volume: (args) => Math.pow(args.length, 3)
    }
    const basics = shapeInterface(proto)
    const complex = solidShapeInterface(proto)
    const abstraction = manageShapeInterface(() => basics.area() + complex.volume())
    const composite = Object.assign({}, basics, complex)
    return Object.assign(Object.create(composite), {length})
}

const manageShapeInterface = (fn) => ({
    type: 'manageShapeInterface',
    calculate: () => fn()
})

const areas = areaCalculator(shapes)
const output = sumCalculatorOutputter(areas)

console.log(output.JSON())
console.log(output.HAML())
console.log(output.HTML())
console.log(output.JADE())

const s = square(5);
console.log('OBJ\n', s)
console.log('PROTO\n', Object.getPrototypeOf(s))
s.area()
