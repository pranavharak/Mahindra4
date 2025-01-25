import { IoMdArrowForward } from "react-icons/io";
import "./inpt.css";
const Inpts=()=>{
    return(
        <main className="sec-main">
            <div className="sec">
                <h1>GET IN TOUCH</h1>
                <p>Need more information? Share your contact details and we will reach out to you soon.</p>
                <div className="nm">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div className="cnt">
                    <input type="text" placeholder="Mobile Number"/>
                    <input type="text" placeholder="Email Address"/>
                </div>
                <div className="vc">
                    <select >
                        <option>Select Vehicle</option>
                        <option>THAR</option>
                        <option>XUV 3XO</option>
                        <option>SCORPIO-N</option>
                        <option>BOLERO</option>
                        <option>XUV 700</option>
                    </select>
                </div>
                <div className="msg">
                    <textarea rows="8" placeholder="Message"/>
                </div>
                <div className="ck">
                    <input type="checkbox"  className="chek"/>
                    <p>I agree that Mahindra & Mahindra and its associates can contact me via phone call, WhatsApp or any other 
                        medium to address my concern or query. I also agree to the website's <u>T&C</u> and <u>Privacy Policy.</u></p>
                </div>
                <div className="bt">
                    <button><IoMdArrowForward className="ic"/>Submit</button>
                </div>
            </div>
        </main>
    );
};
export default Inpts;