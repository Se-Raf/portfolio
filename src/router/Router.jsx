import { useEffect, useState } from "react";
import { routes } from "./routes";

function Router() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const Page = routes[path] || NotFound;

  return <Page />;
}

export default Router;