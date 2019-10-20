const state = () => ({
  c: 1
})

const actions = {
  t () {
    console.log('t')
  }
}

const muntaions = {

}

const getters = {
  n: state => state.c
}

export default { state, actions, muntaions, getters }
