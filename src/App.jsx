import { AppRouter } from "./router/routes";

const App = () => {
    return (
        <AppRouter />
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);