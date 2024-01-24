import Navigation from "../Navigation/Nav";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


 function Home({setSelectedCategory, setQuery, query}) {
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
  return (
    <div>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Outlet />
    </div>
  );
}

export default Home