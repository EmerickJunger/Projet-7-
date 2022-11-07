import { useState } from "react"

function Gallery (props) {
  const pictures = props.pictures

  let [index, setIndex] = useState(0)

  function changePicture (direction) {
    switch (direction) {
      case "prev":
        index === 0 ? setIndex(pictures.length - 1) : setIndex(index -= 1)
        break
      default:
        index === pictures.length - 1 ? setIndex(0) : setIndex(index += 1)
        break
    }
  }

  return(
    <section className="gallery">
      <i className="fas fa-angle-left btn btn-left" onClick={() => changePicture("prev")}></i>
      <img src={pictures[index]} alt="" />
      <i className="fas fa-angle-right btn btn-right" onClick={() => changePicture("next")}></i>
      <div>{index + 1}/{pictures.length}</div>
    </section>
  )
}

export default Gallery