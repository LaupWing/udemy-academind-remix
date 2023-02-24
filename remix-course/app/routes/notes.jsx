import NewNote, {links as newNoteLinks} from "../components/NewNote"
import { getStoredNotes, storeNotes } from "~/data/notes"
import { redirect } from "@remix-run/node"

const NotesPage = () => {
   return (
      <main>
         <NewNote />
      </main>
   )
}
export default NotesPage

export async function action({ request }) {
   const formData = await request.formData()
   const noteData = Object.fromEntries(formData)
   const existingNotes = await getStoredNotes()

   noteData.id = new Date().toISOString() 
   const updatedNotes = existingNotes.concat(noteData)
   await storeNotes(updatedNotes)

   return redirect("/notes")
}

export function links(){
   return [
      ...newNoteLinks()
   ]
}