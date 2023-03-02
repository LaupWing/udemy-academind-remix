import { redirect } from "@remix-run/node"
import authStyles from "~/styles/auth.css"
import AuthForm from "../../components/auth/AuthForm"
import { login, signup } from "../../data/auth.server"
import { validateCredentials } from "../../data/validation.server"

const AuthPage = () => {
   return (
      <AuthForm />
   )
}
export default AuthPage


export function links() {
   return [
      {
         rel: "stylesheet",
         href: authStyles
      }
   ]
}

export async function action({ request }) {
   const searchParams = new URL(request.url).searchParams
   const authMode = searchParams.get("mode") || "login"

   const formData = await request.formData()
   const credentials = Object.fromEntries(formData)

   try{
      validateCredentials(credentials)
   }catch(e){
      return e
   }
   try{
      if(authMode === "login"){
         return await login(credentials)
      }else {
         return await signup(credentials)
      }
   }catch(e){
      if(e.status === 422){
         return {
            credentials: e.message
         }
      }
   }
}

export function headers({
   actionHeaders,
   loaderHeaders,
   parentHeaders
}){
   return {
      "Cache-Control": parentHeaders.get("Cache-Control")
   }
}