import {Component} from 'react'

import MovieCard from '../MovieCard'

import './index.css'

let input = ''

class MovieApp extends Component {
  state = {
    moviesList: [],
    searchInput: 'Jack-Reacher',
  }

  componentDidMount() {
    this.getMoviesList()
  }

  getMoviesList = async () => {
    const {searchInput} = this.state
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=e8ccc676e299173067a80520c1fee405&orderBy=release_date&limit=5`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const moviesData = data.results.map(each => ({
        id: each.id,
        imgUrl: each.poster_path,
        title: each.title,
        releaseDate: each.release_date,
        rating: each.vote_average,
        overview: each.overview,
      }))
      console.log(moviesData)
      this.setState({moviesList: moviesData})
    }
  }

  onChangeSearch = e => {
    input = e.target.value
  }

  onClickSearch = () => {
    this.setState({searchInput: input})
    this.getMoviesList()
  }

  render() {
    const {searchInput, moviesList} = this.state
    console.log(searchInput)
    return (
      <div className="movie-app-container">
        <div className="movie-search-container">
          <h1 className="movie-heading">MOVIE NAME</h1>
          <input
            type="search"
            className="search-container"
            onChange={this.onChangeSearch}
          />
          <button
            type="button"
            className="search-button"
            onClick={this.onClickSearch}
          >
            Search
          </button>
        </div>
        <ul className="movie-list-container">
          {moviesList.map(each => (
            <MovieCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MovieApp
