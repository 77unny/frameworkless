import getTodos from './getTodos.js'
import template from './template.js'

const state = {
  todos: getTodos(),
  currentFilter: 'All'
}

const main = document.querySelector('.todoapp')

window.requestAnimationFrame(() => {
  const newMain = template(main, state)
  main.replaceWith(newMain)
})