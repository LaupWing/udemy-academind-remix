import { Link, NavLink, useLoaderData } from "@remix-run/react"
import Logo from "../util/Logo"

function MainHeader() {
   const userId = useLoaderData()

   return (
      <header id="main-header">
         <Logo />
         <nav id="main-nav">
            <ul>
               <li>
                  <NavLink to="/">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/pricing">Pricing</NavLink>
               </li>
            </ul>
         </nav>
         <nav id="cta-nav">
            <ul>
               <li>
                  {!userId ?  (<Link href="/auth" className="cta">
                     Login
                  </Link>) : (<form>
                     <button className="cta-alt">Logout</button>
                  </form>)}
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default MainHeader
