export class Route {
  

routes = {}



backgrounds = { 

  "/universe":"../assets/mountains-universe02.png",

  "/home":"../assets/mountains-universe-1.png",

  "/explore" :"../assets/mountains-universe-3.png",

  }




add(routeName , page) {
this.routes[routeName] = page


}


  route(event) {
  
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    
    this.handle()
    }
    
    
   handle() {
      const {pathname} = window.location
      const route = this.routes[pathname] || this.routes['/home']
      
      this.changeBackground(pathname)
      
      fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector("#app").innerHTML = html
      })
      
      
    }
    
    
    changeBackground(pathname){
      
      const background = this.backgrounds[pathname] || "/"
      
      
      document.body.style.backgroundImage = `url(${background})`
      
    }
    
    
    


}