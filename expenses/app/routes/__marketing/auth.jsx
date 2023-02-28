import authStyles from "~/styles/auth.css"
import AuthForm from "../../components/auth/AuthForm"

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