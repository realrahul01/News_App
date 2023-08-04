/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./News.module.css";
import Loader from "../Loader/Loader";

const News = ({pageSize,category,country,setProgress}) => {
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1);
  const [toalResults, setTotalResults] = useState(null);
  const [isLoader,setIsLoader] = useState(false)



  const capitalization = (category) =>{
    return category.charAt(0).toUpperCase() + category.slice(1)
  }
  

  useEffect(() => {
    setProgress(30)
    
    document.title = `${capitalization(category)} - दूरदर्शन world news`
    
    setIsLoader(true)
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=31f769bb88eb4015839986f58d7f87bd &page=${page}&pageSize=${pageSize}`
      )
      .then((res) => res.json())
      .then((data) => {
        setProgress(100)
        setNewsData(data.articles);
        setTotalResults(data.totalResults);
        console.log(data.totalResults);
        console.log(data.articles);
        setIsLoader(false)
      });
  }, [page,pageSize,category,country,setProgress]);

  const nextHandler = () => {
    if (page < toalResults / pageSize) {
        setPage(page + 1);
    } else {
        return null;
    }
    console.log("next");
  };

  const previousHandler = () => {
    setPage(page - 1);
    console.log("previous");
  };
  const list = newsData.map((e, index) => (
    <>
      <div className="col-md-4">
        <NewsItem
          key={index}
          title={e.title}
          url={e.url}
          image={e.urlToImage}
          description={e.description}
          author={e.author}
          date={e.publishedAt}
        />
      </div>
    </>
  ));

  return (
      <div className="container my-4">
      <h2 style={{ textAlign: "center" }}> दूरदर्शन  World News - Top {capitalization(category)} Headlines</h2>
        
        {!isLoader && (     
          <div className="row my-4">{list}</div>
          )}

        {isLoader && (
          <Loader/>
          )}
      <div className={styles.btn}>
        <button
          type="button"
          disabled={page == 1}
          onClick={previousHandler}
          className="btn btn-sm btn-dark"
        >
          &larr; Previous
        </button>
        <button
          type="button"
          disabled={page > toalResults / pageSize}
          onClick={nextHandler}
          className="btn btn-dark btn-sm"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
export default News;
