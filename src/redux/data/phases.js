import axios from "axios";

export function getPhaseData(date) {
  return dispatch => {
    axios.get("http://api.usno.navy.mil/moon/phase?date=" + date + "&nump=4")
    .then(response => {
      dispatch({
        type: "GET_PHASE_DATA",
        data: response.data
      })
    })
  }
}

export default function reducer(prevState = {phasedata: []}, action) {
  switch(action.type) {
    case "GET_PHASE_DATA":
      return action.data
    default:
      return prevState;
  }
}
