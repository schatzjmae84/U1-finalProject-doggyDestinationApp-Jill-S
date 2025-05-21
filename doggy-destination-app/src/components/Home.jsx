import pic from "../assets/pupPic3.jpg"

const Home = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Welcome to the Doggy Destination App!</h1>
            <p>Are you trying to find a fun place that both you and your pup can enjoy?  Then you have come to the right place!</p>
            <button to="/searchForm">Let's Get Started!</button>
            <div>
                <img className="pic" src={pic} width="300" height="225" alt="Dog wearing glasses!" />
            </div>
        </div>        
    );
};

export default Home;