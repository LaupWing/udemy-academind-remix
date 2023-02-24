import NewNote, {links as newNoteLinks} from "../components/NewNote"
import NoteList, {links as noteListLinks} from "../components/NoteList"
import { getStoredNotes, storeNotes } from "~/data/notes"
import { json, redirect } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"

const NotesPage = () => {
   const notes = useLoaderData()

   return (
      <main>
         <NewNote />
         <NoteList notes={notes} />
      </main>
   )
}
export default NotesPage

export async function loader() {
   const notes = await getStoredNotes()

   return json(notes)
}

export async function action({ request }) {
   const formData = await request.formData()
   const noteData = Object.fromEntries(formData)

   if(noteData.title.trim().lenght < 5){
      return {
         message: "Invalid title - must be at least 5 characters long."
      }
   }

   const existingNotes = await getStoredNotes()

   noteData.id = new Date().toISOString() 
   const updatedNotes = existingNotes.concat(noteData)
   await storeNotes(updatedNotes)

   return redirect("/notes")
}

export function links(){
   return [
      ...newNoteLinks(),
      ...noteListLinks()
   ]
}

export function ErrorBoundary({ error }) {
   return (
      <main className="error">
         <h1>An error ocurred!</h1>
         <p>{ error.message }</p>
         <p>Back to safety <Link to={"/"}>safety</Link>!</p>
      </main>
   )
}