import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
     console.log(movie)
      return (
        <Movie
        title={movie.title}
        poster={movie.large_cover_image}
          key={movie.id}
        genres={movie.genres}
         synopsis={movie.synopsis}
          
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    try {
      const movies = await this._callApi();
      this.setState({
        movies: movies
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?limit=10&sort_by=rating")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        return json.data.movies;
      })
      .catch((error) => {
        throw new Error('Error fetching data:', error);
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.movies.length ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
