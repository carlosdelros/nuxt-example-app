export const state = () => ({
  candidates: [],
})

export const mutations = {
  add(state, candidate) {
    candidate._id = `${Math.random()
      .toString(36)
      .substr(2, 35)}${Math.random()
      .toString(36)
      .substr(2, 35)}${Math.random().toString(36).substr(2, 5)}`
    state.candidates.push(candidate)
  },
  remove(state, candidate) {
    state.candidates = state.candidates.filter((c) => c._id !== candidate._id)
  },
  load(state, candidates) {
    state.candidates = candidates
  },
}
