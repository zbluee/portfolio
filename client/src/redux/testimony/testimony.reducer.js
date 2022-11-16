import TESTIMONIAL_DATA from "./testimony.data";

const INITIAL_STATE = {
  testimonyLists: TESTIMONIAL_DATA,
};

const testimonyReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default testimonyReducer;
