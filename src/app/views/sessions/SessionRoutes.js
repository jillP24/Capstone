import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import JwtRegister from './register/JwtRegister'
import JwtLogin from './login/JwtLogin'
import OurLogin from './login/OurLogin'  
import About from './About'



const sessionRoutes = [
    {
        path: '/session/about',
        component: About,
    },  
    { 
        path: '/',
        // change this component here from "JwtLogin" to "OurLogin" 
        component: OurLogin,
    },
    // {
    //     path: '/session/forgot-password',
    //     component: ForgotPassword,
    // },
    {
        path: '/session/404',
        component: NotFound,
    },
]

export default sessionRoutes
