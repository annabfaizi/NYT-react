import React, { Component } from "react";

const Search = props =>

    <div className="row">
      <div className="col-sm-12 col-m-12">
        <br />
        
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-list-alt" aria-hidden="true" />   Search Parameters</strong></h3>
          </div>
          <div className="panel-body">

            <form>
              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term" placeholder="Enter search term" value={props.searchTerm} onChange={props.handleSearchTerm} />
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Number of Records to Retrieve:</label>
                <select className="form-control" id="num-records-select" name="retrieveNumber" value={props.limit} onChange={props.handleLimit}>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
              </div>

              <div className="form-group">
                <label htmlFor="startYear">Start Year (Optional):</label>
                <input type="text" className="form-control" id="startYear" placeholder="2000" value={props.startYear} onChange={props.handleStartYear} />
              </div>

              <div className="form-group">
                <label htmlFor="endYear">End Year (Optional):</label>
                <input type="text" className="form-control" id="endYear" placeholder="2017" value={props.endYear} onChange={props.handleEndYear} />
              </div>

              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search" aria-hidden="true" /> Search</button>
              <button onClick={props.clearSearch} type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash" aria-hidden="true" /> Clear Results</button>

            </form>
          </div>
        </div>
      </div>
    </div>

export default Search;