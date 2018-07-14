import axios from "axios";
require ("dotenv")

// const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
const apiKey = process.env.NYT_API_KEY;

export default {
  
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },

  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },

  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },

  // Retrives articles from NYT based on search criteria
  findArticles: function(topic, startYear, endYear) {
    console.log(apiKey)
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
  }
};