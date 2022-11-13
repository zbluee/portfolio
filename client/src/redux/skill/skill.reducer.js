import SKILL_DATA from "./skills-data";
const INITAL_STATE = {
  skillCollections: SKILL_DATA,
};

const skillReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default skillReducer;
