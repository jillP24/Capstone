import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import JwtRegister from './register/JwtRegister'
import JwtLogin from './login/JwtLogin'
import OurLogin from './login/OurLogin'


const sessionRoutes = [
    {
        path: '/session/signup',
        component: JwtRegister,
    },
   
    { 
        path: '/session/signin',
        // change this component here from "JwtLogin" to "OurLogin" 
        component: OurLogin,
    },
    {
        path: '/session/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/session/404',
        component: NotFound,
    },
]

export default sessionRoutes
