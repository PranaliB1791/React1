import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Players from './Comp/Player';
const App=() =>{
  return(
    <div className='bg-primary'>
<h1 className='text-light pt-4 pb-4 text-center'>Welcome</h1>
<Players/>
    </div>
  )
}
export default App;