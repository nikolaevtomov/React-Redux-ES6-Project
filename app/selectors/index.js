
export const getCharacters = (state) => {
  return Object.keys(state.people)
    .map((key) => (state.people[key]))
};
