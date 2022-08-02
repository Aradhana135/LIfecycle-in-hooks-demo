import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [mount, setMount] = useState(false);
  const [news, setNews] = useState([{ new: null }]);
  useEffect(() => {
    setMount(true);
    axios
      .get("https://hn.algolia.com/api/v1/search?query=react")
      .then((result) => {
        setNews({ new: result.data.hits });
      });
    return () => {
      setMount(false);
    };
  },
    []);
  return <>
  <h1 style={{color:"grey"}}>Data:</h1>
  <ul>
    
    {news.new==null?(<h1>loading...</h1>):(news.new.map((item)=>{return <li key={item.objectID}>{item.title}</li>}))}
  </ul>
  
  </>;
};

export default Demo;
