import { useState } from 'react'
import './App.css'
import Authentication from './Authentication'
import UnAuthentication from './UnAuthentication'

function App() {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
  const [signUpdate, setSignUpdate] = useState( JSON.parse(window.localStorage.getItem("newToken")) || false)

  if(signUpdate){
    if(token.login == signUpdate.newLogin && token.password == signUpdate.newPassword){
      return <Authentication/>
    }
    else{
      return <UnAuthentication setSignUpdate={setSignUpdate} setToken={setToken}/>
    }
  }
  else{
    if(token.login == "Mirolim" && token.password == "123"){
      return <Authentication/>
    }
    else{
      return <UnAuthentication setSignUpdate={setSignUpdate} setToken={setToken}/>
    }
  }

}

export default App
