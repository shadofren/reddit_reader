import React from "react";
import SubredditList from '../components/SubredditList';
import {connect} from 'react-redux'
import * as actions from '../actions/index';
import { bindActionCreators } from 'redux'
import Form from "../components/Form";

var Layout = React.createClass({

    render(){
        // starting state
        if (this.props.subreddit.currentSubreddit == "" && this.props.subreddit.error == null){
            return (
                <div>
                    <Form />
                </div>
            )
        }
        // success case
        if (this.props.subreddit.fetched){
            return (
                <div>
                    <Form />
                    <h2>Hot Posts on {this.props.subreddit.currentSubreddit} Subreddit</h2>  
                    <SubredditList posts={this.props.subreddit.result}/>
                </div>
            )
        }
        // any error
        return (
            <div>
                <Form  />
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

export default connect(mapStateToProps)(Layout);

