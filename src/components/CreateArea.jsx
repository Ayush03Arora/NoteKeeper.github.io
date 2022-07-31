import React, { useState } from "react";

function CreateArea(props) {

  const[Note,SetNote] = useState({
    title:"",
    content:""
  });
 

  function handleChange(event){
       const{name,value} = event.target;

       SetNote(prevNote =>{
        return {
          ...prevNote,
          [name]:value
        };
       })
  }

  function SubmitNote(event){
    props.addnote(Note);
    SetNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }
   
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={Note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={Note.content} />
        <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
