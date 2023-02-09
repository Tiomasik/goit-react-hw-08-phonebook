import { Link } from "react-router-dom";

const Home = () => {
   
        return (
            <main>
                <h2>I am Home-page</h2>
                <Link to={`/register`}>GET STARTED!</Link>
            </main>
        )
    };

export default Home;