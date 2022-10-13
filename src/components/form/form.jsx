import React from 'react';
export const Formulario = (props) => {
    // desestructuracion
    const {tarea, handleSubmit, handleChange} = props

    return(
        <form onSubmit={handleSubmit}>
            
            <input type="text" placeholder="Introduce la tarea" onChange={handleChange}
            value= {tarea}/>

            <input type="submit" value="AGREGAR" className="btn" onClick={handleSubmit}/>
        </form>
    )
}

