import "./callus.css";
import { MdCall } from "react-icons/md";
const Call=()=>{
    return(
        <main className="section">
            <div className="s1">
                <h1>CALL US</h1>
                <div className="enq">
                    <div className="enq1">
                        <p>New Vehicle Enquiry</p>
                        <p className="n1"><MdCall/>1800 209 6006</p>
                    </div>
                    <div className="enq2">
                        <p>Need Expert help in Buying a Mahindra?</p>
                        <p className="n2"><MdCall/>1800 209 6006</p>
                    </div>
                    <div className="enq3">
                        <p>Service Enquiries</p>
                        <p className="n3"><MdCall/>1800 209 6006</p>
                    </div>
                </div>
            </div>
            <div className="s2">
                <div className="enq4">
                    <p>24 Hour RSA Personal Vehicles</p>
                    <p className="n1"><MdCall/>1800 102 7006</p>
                </div>
                <div className="enq5">
                    <p>24 Hour RSA Commercial Vehicles</p>
                    <p className="n2"><MdCall/>1800 419 0848</p>
                </div>    
            </div>
        </main>
    );
};
export default Call;