import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import TechStackMenu from '../components/TechStackMenu';
import DynamicContent from '../components/DynamicContent';
import "./Homepage.css"

const Homepage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeSection = searchParams.get('section') || 'experience';

    const handleMenuSelect = (section) => {
        setSearchParams({ section });
    };

    return (
        <div>
            <Navbar />
            <div className="homepage-banner">
                <h1>Rafael C. Senados</h1>
                <br />
                <h2>Software Engineer</h2>
            </div>
            <TechStackMenu />
            <div className="homepage-content">
                <Menu onSelect={handleMenuSelect} activeSection={activeSection} />
                <DynamicContent activeSection={activeSection} />
            </div>
        </div>
    );
};

export default Homepage;
