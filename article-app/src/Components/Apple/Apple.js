import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Card,Button} from 'antd';
import './Apple.css'
const { Meta } = Card;
const Apple = () => {
    const [news, setNews] = useState([]);
    

    useEffect(() => {
      const loadNews = async () => {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=apple&from=2023-06-18&to=2023-06-18&sortBy=popularity&apiKey=bbb17964e81644bb9b332f8fadd99b87"
        );
        setNews(response.data.articles);
      };
      loadNews();
    }, []);
  
    console.log("news", news);
  return (
    <div className='Data' >
         {news &&
        news.map((item, index) => {
          return (
            <Card className='Apple'
              key={index}
              hoverable
              style={{width:'400px',margin:'0 auto'}}

              cover={<img alt="image" src={item.urlToImage} />}
            >
              <Meta title={item.title} description={item.content} />
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Button type="primary" style={{ marginTop: "10px" }}>
                  Read More
                </Button>
              </a>
            </Card>
          );
        })}
    
    </div>
  )
}

export default Apple
