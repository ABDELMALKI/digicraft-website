// pages/Blog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace this with your actual API key
  const API_KEY = "4cb7f142337d48dbaeda15fe88c4e5d9";
  const API_URL = `https://newsapi.org/v2/everything?q=web%20development&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="blog">
      <section className="blog-hero">
        <div className="container">
          <h1>Web Development News</h1>
          <p>Latest updates, trends, and insights in web development worldwide.</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          {loading ? (
            <p>Loading news...</p>
          ) : (
            <div className="blog-grid">
              {news.map((article, index) => (
                <article key={index} className="blog-card">
                  <div className="blog-card-content">
                    <span className="blog-category">{article.source.name}</span>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <div className="blog-meta">
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
