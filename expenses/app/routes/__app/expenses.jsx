import { Outlet } from "@remix-run/react"
import expensesStyles from "~/styles/expenses.css"
import ExpensesList from "../../components/expenses/ExpensesList"

const DUMMY_EXPENSES = [
   {
      id: "e1",
      title: "First expense",
      amount: 12.99,
      date: new  Date().toISOString()
   },
   {
      id: "e2",
      title: "Second expense",
      amount: 16.99,
      date: new  Date().toISOString()
   },
]


const ExpensesLayout = () => {
   return (
      <>
         <Outlet />
         <main>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
         </main>
      </>
   )
}
export default ExpensesLayout

export function links(){
   return [
      {
         rel: "stylesheet",
         href: expensesStyles
      }
   ]
}