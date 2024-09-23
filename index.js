import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./Layout";
import Home from "./home";
import Contact from "./contact";
import About from "./about"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function App(){
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path = "home" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function FavoriteColor() {
//   const [color, setColor] = useState();

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }

function GetAll() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://66f0db10f2a8bce81be6cdc0.mockapi.io/XYZ").then(res => res.json()).then(res => setData(res));
  }, []);

  var formattedData = data.map((i) => {
    return (
      <>
       <div class="card" style={{width: "20%"}}>
          <img src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 className="card-title">{i.name}</h5>
            <p className="card-text">{i.id}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </>
    )
  })

  return(
    <div className='row'>{formattedData}</div>
  )
}

root.render(
  <GetAll />
);



