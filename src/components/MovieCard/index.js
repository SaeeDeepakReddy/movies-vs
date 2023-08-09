import './index.css'

const MovieCard = props => {
  const {details} = props
  const {title, imgUrl, rating, releaseDate, overview} = details
  return (
    <div className="movie-card-container">
      <img src={imgUrl} alt={title} className="movie-image" />
      <div className="movie-details-container">
        <h1>{title}</h1>
        <p>RELEASE DATE : {releaseDate}</p>
        <p>RATING : {rating}</p>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default MovieCard
