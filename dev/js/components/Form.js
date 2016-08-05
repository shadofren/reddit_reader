import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index';

var Form = React.createClass({
    getInitialState(){
        return {
            subreddit: "",
            filter: "hot",
            search_query: "",
            sort_by: "relevance",
            empty_query: false
        };
    },
    handleChangeSubreddit(e){
        this.setState({subreddit: e.target.value});
    },
    handleFilter(e){
        this.setState({filter: e.target.value});
    },
    handleChangeSearch(e){
        this.setState({search_query: e.target.value});
    },
    handleSort(e){
        this.setState({sort_by: e.target.value});
    },
    handleSubmit(e){
        e.preventDefault();
        if (this.state.subreddit == "" && this.state.search == ""){
            this.setState({empty_query:true});
            return;
        } else {
            this.setState({empty_query:false});
        }
        this.props.setSubreddit(this.state.subreddit);
        this.props.fetchData(this.state.subreddit, this.state.filter,
            this.state.search_query, this.state.sort_by);
    },
    render(){
        let warning = ""
        if (this.state.empty_query){
            warning = "Please fill in the subreddit";
        }
        return (
            <div>
                <h2>Please enter the subreddit you'd like to read</h2>
                <form onSubmit={this.handleSubmit}>
                    <span style={{color: 'red'}}> {warning}</span>
                    <label>Subreddit: </label>
                    <input id="subredditInput" type="text" 
                        onChange={this.handleChangeSubreddit} 
                        placeholder="Enter subreddit to fetch..."
                        value={this.state.subreddit}/>
                    <br />
                    <label>Filter by: </label>
                    <select id="filter" onChange={this.handleFilter}>
                        <option value="hot">Hot</option>
                        <option value="new">New</option>
                        <option value="rising">Rising</option>
                        <option value="controversial">Controversial</option>
                        <option value="top">Top</option>
                        <option value="gilded">Gilded</option>
                    </select>
                    <br />
                    <label>Search: </label>
                    <input id="searchInput" type="text" 
                        onChange={this.handleChangeSearch} 
                        placeholder="Enter search query..."
                        value={this.state.search_query}/>
                    <br />
                    <label>Sort by: </label>
                    <select id="sort" onChange={this.handleSort}>
                        <option value="relevance">Relevance</option>
                        <option value="hot">Hot</option>
                        <option value="new">New</option>
                        <option value="top">Top</option>
                        <option value="comments">Comments</option>
                    </select>
                    <br />
                    <input type="submit" value="Reload"/>
                </form>
            </div>
        )
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: bindActionCreators(actions.fetchData, dispatch),
        setSubreddit: bindActionCreators(actions.setSubreddit, dispatch)
    };
}

export default connect((state)=>{return{}},mapDispatchToProps)(Form);