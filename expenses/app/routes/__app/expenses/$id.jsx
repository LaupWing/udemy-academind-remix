import { useNavigate } from "@remix-run/react"
import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"

const UpdateExpensesPage = () => {
   const navigate = useNavigate()

   function closeHandler(){
      navigate("..")
   }

   return (
      <Modal onClose={closeHandler}>
         <ExpenseForm />
      </Modal>
   )
}
export default UpdateExpensesPage

async function loader({ params }) {
   const expenseId = params.id
   
}