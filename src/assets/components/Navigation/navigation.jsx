import "./navigation.css"
import { LuUserRound } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
const Navigation =()=>{
    return (
        <nav className="main_nav">
            <nav className="navi">
                <div className="logo"> 
                    <img src="images\mahindra-logo-new.webp" alt="Brand-logo"/>
                </div>       
                <div className="list">
                    <ul>
                        <li>SUVs</li>
                        <li>COMMERCIAL</li>
                    </ul>
                </div>
                <div className="icons">
                    <LuUserRound className="user"/>
                    <FiMenu className="men"/>
                </div>         
            </nav>
        </nav>
    );
};
export default Navigation;