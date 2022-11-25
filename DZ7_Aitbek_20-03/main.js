class Cars{
    constructor(options) {
        this.model = options.model
        this.year = options.year
        this.speet = options.speetKmH
        this.wheels = options.yesWheels
    }
}

class Car extends Cars {

    static type = 'CARS'

    constructor(options) {
        super(options)
        this.color = options.color
        this.salonColor = options.salonColor
    }

    voice() {
        console.log('Машина заведена')
    }
}

let Toyota = new Car({
    model: 'camry 70',
    year: 2020,
    yesWheels:4,
    speetKmH: 220,
    color: 'white',
    salonColor: 'blue'
})

console.log(Toyota)

let ford = new Car({
    model: 'focus',
    year: 2022,
    speetKmH: 220,
    yesWheels:4,
    color: 'silver',
    salonColor: 'black'
})

console.log(ford);

let audi = new Car({
    model: 'audi a8',
    year: 2021,
    speetKmH: 320,
    yesWheels:4,
    color: 'green',
    salonColor: 'black'
})
console.log(audi);