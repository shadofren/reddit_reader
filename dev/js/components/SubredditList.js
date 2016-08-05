import React from 'react';
import {bindActionCreators} from 'redux';


class SubredditList extends React.Component {
    createListItems() {
        return this.props.posts.map((post) => {
            return (
                <li key={post.data.id}>
                    <h3><a href={post.data.url}>{post.data.title}</a></h3>
                    <h4>{post.data.self_text}</h4>
                </li>
            );
        });
    }
    render(){
        if (this.props.posts.length == 0){
            return (<div><p>Fetching posts...</p></div>);
        }
        return (
            <div>
                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        )
    }
}

export default SubredditList;

