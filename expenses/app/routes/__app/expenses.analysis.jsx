import ExpenseStatistics from "~/components/expenses/ExpenseStatistics"
import Chart from "~/components/expenses/Chart"
import { getExpenses } from "../../data/expenses.server"
import { json } from "@remix-run/node"
import { useLoaderData } from "react-router"
import Error from "../../components/util/Error"
import { useCatch } from "@remix-run/react"

const ExpensesAnalysisPage = () => {
   const expenses = useLoaderData()

   return (   
      <main>
         <Chart expenses={expenses}/>
         <ExpenseStatistics expenses={expenses}/>
      </main>
   )
}
export default ExpensesAnalysisPage

export async function loader() {
   const expenses = await getExpenses()

   if(!expenses || expenses.length === 0){
      throw json({
         message: "Couldnot load expenses for requested analysis"
      },{
         status: 404,
         statusText: "Expenses not found"
      })
   }
   return expenses
}

export function CatchBoundary() {
   const caughtResponse = useCatch()

   return (
      <main>
         <Error title={caughtResponse.statusText}>
            <p>{caughtResponse.data?.message || "Something went wrong - could not load expenses."}</p>
         </Error>
      </main>
   )
}