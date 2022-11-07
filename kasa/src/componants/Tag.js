function Tags (props) {
    const tags = props.tags
  
    const mappedTags = tags.map(tag => <li key={tag}>{tag}</li>)
  
    return(
      <ul className="tags">{mappedTags}</ul>
    )
  }
  
  export default Tags