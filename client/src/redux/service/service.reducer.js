import SERVICE_DATA from "./service.data";

const INITIAL_STATE = {
  serviceLists: SERVICE_DATA,
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default serviceReducer;
