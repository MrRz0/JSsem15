import React, { useState, useEffect } from "react";
import { fetchArticles } from "./services/articlesService";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetchArticles();
        setArticles(response.data.record); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) return <p>Loading articles...</p>;

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article.name || `Article ${index + 1}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
