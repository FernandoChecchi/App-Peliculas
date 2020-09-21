const initialState = {
  movies: [], // Las peliculas favoritas
  moviesLoaded: [], // Las peliculas que busque con el buscador
  movieDetail: {} // La pelicula sobre la cual estoy viendo el detalle
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      }
  }

  if (action.type === "REMOVE_MOVIE_FAVORITE") {
    return {
      ...state,
      movies: state.movies.filter(item => item.title !== action.payload.title)
    };
  }

  if (action.type === "GET_MOVIES") {
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
  }

  if (action.type === "GET_MOVIE_DETAIL") {
    return {
      ...state,
      movieDetail: action.payload
    };
  }

  return state;
}

export default rootReducer;
