import axios from "axios";

export function getLunarData(date, city, state) {
  return dispatch => {
    axios.get("http://api.usno.navy.mil/rstt/oneday?date="
      + date + "&loc=" + city + "," + state)
    .then(response => {
      dispatch({
        type: "GET_LUNAR_DATA",
        data: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: "ERROR"
      })
    })
  }
}

export function initialLoad() {
  return dispatch => {
    axios.get("http://api.usno.navy.mil/rstt/oneday?date=today&loc=Salt Lake City, UT")
    .then(response => {
      dispatch({
        type: "INITIAL_LOAD",
        data: response.data
      })
    })
  }
}

export default function reducer(prevState = {moondata: [], sundata: []}, action) {
  switch(action.type) {
    case "GET_LUNAR_DATA":
      return action.data;
    case "INITIAL_LOAD":
      return action.data;
    case "ERROR":
      return {...prevState, failure: "City was not found in database"}
    default:
      return prevState;
  }
}
