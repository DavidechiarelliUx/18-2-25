export const ADDFAVOURITES = "ADDFAVOURITES";
export const REMOVEFAVOURITES = "REMOVEFAVOURITES";
export const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const addToFavouritesAction = (data) => {
  return {
    type: ADDFAVOURITES,
    payload: data.company_name,
  };
};

export const removeFavouritesAction = (data) => {
  return {
    type: REMOVEFAVOURITES,
    payload: data.company_name,
  };
};

export const clearSearchResult = () => {
  return {
    type: CLEAR_SEARCH_RESULTS,
  };
};

export const fetchSearchResultsWithThunk = (query) => {
  return async (dispatch, getState) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    console.log("Stato attuale prima della fetch:", getState().search.results);

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log("Dati ricevuti:", data);

        const currentResults = getState().search.results;
        if (JSON.stringify(currentResults) !== JSON.stringify(data)) {
          dispatch({ type: SET_SEARCH_RESULT, payload: data });
        } else {
          console.log("⚠️ I risultati sono uguali a quelli già presenti, nessun dispatch.");
        }
      } else {
        console.error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log("Errore di rete:", error);
    }
  };
};
