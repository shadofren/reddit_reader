import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index';

var Form = React.createClass({
    getInitialState(){
        return {
            subreddit: "",
            filter: "hot",
            empty_query: false
        };
    },
    handleChangeSubreddit(e){
        this.setState({subreddit: e.target.value});
    },
    handleFilter(e){
        this.setState({filter: e.target.value});
    },
    handleSubmit(e){
        e.preventDefault();
        if (this.state.subreddit == ""){
            this.setState({empty_query:true});
            return;
        } else {
            this.setState({empty_query:false});
        }
        this.props.setSubreddit(this.state.subreddit);
        this.props.fetchSubreddit(this.state.subreddit, this.state.filter);
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
                    <label>Subreddit: </label>
                    <input id="fetchBox" type="text" 
                        onChange={this.handleChangeSubreddit} 
                        placeholder="Enter subreddit to fetch..."
                        value={this.state.subreddit}/>
                    <span style={{color: 'red'}}> {warning}</span>
                    <br />
                    <label>Filter by: </label>
                    <select onChange={this.handleFilter}>
                        <option value="hot">Hot</option>
                        <option value="new">New</option>
                        <option value="rising">Rising</option>
                        <option value="controversial">Controversial</option>
                        <option value="top">Top</option>
                        <option value="gilded">Gilded</option>
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
        fetchSubreddit: bindActionCreators(actions.fetchSubreddit, dispatch),
        setSubreddit: bindActionCreators(actions.setSubreddit, dispatch)
    };
}

export default connect((state)=>{return{}},mapDispatchToProps)(Form);