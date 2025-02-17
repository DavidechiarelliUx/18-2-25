import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'
// import {Button} from "react-bootstrap";

function App() {
  // const count = useSelector((state) =>state.main.count);
  // const dispatch =useDispatch()
  // console.log(count);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
    // <>
    // <p>il valore di count in redux è {count}</p>
    //   <Button  onClick={()=>
    //     dispatch({
    //       type : "INCREMENT",
    //       payload:3,
    //     })
    //   }>Incrementa</Button>

    //   </>
  );
}

export default App;
