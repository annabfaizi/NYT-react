// import axios from "axios";

// const API = {
//   // Retrieves all quotes from the db
//   getQuotes: function() {
//     return axios.get("/api/quotes");
//   },
//   // Saves a new quote to the db
//   saveQuote: function(text) {
//     return axios.post("/api/quotes", { text });
//   },
//   // Deletes a quote from the db
//   deleteQuote: function(id) {
//     return axios.delete(`/api/quotes/${id}`);
//   },
//   // Toggles a quote's favorite property in the db
//   favoriteQuote: function(quote) {
//     quote.favorited = !quote.favorited;
//     const { _id, favorited } = quote;
//     return axios.patch(`/api/quotes/${_id}`, { favorited });
//   }
// };

// export default API;


import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "f8dc4a5781b140958978ff65403147eb";

// Helper functions
const API = {

  getArticles: function(searchTerm, startYear, endYear){
    var params = "?api-key="+APIKEY;
    params+="&q="+searchTerm;
    if(parseInt(startYear))
      params+="&begin_date="+startYear+"0101";
    if(parseInt(endYear))
      params+="&end_date="+endYear+"1231";
      return axios.get(BASEURL+params);
  },
  saveArticle: function(article) {
    var newArticle = {
      title: article.headline.main,
      section: article.section_name,
      date: article.pub_date,
      url: article.web_url
    };
    newArticle.by = article.byline ? article.byline.original : "No Author";
    return axios.post("/api/saved", newArticle);
  },
  getSavedArticles: function() {
    return axios.get("/api/saved");
  },

  removeArticle: function(id){
    return axios.delete("/api/saved", {params: {id: id}});
  },
};

export default API;