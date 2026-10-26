const title = "First project react";
import { useState } from "react";

function App(){
  const handlesubmit = (e)=>{
    e.preventDefault()
    console.log(new FormData(e.target))

  }
  
  return <>
    <h1>{title}</h1>
    <h2>Formulaire</h2>
    <form action="" onSubmit={handlesubmit}>
      <label htmlFor="name">Nom:</label>
      <input type="text" name="firstname" /><br /><br />
      <button>Envoyer</button>

    </form>
    
  </>
}

export default App
