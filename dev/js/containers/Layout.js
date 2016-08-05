import React from "react";
import SubredditList from '../components/SubredditList';
import {connect} from 'react-redux'
import * as actions from '../actions/index';
import { bindActionCreators } from 'redux'
import Form from "../components/Form";
import Error from "../components/Error";

var Layout = React.createClass({

    render(){
        return (
            <div>
                <Form />
                <SubredditList currentSubreddit={this.props.subreddit.currentSubreddit} 
                    posts={this.props.subreddit.result}/>
                <Error error={this.props.subreddit.error}/>
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

