import React, { Component } from "react";

const Saved = (props) => {
  const removeArticle = (event) =>{
    var index = event.target.name;
    props.removeArticle(index);
  }

    return (

      <div className="row">
      <div className="col-sm-12">
        <br />
        
        <div className="panel panel-primary">
            <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-star-o" aria-hidden="true" /> Saved Articles</strong></h3>
          </div> 

          <div id="our-results" className="panel-body">
            {props.savedArticles.map((article, i) => (
              <div key={i} id={"result_"+(i+1)} className="well">
                <h4>{article.title}</h4>
                <p><strong>Date Published:</strong> {article.date}</p>
                <p>{article.summary}</p>
                <a href={article.url} target="_blank" >{article.url}</a>
                <br/>
                <br/>
                <button name={article._id} className="btn btn-default" onClick={removeArticle}><i className="fa fa-trash-o" aria-hidden="true" /> Delete</button> 
              </div>
            ))}              
          </div>
        </div>
      </div>
    </div>
    );
}

export default Saved;