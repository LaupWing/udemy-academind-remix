import { prisma } from "./database.server"

export async function addExpense(expenseData, userId) {
   try{
      return await prisma.expense.create({data: {
         title: expenseData.title,
         amount: +expenseData.amount,
         date: new Date(expenseData.date),
         User: {
            connect: {
               id: userId
            }
         }
      }})
   }catch(err) {
      throw new Error("Failed to add expense.")
   }
}

export async function getExpenses(userId) {
   if(!userId){
      throw new Error("Failed to get expenses.")
   }

   try{
      const expenses = await prisma.expense.findMany({ 
         where: { userId },
         orderBy: { date: "desc" } 
      })
      return expenses
   }catch(err){
      throw new Error("Failed to get expenses.")
   }
}

export async function getExpense(id) {
   try{
      const expense = await prisma.expense.findFirst({where: { id }})
      
      return expense
   }catch(err){
      throw new Error("Failed to get expense.")
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
      throw new Error("Failed to update expense.")
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
      throw new Error("Failed to delete expense.")
   }
}