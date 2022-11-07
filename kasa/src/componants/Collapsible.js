function Collapsible (props) {
    const {summary, content} = props
  
    return(
      <details>
        <summary><div>{summary}</div></summary>
        {content}
      </details>
    )
  }
  
  export default Collapsible