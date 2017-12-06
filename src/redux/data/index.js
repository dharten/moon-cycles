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
  }
}

export default function reducer(prevState = {moondata: [], sundata: []}, action) {
  switch(action.type) {
    case "GET_LUNAR_DATA":
      return action.data;
    default:
      return prevState;
  }
}
