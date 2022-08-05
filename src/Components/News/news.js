import React, { useState, useEffect } from "react";
import "./news.css";
import { Card, Button,Pagination } from "antd";
import axios from "axios";
const { Meta } = Card;
// npx create-react-app appname
// npm i antd
// npm i axios

function News() {
  const [news, setNews] = useState([]);
  const [total,setTotal]=useState("");
  const [page,setPage]=useState(1);
  const [newsPerPage,setNewsPerPage]=useState(5);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
       "https://newsapi.org/v2/everything?q=technology&apiKey=46c571611c6047b0a07248f9ef3e0ef9"
      );
      setNews(response.data.articles);
      setTotal(response.data.articles.length);
    };
    loadNews();
  }, []);
  console.log("news", news);
  const indexOfLastPost = page *newsPerPage;
  const indexOfFirstPost = indexOfLastPost - newsPerPage;
  const currentnews= news.slice(indexOfFirstPost, indexOfLastPost);
  const onShowSizeChange=(current,pageSize)=>{
    setNewsPerPage(pageSize);
  }
  return (
    <div className="App">
      {news &&
        currentnews.map((item, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: "70%"}}
              cover={<img alt="image" src={item.urlToImage} style={{height:"60%",width:"60%"}}/>}
            >
              <Meta title={item.title} description={item.content} />
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Button type="primary" style={{ marginTop: "50px"  }}>
                  Read More
                </Button>
              </a>
            </Card>
          );
        })}
        <Pagination className="pagination"
          onChange={(value)=>setPage(value)}
          pageSize={newsPerPage}
          total={total}
          current={page}
          onShowSizeChange={onShowSizeChange}
          />
    </div>
  );
}

export default News;
