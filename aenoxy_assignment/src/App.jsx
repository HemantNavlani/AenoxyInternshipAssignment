import ProfilePage from "./pages/ProfilePage"
import RolePage from "./pages/RolePage"
import SignupPage from "./pages/SignupPage"
import {Outlet} from 'react-router-dom'
import { Footer, Header, Home, Verify } from "./components"
function App() {
  return (
   <>
   {/* <SignupPage/> */}
   {/* <ProfilePage/> */}
    {/* <RolePage/> */}
    <Header/>
    {/* <Verify/> */}
    <Home/>
    <Footer/>
   {/* <Outlet/> */}
   </>
  )
}

export default App
