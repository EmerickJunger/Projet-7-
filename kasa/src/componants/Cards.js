import { Link } from "react-router-dom"

function Cards (props) {
  const places = props.places
  
  const mappedCards = places.map(card =>
    <li key={card.id}>
      <Link to={`/place/${card.id}`}>
        <figure>
          <div className="filter"></div>
          <img src={card.cover} alt="" />
          <figcaption>{card.title}</figcaption>
        </figure>
      </Link>
    </li>
  )

  return (
    <section className="cards">
      <ul>
        {mappedCards}
      </ul>
    </section>
  )
}

export default Cards