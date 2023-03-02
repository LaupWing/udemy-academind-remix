import { getExpenses } from "../data/expenses.server"

export async function loader({request}) {
   await requireUserSession(request)
   return getExpenses()
}
