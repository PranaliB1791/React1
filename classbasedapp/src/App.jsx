import Users from "./Comp/Users"
import Home from "./Comp/Home"
import lap from './assets/laptop.webp'
const App=()=>{
  return(
    <div>
      <h1>Welcome</h1>
      <Users/>
      <Home greet="Good Afternoon Everyone"
      myimg={lap}/>
    </div>
    
  )
}
export default App