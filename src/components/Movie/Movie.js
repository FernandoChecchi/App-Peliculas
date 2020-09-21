import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
      const { match: { params: { id }}} = this.props;
      this.props.getMovieDetail(id);
    }

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <h1>{this.props.movie.Title}</h1>
                <h4>{this.props.movie.Year}</h4>
                <p>{this.props.movie.Plot}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      movie: state.movieDetail
    };
}

const mapDispatchToProps = dispatch => {
  return {
      getMovieDetail: (id) => dispatch(getMovieDetail(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);
