import React from 'react';
import TimeAgo from 'react-timeago';
import {bindActionCreators} from 'redux';


class SubredditList extends React.Component {
    createListItems() {
        return this.props.posts.map((post) => {
            let url = `http://www.reddit.com${post.data.permalink}`;

            return (
                <li key={post.data.id}>
                    <h3><a href={url}>{post.data.title}</a></h3>
                    <span>Created <TimeAgo date={post.data.created_utc*1000} />
</span>
                </li>
            );
        });
    }
    render(){
        if (this.props.posts.length == 0){
            return (<div></div>);
        }
        return (
            <div>
                <h2>Posts on {this.props.currentSubreddit} Subreddit:</h2>  
                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        )
    }
}

export default SubredditList;

