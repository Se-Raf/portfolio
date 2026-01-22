import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import TechStackMenu from '../components/TechStackMenu';
import "./Homepage.css"

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="homepage-banner">
                <h1>Home</h1>
            </div>
            <TechStackMenu />
            <Menu />
        </div>
    );
};

export default Homepage;
