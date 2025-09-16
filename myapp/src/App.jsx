import { Fragment } from "react"
import Home from "./Home";
import About from "./About";
import MyInfo from "./MyComp/MyInfo";
const App=()=>{
  return(  
      <Fragment>
        <h2 style={{color:'red',textAlign:'center',fontFamily: 'arial'}}>Welcome</h2>
     <h3 style={{color:'blue'}}>Hello</h3>
     <Home/>
     <About/>
     <MyInfo/>
     </Fragment>
  )
}
export default App;