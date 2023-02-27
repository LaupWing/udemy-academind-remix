import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"

import styles from "~/styles/note-details.css"
import { getStoredNotes } from "../data/notes"

const NoteDetailsPage = () => {
   const note = useLoaderData()

   return (
      <main id="note-details">
         <header>
            <nav>
               <Link to={"/notes"}>Back to all notes</Link>
            </nav>
            <h1>NOTE TITLE</h1>
         </header>
         <p id="note-details-content">{note.content}</p>
      </main>
   )
}
export default NoteDetailsPage

export function loader({params}) {
   const notes = getStoredNotes()
   const selectedNotes = notes.find(note => note.id === params.noteId)

   if(!selectedNotes){
      throw json({
         message: "Could not find not or id " + params.nodeId
      })
   }

   return selectedNotes
}

export function links() {
   return [
      {
         rel: "stylesheet",
         href: styles
      }
   ]
}

export function meta({data}){
   return {
      title: data.title,
      description: "Manage your notes with ease"
   }
}