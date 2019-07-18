import React, { useEffect, useState } from "react";
import axios from 'axios';



export default function RightColumn (){
    const [catimage, setImage] = useState([]);
    const [cattitle, setTitle] = useState([]);
    const [catcontent, setContent] = useState([]);
    const [catdate, setDate] = useState([]);
    const [catcopyright, setCopyright] = useState([]);
    useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=hFfb6TELfC0QzBGqWuPCN4WHVcSvRFYEBaoCV3Tn&`)
    .then( res => {
        console.log(res.data);
        const catUrl = res.data.url;
        setImage(catUrl);
        const cattitle = res.data.title;
        setTitle(cattitle);
        const catcontent = res.data.explanation;
        setContent(catcontent);
        const catdate = res.data.date;
        setDate(catdate);
        const catcopyright = res.data.copyright;
        setCopyright(catcopyright);
    });
    }, []);
    

 return (
       <div className="rightColumnWrapper">
        <div class="card">
        <div className="imageWrapper">
        <a href="{image}"><img src={catimage} alt="cat" /></a>
  <div class="card-body">
  <h1>{cattitle}</h1>
            
            <h2>{catcopyright}</h2>
            <p>{catdate}</p>
            <p>{catcontent}</p>
                
  </div>
</div>
        </div>
        </div>
 );
}