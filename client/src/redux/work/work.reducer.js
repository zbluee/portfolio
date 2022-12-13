import WORK_DATA from "./work.data";

const INITIAL_STATE = {
  workLists: WORK_DATA,
};

const workReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default workReducer;
