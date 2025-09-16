import Users from "./Comp/Users";
import lsp from './assets/jio'
const App =()=>{
  const emp={
    empName:"Jorden Walke",
    company:"Fcaebook",
    role:"Software engg",
    dev:"ReactJs"
  }
  return (
    <div>
      <h2>Learn props in ReactJs</h2>
      <Users appname="ReactJs" empdeatils={emp}/>
    </div>
  )
}
export default App;