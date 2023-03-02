import { hash } from "bcryptjs";
import { prisma } from "./database.server";

export async function signup({email, password}) {
   const existingUser = await prisma.user.findFirst({
      where: {
         email
      }
   })

   if(existingUser){
      const error = new Error("A user with the provided email address exists already")
      error.status = 422
      throw error
   }
   
   const passwordHash = await hash(password, 12)

   await prisma.user.create({
      data: {
         email,
         password: passwordHash
      }
   })
}

export async function login({email, password}){
   const existingUser = await prisma.user.findFirst({
      where: {
         email
      }
   })

   if(!existingUser){
      const error = new Error("Could not log you in, please check the provided credentials")
      error.status = 401
      throw error
   }

   const passwordCorrect = await compare(password, existingUser.password)
   if(!passwordCorrect){
      const error = new Error("Could not log you in, please check the provided credentials")
      error.status = 401
      throw error
   }

   
}