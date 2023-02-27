import { Outlet } from "@remix-run/react"

const ExpensesLayout = () => {
   return (
      <main>
         <p>Shared element</p>
         <Outlet />
      </main>
   )
}
export default ExpensesLayout
