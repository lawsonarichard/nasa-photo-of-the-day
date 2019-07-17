import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function NasaCard (){
    const [image, setImage] = useState([]);
    const [title, setTitle] = useState([]);
    const [content, setContent] = useState([]);
    const [date, setDate] = useState([]);
    const [copyright, setCopyright] = useState([]);
    useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=hFfb6TELfC0QzBGqWuPCN4WHVcSvRFYEBaoCV3Tn&date=2012-03-14`)
    .then( res => {
        console.log(res.data);
        const imgUrl = res.data.hdurl;
        setImage(imgUrl);
        const title = res.data.title;
        setTitle(title);
        const content = res.data.explanation;
        setContent(content);
        const date = res.data.date;
        setDate(date);
        const copyright = res.data.copyright;
        setCopyright(copyright);
    });
    }, []);

 return (
       <div className="gridContainer">
        
        <div className="imageWrapper">
            <h1>{title}</h1>
            <a href="{image}"><img src={image} alt="Space" /></a>
            <h2>{copyright}</h2>
            <p>{date}</p>
            <p>{content}</p>
        </div>
        </div>
 );
}