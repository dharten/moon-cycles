import {combineReducers} from "redux";
import lunarData from "./data";
import bodyImages from "./data/images";
import phaseData from "./data/phases";

export default combineReducers({
  lunarData,
  bodyImages,
  phaseData
})
