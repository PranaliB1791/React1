const Home = (props) => {
    return (
        <div>
            <h2>Learn Props</h2>
            <h3>{props.greet}</h3>
            <img src={props.myimg}></img>

        </div>
    )
}
export default Home;