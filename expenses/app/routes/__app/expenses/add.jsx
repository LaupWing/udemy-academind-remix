import { redirect } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"
import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"
import { addExpense } from "~/data/expenses.server"

const AddExpensesPage = () => {
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
export default AddExpensesPage

export async function action({ request }){
   const formData = await request.formData()
   const expenseData = Object.fromEntries(formData)
   await addExpense(expenseData)

   return redirect("/expenses")
}