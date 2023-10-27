console.log('js:loaded')

/*----- constants -----*/
const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}

/*----- state variables -----*/

let state = {...INIT_STATE}

let boredom
let hunger
let sleepiness

let age
let cycles

let interval
let timer

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
const runGame = () => {
    console.log('game interval')
}

const init = () => {
    state = {...INIT_STATE}

    age = 0
    cycles = 0
    interval = 3000 //ms

    timer = setInterval(runGame, interval)


    console.log('game initialized')
}

// initialize
init()