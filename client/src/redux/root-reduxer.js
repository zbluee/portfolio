import aboutReducer from "./about/about.reducer";
import headerReducer from "./header/header.reducer";
import skillReducer from "./skill/skill.reducer";

export const rootReducer = {
  header: headerReducer,
  skills: skillReducer,
  about : aboutReducer
};
