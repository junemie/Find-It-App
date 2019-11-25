// import axios from "axios";

const CLEAR_IMAGE = "CLEAR IMAGE";
const UPDATE_IMAGE = "UPDATE IMAGE";

const initialState = {
  currentImage: "",
  currentWiki: { snipped: "", url: "" },
  bookmarks: [],
}

/**
 * ACTION CREATOR
 */

export const clearImage = () => ({
  type: CLEAR_IMAGE
})

export const updateCurrentImage = (uri) => ({
  type: UPDATE_IMAGE,
  uri
})

/**
 * THUNK CREATOR
 */

/**
 * REDUCER
 */
export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_IMAGE:
      return { ...state, currentImage: initialState.currentImage }
    case UPDATE_IMAGE:
      return { ...state, currentImage: action.uri }
  }
}

