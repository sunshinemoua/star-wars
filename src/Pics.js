import React, { useState, useEffect } from "react";
import axios from "axios";

const Pics = () => {
  const picURL = "https://dog.ceo/api/breeds/image/random";

  const [pics, setPics] = useState();

  useEffect(() => {
    axios.get(picURL).then((data) => {
      setPics(data.data.message);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <img src={pics}></img>
    </div>
  );
};

export default Pics;
