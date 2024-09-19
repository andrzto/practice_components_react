
export const SecondComponent = () => {

const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la camara secreta",
    "Harry Potter y el prisionero de azkaban",
    "Harry Potter y el caliz de fuego",
    "Harry Potter y la orden del fenix",
    "Harry Potter y las reliquias de la muerte",
    "Animales Fantasticos y donde encontrarlos"
    
];

  return (
    <>
        <h1>SecondComponent</h1>
        <div>
            <ul>
             {
                books.map((book, index)=> { 
                    return <li key={ index}> { book } </li>
                })
             }

            </ul>
        </div>
    </>
  )

}