import NotFound from './NotFound'
import OurLogin from './login/OurLogin'  
import About from './About'

/**
 * This file creates routes for our three pages
 * @author MatX Template
 * @author Jill 
 * @author Josh 
 */ 

const sessionRoutes = [
    // redirects to our about page
    {
        path: '/session/about',
        component: About,
    },  
    // default redirects to our login page
    { 
        path: '/',
        component: OurLogin,
    },
    // redirects to our error page
    {
        path: '/session/404',
        component: NotFound,
    },
]

export default sessionRoutes
