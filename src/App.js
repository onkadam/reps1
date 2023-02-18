import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const onAdd = () => {
    setList((prev) => [...prev, data]);
  };
  return (
    <div className="App">
      <input type="text" value={data} onChange={handleChange}></input>
      <button onClick={onAdd}>App</button>
      <ul>
        {list.map((item, id) => {
          return <li ket={id}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
