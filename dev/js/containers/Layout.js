import React from "react";
import SubredditList from './../components/SubredditList';
import {connect} from 'react-redux'
import * as actions from '../actions/index';
import { bindActionCreators } from 'redux'

var Layout = React.createClass({
    getInitialState(){
        return {
            subreddit: ""
        };
    },
    handleChangeSubreddit(e){
        this.setState({subreddit: e.target.value});
    },
    handleSubmit(e){
        let {dispatch} = this.props;
        e.preventDefault();
        this.props.setSubreddit(this.state.subreddit);
        this.props.fetchSubreddit(this.state.subreddit);
    },
    render(){
        // starting state
        if (this.props.subreddit.currentSubreddit == "" && this.props.subreddit.error == null){
            return (
                <div>
                    <h2>Please enter the subreddit you'd like to read</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input id="fetchBox" type="text" 
                            onChange={this.handleChangeSubreddit} 
                            placeholder="Enter subreddit to fetch..."
                            value={this.state.subreddit}/>
                        <input type="submit" value="Reload"/>
                    </form>
                </div>
            )
        }
        // success case
        if (this.props.subreddit.fetched){
            return (
                <div>
                    <h2>Please enter the subreddit you'd like to read</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input id="fetchBox" type="text" 
                            onChange={this.handleChangeSubreddit} 
                            placeholder="Enter subreddit to fetch..."
                            value={this.state.subreddit}/>
                        <input type="submit" value="Reload"/>
                    </form>
                    <h2>Hot Posts on {this.props.subreddit.currentSubreddit} Subreddit</h2>  
                    <SubredditList posts={this.props.subreddit.result}/>
                </div>
            )
        }
        // any error
        return (
            <div>
                <h2>Please enter the subreddit you'd like to read</h2>
                <form onSubmit={this.handleSubmit}>
                    <input id="fetchBox" type="text" 
                        onChange={this.handleChangeSubreddit} 
                        placeholder="Enter subreddit to fetch..."
                        value={this.state.subreddit}/>
                    <input type="submit" value="Reload"/>
                </form>
                <h2>The error below happened when fetching the posts</h2>
                {this.props.subreddit.error.message}
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        subreddit: state.subreddit,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSubreddit: bindActionCreators(actions.fetchSubreddit, dispatch),
        setSubreddit: bindActionCreators(actions.setSubreddit, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

