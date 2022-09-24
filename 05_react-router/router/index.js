import Home from '../pages/home'
import About from '../pages/about'
import AboutCulture from "../pages/.....js"

const  routes = [
  {
    path:'/',
    exact:true,
    component:Home
  },
  {
    path:"/about",
    component:About,
    routes: [
      {
        path:"/about",
        exact:true,
        component:AboutCulture
      }
    ]
  }
]

export default routes