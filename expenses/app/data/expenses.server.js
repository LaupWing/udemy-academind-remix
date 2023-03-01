import { prisma } from "./database.server"

export async function addExpense(expenseData) {
   try{
      return await prisma.expense.create({data: {
         title: expenseData.title,
         amount: +expenseData.amount,
         date: new Date(expenseData.date)
      }})
   }catch(err) {
      console.log(err)
      throw err
   }
}

export async function getExpenses() {
   try{
      const expenses = await prisma.expense.findMany({ orderBy: { date: "desc" } })
      return expenses
   }catch(err){
      console.log(err)
      throw err
   }
}

export async function getExpense(id) {
   try{
      const expense = await prisma.expense.findFirst({where: { id }})
      
      return expense
   }catch(err){
      console.log(err)
      throw err
   }
}

export async function updateExpense(id, expenseData) {
   try{
      prisma.expense.update({
         where: {
            id
         },
         date: {
            title: expenseData.title,
            amount: expenseData.amount,
            date: new Date(expenseData.date)
         }
      })
   }catch(e){
      console.log(e)
   }
}

export async function deleteExpense(id) {
   try{
      prisma.expense.delete({
         where: {
            id
         }
      })
   }catch(e){
      console.log(e)
   }
}