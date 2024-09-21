import PropTypes from "prop-types";

export const Child = (props) => {

  const handleChangeName = () => {
    const newName = prompt("ingresa un nuevo nombre");
    if(newName) 
      props.setName(newName);
  }

  return (
    <div>
      <h1>Child</h1>
      <p> Nombre actual: {props.name} </p>
      <buttom className= "btn btn-primary" onClick={handleChangeName}>Cambiar nombre</buttom>
    </div>
  )
}

Child.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func
}