import aboutReducer from "./about/about.reducer";
import headerReducer from "./header/header.reducer";
import serviceReducer from "./service/service.reducer";
import skillReducer from "./skill/skill.reducer";
import testimonyReducer from "./testimony/testimony.reducer";
import workReducer from "./work/work.reducer";

export const rootReducer = {
  header: headerReducer,
  skills: skillReducer,
  about: aboutReducer,
  service: serviceReducer,
  work: workReducer,
  testimony: testimonyReducer,
};
