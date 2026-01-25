import { useState } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import TechStackMenu from '../components/TechStackMenu';
import DynamicContent from '../components/DynamicContent';
import "./Homepage.css"

const Homepage = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleMenuSelect = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <Navbar />
            <div className="homepage-banner">
                <h1>Home</h1>
            </div>
            {/* TechStackMenu seems to be another menu, leaving it as is for now as per instructions to only touch Menu.jsx related logic */}
            <TechStackMenu />
            <Menu onSelect={handleMenuSelect} activeSection={activeSection} />
            <DynamicContent activeSection={activeSection} />
        </div>
    );
};

export default Homepage;
