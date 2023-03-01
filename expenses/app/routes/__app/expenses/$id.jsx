// import { json } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"
import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"
import { updateExpense } from "~/data/expenses.server"
import { validateExpenseInput } from "~/data/validation.server"
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

export async function action({ params, request }) {
   const expenseId = params.id
   const formdData = await request.formData()
   const expenseData = Object.fromEntries(formdData)
   try{
      validateExpenseInput(expenseData)   
   }catch(err){
      return err
   }

   await updateExpense( expenseId,  expenseData)
   return redirect("/expenses")
}