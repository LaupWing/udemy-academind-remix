import NewNote, {links as newNoteLinks} from "../components/NewNote"

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
   
}

export function links(){
   return [
      ...newNoteLinks()
   ]
}