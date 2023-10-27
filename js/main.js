console.log('js:loaded')

/*----- constants -----*/
const INIT_STATE = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
}

/*----- state variables -----*/

let state = { ...INIT_STATE }

let tamagotchi
let lethal
let age
let cycles

let interval
let timer

/*----- cached elements  -----*/
const titleEl = document.querySelector('h1')
const statsEl = document.querySelectorAll('#stats > span')
console.dir(statsEl)
const controlsEl = document.querySelector('#controls')
const tamagotchiEl = document.querySelector('#tamagotchi')

/*----- event listeners -----*/
controlsEl.addEventListener('click', (event) => {
  console.log(event.target)
  if (event.target.innerText === 'feed') {
    state.hunger = 0
    renderStats()
  }
  if (event.target.innerText === 'play') {
    state.boredom = 0
    renderStats()
  }
  if (event.target.innerText === 'sleep') {
    state.sleepiness = 0
    renderStats()
  }
})

/*----- functions -----*/
// utilities, helpers
const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1
}

const updateStat = (key, num) => {
  state[key] += num
  console.log(num, key, state[key])
}

const renderStats = () => {
  console.log('render stats')
  statsEl.forEach((stat) => {
    stat.innerText = `${stat.id}: ${state[stat.id]}`
  })
}

// game loop related
const render = () => {
  titleEl.innerText = `Elden Ring`
  renderStats()
}

const updateStats = () => {
  for (key in state) {
    updateStat(key, generateRandomNumber(3))
  }
}
const checkPulse = () => {
  let rip = false
  for (key in state) {
    if (state[key] > lethal) {
      rip = true
      tamagotchiEl.classList.add('rip')
    }
  }
  if (rip) {
    setTimeout(() => {
      alert(`rest in pepperoni ${tamagotchi}`)
      clearInterval(timer)
    }, 1000)
  }
}

const runGame = () => {
  updateStats()
  render()
  checkPulse()
}

const init = () => {
  state = { ...INIT_STATE }

  age = 0
  cycles = 0
  lethal = 5
  interval = 2000 // milliseconds
  tamagotchi = prompt(`name your tamagotchi`)
  tamagotchiEl.setAttribute('alt', tamagotchi)
  timer = setInterval(runGame, interval)

  console.log('initialized')
}

// initialize
init()
