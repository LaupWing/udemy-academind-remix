import authStyles from "~/styles/auth.css"

const AuthPage = () => {
   return <div>AuthPage</div>
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