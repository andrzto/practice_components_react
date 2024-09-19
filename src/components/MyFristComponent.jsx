
export const MyFristComponent = () => {

const name = "Andrés Torres";

const github_profile = "https://github.com/andrzto";

const student = {
  name: "Andrés",
  last_name: "Torres",
  mobile: "3184659801",
  linkedin_profile: "https://www.linkedin.com/diana-arevalo-168b0925b",
};

console.log(student)

  return (
    <>
        <div>MyFristComponent</div>
        <div className= "container bg-info-subtle mt-4">
          <h1>Temas de React</h1>
          <ul>
              <li>Componentes</li>
              <li>Eventos</li>
              <li>Estados hooks</li>
              <li>Props</li>
          </ul>
        </div>
        <div className= "container bg-warning-subtle py-2">
          <h1>Datos del Docente</h1>
          <p>Nombre: <strong>{ name }</strong></p>
          <p>GitHub: { github_profile } </p>
        </div>
        <div className= "container bg-success-subtle py-2">
          <h1>Datos del Estudiante</h1>
          <p>Nombre: <strong>{ student.name }</strong></p>
          <p>Apelido: { student.last_name } </p>
          <p>Celular: { student.mobile} </p>
          <p>Linkedin: <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a> </p>
        </div>
        <div className= "container mt-2 pt-2">
          <h1>Objeto Completo</h1>
          <pre> {JSON.stringify (student)} </pre>
        </div>
    </>
  )
} 

