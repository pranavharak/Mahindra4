import { TfiEmail } from "react-icons/tfi";
import "./emailus.css";
const Email=()=>{
    return(
        <main className="section">
            <div className="es1">
                <h1>EMAIL US</h1>
                    <div className="en1">
                        <div className="eenq1">
                            <p>Corporate/Fleet/CSD Canteen Enquiries</p>
                            <p className="e1"><TfiEmail/> sales.corporate@mahindra.com</p>
                        </div>
                        <div className="eenq2">
                            <p>Apply for a dealership</p>
                            <p className="e2"><TfiEmail/> development.channel@mahindra.com</p>
                        </div>
                        <div className="eenq3">
                            <p>Media Contacts</p>
                            <p className="e3"><TfiEmail/> automediainfo@mahindra.com</p>
                            <p className="e3"><TfiEmail/> automediaenquiries@mahindra.com</p>
                        </div>
                    </div>
            </div>
            <div className="es2">
                <div className="eenq4">
                    <p>Customer Care</p>
                    <p className="e1"><TfiEmail/> customercare@mahindra.com</p>
                </div>
                <div className="eenq5">
                    <p>Adventure</p>
                    <p className="e2"><TfiEmail/> adventure@mahindra.com</p>
                </div>    
            </div>
        </main>
    );
};
export default Email;