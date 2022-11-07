import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import NotFound from "../views/NotFound"

import Gallery from "../components/Gallery"
import Tags from "../components/Tags"
import Rating from "../components/Rating"
import Collapsible from "../components/Collapsible"
import EquipmentsList from "../components/EquipmentsList"

function Place () {
  const { id } = useParams()

  let [loading, setLoading] = useState(true)
  let [place, setPlace] = useState({})

  function fetchById () {
    fetch("/logements.json")
      .then(res => res.json())
      .then(json => {
        setPlace(json.filter(place => place.id === id).shift())
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => fetchById())
  
  return (
    <>
      {!loading && place !== undefined ?
        <>
          <Gallery pictures={place.pictures} />
          <section className="infos">
            <section className="place-infos">
              <h2>{place.title}</h2>
              <h3>{place.location}</h3>
              <Tags tags={place.tags} />
            </section>
            <aside className="host-infos">
              <Rating rating={place.rating} />
              <div className="host">
                <h3>{place.host.name}</h3>
                <div><img src={place.host.picture} alt="" /></div>
              </div>
            </aside>
          </section>
          <section className="desc">
            <Collapsible summary="Description" content={<div>{place.description}</div>} />
            <Collapsible summary="Equipements" content={<EquipmentsList equipments={place.equipments} />} />
          </section>
        </> :
        <NotFound />
      }
    </>
  )
}

export default Place