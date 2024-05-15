import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import ExternalEvents from "./ExternalEvents.jsx";


function UI({ ele }) {
  let { first_name, last_name, email, avatar } = ele;
  return (
    <div className="userCard">
      <img src={avatar} />
      <p>
        Name: {first_name} {last_name}
      </p>
      <p>Email: {email}</p>
    </div>
  );
}

function App() {
  let [data, setData] = useState([]);
  let [show, setShow] = useState(false)

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let res = await axios({
        method: "GET",
        baseURL: "https://reqres.in/api/users?page=2",
      });
      setData(res.data.data);
    } catch (error) {
      console.log("error");
    }
  }

  function redirect(){
    setShow(!show)
  }

  return (
    <div className="App">
      <div className="userDiv">
        {data.map((ele, index) => (
          <UI key={index} ele={ele} />
        ))}
      </div>

      <button onClick={ redirect} >Show MouseEvent</button>

      {show && <ExternalEvents/>}
    </div>
  );
}

export default App;
