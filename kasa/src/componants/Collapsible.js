function Collapsible (props) {
    const {summary, content} = props
  
    return(
      <details>
        <summary>{summary}</summary>
        {content}
      </details>
    )
  }
  
  export default Collapsible