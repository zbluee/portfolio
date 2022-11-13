import ABOUT_CONTENT from "./about-content-data";
const INITIAL_STATE = {
  contents: ABOUT_CONTENT,
};

const aboutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default aboutReducer;
