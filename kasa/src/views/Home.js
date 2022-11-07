import { useEffect, useState } from "react"

import hero from "../assets/hero.jpg"
import Cards from "../componants/Cards"

function Home () {
  let [loading, setLoading] = useState(true)
  let [places, setPlaces] = useState([])

  function fetchAll () {
    fetch("/logements.json")
      .then(res => res.json())
      .then(json => {
        setPlaces(json)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => fetchAll())

  return (
    <>
      {!loading &&
        <>
          <section className="hero">
            <img src={hero} alt="" />
            <div className="filter"></div>
            <h1>Chez vous, partout et ailleurs</h1>
          </section>
          <Cards places={places} />
        </>
      }
    </>
  )
}

export default Home
