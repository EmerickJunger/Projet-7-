function EquipmentsList (props) {
    const equipments = props.equipments
  
    const mappedEquipments = equipments.map(equip => <li key={equip}>{equip}</li>)
  
    return(
      <ul>{mappedEquipments}</ul>
    )
  }
  
  export default EquipmentsList