import axios from 'axios';

const CLEAR_IMAGE = 'CLEAR IMAGE';
const UPDATE_IMAGE = 'UPDATE IMAGE';
const GOT_WIKI = 'GOT_WIKI';

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

export const gotWiki = (wiki, wikiUrl) => ({
  type: GOT_WIKI,
  wiki: { ...wiki, url: wikiUrl }
})

/**
 * THUNK CREATOR
 */
export const getWiki = (keyword) => async dispatch => {
  const uri = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(keyword)}&prop=extracts&explaintext&utf8=&format=json`

  const { data: results } = await axios.get(uri);
  const result = results.query.search[0];
  const { data: urlResult } = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=${result.pageid}&inprop=url&format=json`);

  const resultUrl = urlResult.query.pages[result.pageid].fullurl
  dispatch(gotWiki(result, resultUrl));
}

/**
 * STATE
 */

const initialState = {
  currentImage: false,
  currentWiki: { snipped: '', url: '' },
  bookmarks: [],
}

/**
 * REDUCER
 */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_IMAGE:
      return { ...state, currentImage: initialState.currentImage }
    case UPDATE_IMAGE:
      return { ...state, currentImage: action.uri }
    case GOT_WIKI:
      return { ...state, currentWiki: action.wiki }
    default:
      return state
  }
}

