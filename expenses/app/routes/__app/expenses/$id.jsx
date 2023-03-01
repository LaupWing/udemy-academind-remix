// import { json } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"
import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"
// import { getExpense } from "~/data/expenses.server"

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

// export async function loader({ params }) {
//    const expenseId = params.id
//    const expense = await getExpense(expenseId)
   
//    return json(expense)
// }