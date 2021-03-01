import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card'
import './App.css'
const moment = require('moment');
const cryptoJS = require('crypto-js');

const PUBLIC_API_KEY = process.env.REACT_APP_API_PUBLIC_KEY;
const PRIVATE_API_KEY = process.env.REACT_APP_API_PRIVATE_KEY;


function App() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeStamp = moment().format("MM/DD/YYYY");
    const hash = cryptoJS.MD5(timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();
    fetch(
      `http://gateway.marvel.com/v1/public/comics?apikey=${PUBLIC_API_KEY}&hash=${hash}&ts=${timeStamp}`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [])


  return (
    <div className="App background">
      <h1>Marvel React App</h1>
      {loading ? <h2>Content is loading</h2> : (
        <div className='grid-container'>
          {data.map(element => 
          <Card key={element.id} title={element.title} description={element.description} image={element.images[0]}/>)}
        </div>
      )}
    </div>
  );
}

export default App;
