import './App.css';
import { useEffect } from 'react';
import axios from "axios";

function App() {

  useEffect(() => {
    const load = async () => {
      let profile = await axios.get('http://localhost:8000/profile');
      console.log(profile.data);
    }
    load();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
