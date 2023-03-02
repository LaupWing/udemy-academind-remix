import { Link, Outlet, useLoaderData } from "@remix-run/react"
import ExpensesList from "~/components/expenses/ExpensesList"
import { FaPlus, FaDownload } from "react-icons/fa"
import { getExpenses } from "~/data/expenses.server"
import { requireUserSession } from "../../data/auth.server"

const ExpensesLayout = () => {
   const expenses = useLoaderData()

   const hasExpenses = expenses && expenses.length > 0 

   return (
      <>
         <Outlet />
         <main>
            <section id="expenses-actions">
               <Link to={"add"}>
                  <FaPlus />
                  <span>Add Expense</span>
               </Link>
               <a href="/expenses/raw">
                  <FaDownload /> 
                  <span>Load Raw Data</span>
               </a>
            </section>

            {hasExpenses && <ExpensesList expenses={expenses}/>}
            {!hasExpenses && (
               <section id="no-expenses">
                  <h1>No expenses found</h1>
                  <p>Start <Link to={"add"}>adding some</Link> today.</p>
               </section>
            )}
         </main>
      </>
   )
}
export default ExpensesLayout

export async function loader({request}) { 
   await requireUserSession(request)
   const expenses = await getExpenses() 
   return expenses
   // if(!expenses || expenses.length === 0){
   //    throw json({
   //       message: "Could not find any expenses"
   //    },{
   //       status: 404,
   //       statusText: "No expenses found"
   //    })
   // }
}

// export function CatchBoundary() {
//    return
// }