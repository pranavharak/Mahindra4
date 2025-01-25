import "./App.css";
import Navigation from "./assets/components/Navigation/navigation";
import Cont from "./assets/components/contact/contact";
import Continp from "./assets/components/address/inp";
import Call from "./assets/components/callusandemailus/callus";
import Email from "./assets/components/callusandemailus/email";
import Inpts from "./assets/components/inputs/inpt";
const App=()=>{
  return(
    <div>
      <Navigation/>
      <Cont/>
      <Continp/>
      <hr className="line1"/>
      <Call/>
      <hr className="line2"/>
      <Email/>
      <hr className="line3"/>
      <Inpts/>
    </div>
  );
};
export default App;