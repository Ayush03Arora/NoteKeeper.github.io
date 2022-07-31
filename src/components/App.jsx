import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [Notes,SetNotes]  = useState([]);


  function AddNote(newNote){
  SetNotes(prevNotes =>{
    return[...prevNotes,newNote];
  })
  }


  function DeleteNote(id){
    SetNotes(prevNotes => {
      return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      })
    }
    )
  }


  return (
    <div>
      <Header />
      <CreateArea 
        addnote={AddNote}
      />
       {Notes.map((note,index)=>{
        return <Note 
         key={index} 
         id={index}
         title={note.title} 
         content={note.content} 
         onDelete={DeleteNote} />
       })}
      
      <Footer />
    </div>
  );
}

export default App;
