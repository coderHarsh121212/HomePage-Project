import './App.css';
import HomePage from './pages/HomePage';
import logo1 from "../src/components/logo1.png";
function App() {
  return (
    <div className="App w-full h-[140vh] sm:h-[120vh] lg:h-[100vh] box-border bg-[#1D2345] relative max-[400px]:h-[10vh] max-[500px]:h-[170vh]" >
     <HomePage/>
     <div className="rounded-xl px-2 py-1 bg-[#6E6ED9] text-white flex w-fit h-fit absolute bottom-[10px] right-4 ">
        <img
          src={logo1}
          alt="footer-help"
          className="w-5 h-5 rounded-full bg-[#8B8BE1]"
        ></img>
       <span>Need Help ?</span>
      </div>
    </div>
  );
}

export default App;
