import { MdCall } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import "./inp.css";
const Continp=()=>{
    return(
        <main className="section1">
            <div className="address">
                <div className="heading1">
                    <h1>Mahindra Auto Head-office Address</h1>
                    <p>Mahindra & Mahindra Ltd. Automotive Sector,</p>
                    <p>Mahinidra Towers Akurli Road, Kandivali (East) Mumbai-400101</p>
                    <p className="p1"> <LuMapPin/>Open in maps</p>
                </div>
                <div className="heading2">
                    <h1>Mahindra Adventure</h1>
                    <p>3rd Floor, Mahindra Towers-Automotive Division Green</p>
                    <p>Gate. Western Express Highway,Kandavali East-400101</p>
                    <div className="medium"><p className="p2"><MdCall/>7829010107</p><p className="p3"> <LuMapPin/>Open in maps</p></div>
                </div>
            </div>
        </main>
    );
};
export default Continp;