
export const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert("Has hecho clic en el botón"  +  name);
  }

  const handleDoubleClicked = () => {
    alert("Haz hecho doble clic");
  }

  const handleMouseEnter = (e) => {
    alert("Haz ENTRADO a la caja");
  }

  const handleMouseLeave = (e) => {
    alert("Haz SALIDO de la caja");
  }

  return (
    <div>
        <h1>FourComponent</h1>
        {/* Evento Click*/}
        <div>
        <button 
        className= "btn btn-danger" 
        onClick={ () => {
          alert("hola, soy un evento click");
        }}
        >Haz clic!!
        </button>
        </div>
      <div>
        <button className= "btn btn-success " 
          onClick={e => handleClicked(e, "Andrés")}>
          ¡Aqui también haz clic!
        </button>
      </div>
      <button className= "btn btn-info"
         onDoubleClick={ handleDoubleClicked }
         >
          Haz doble click!!
       </button>
      <div id="box1"
        onMouseEnter={ e => handleMouseEnter(e)}
        onMouseLeave={ e => handleMouseLeave(e)}
      >
        <p>Pasa el mouse por encima!!</p>
      </div>
    </div>
    
  )
}
