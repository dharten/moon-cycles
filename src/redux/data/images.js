export function getImages(body) {
  return {type: "GET_IMAGES", data: body}
}

export default function reducer(prevState = "", action) {
  switch (action.type) {
    case "GET_IMAGES":
      return action.data;
    default:
      return prevState;
  }
}
