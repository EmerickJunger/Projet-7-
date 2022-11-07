function Rating (props) {
    const rating = props.rating
  
    function mapRating () {
      const stars = []
      let key = 0
      for (let i = 0; i < rating; i += 1) {
        stars.push(<i className="fas fa-star"></i>)
      }
      const unchecked = 5 - stars.length
      for (let i = 0; i < unchecked; i += 1) {
        stars.push(<i className="fas fa-star unchecked"></i>)
      }
      return stars.map(star => <li key={key += 1}>{star}</li>)
    }
  
    return(
      <ul className="rating">{mapRating()}</ul>
    )
  }
  
  export default Rating