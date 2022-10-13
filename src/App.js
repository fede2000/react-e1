import { useState } from 'react';
import './App.css';
import { Formulario } from "./components/form/form"
import { Tarea } from "./components/tarea/tarea"


function App() {
  const [tarea, setTarea] = useState("")
  const [listadoTareas, setListadoTareas] = useState([])

  const handleSubmit = (e) =>{
    // que no se ejecute por default
    e.preventDefault()
    if(tarea === ""){
      alert("DEBES DE PONER UNA TAREA")
      return
    }
    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false
    }

    const tempo = [nuevaTarea, ...listadoTareas]
    setListadoTareas(tempo)
    setTarea("")
    console.log(listadoTareas)


  } 

  const handleChange = (e) => {
    setTarea(e.target.value)
    console.log(tarea)
  }

  const onActualizarTarea = (objEditarTarea) => {
    const {id, tarea} = objEditarTarea

    const temp = [...listadoTareas]
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea
    setListadoTareas(temp)
  }

  const onBorrarTarea = (id) => {
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)
  }
  return (
    // fragmentacion
    <>
      <div className="contenedorPrincipal">
        <h1>To Do List</h1>
        <div className="contenedorForm">
          <Formulario 
          tarea = {tarea}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          />
        </div>

        <div className="contenedorTareas">
          <h2>Lista de Tareas</h2>
          <div className="contenedorInfoTareas">
            {
              listadoTareas.map(tarea => (
                <Tarea 
                key={tarea.id}
                id={tarea.id}
                tarea={tarea}
                onActualizarTarea={onActualizarTarea}
                onBorrarTarea={onBorrarTarea}
                />
              ))
            }
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
