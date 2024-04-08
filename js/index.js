import { Route } from "./router.js";




const router = new Route ()
  
  
router.add("/home", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")



router.handle()

  window.onpopstate = () => router.handle() 
  window.route = () => router.route()