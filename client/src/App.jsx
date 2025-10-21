import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/test")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return <h2>{message}</h2>;
}

export default App;
