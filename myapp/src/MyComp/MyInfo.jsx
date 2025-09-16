
import './MyInfo.css'
const MyInfo=()=>{
    let name='Sayali'
    let contact =887766559
    let email='sayali@gmail.com'
    let address='HYD'
    let mobile={
        brand :'onePlue',
        model:12,
        price:65000
    }
    return(
        <div className ="myinfo">
<h2 >MyInfo : </h2>
<h3>Name: {name}</h3>
<h3>Contact: {contact}</h3>
<h3>Email: {email}</h3>
<h3>City: {address}</h3>
<h3>I purchased: {mobile.brand} - {mobile.model} - {mobile.price}</h3>
        </div>
    )
}
export default MyInfo;