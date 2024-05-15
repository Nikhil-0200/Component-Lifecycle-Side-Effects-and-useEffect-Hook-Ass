import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

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

  return (
    <div className="App">
      <div className="userDiv">
        {data.map((ele, index) => (
        <UI key={index} ele={ele} />
      ))}
      </div>
      
    </div>
  );
}

export default App;
