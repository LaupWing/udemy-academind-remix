import authStyles from "~/styles/auth.css"
import AuthForm from "../../components/auth/AuthForm"
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

   if(authMode === "login"){

   }else {

   }
}