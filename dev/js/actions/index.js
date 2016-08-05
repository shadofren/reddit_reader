import axios from "axios";

export function fetchSubreddit(subreddit)
{   

    let link = `http://www.reddit.com/r/${subreddit}/hot.json?sort=hot`;
    return function(dispatch){
        dispatch({type: "FETCH_SUBREDDIT_START"})
        //do async
        axios.get(link)
            .then((response) => {
                console.log(response);
                dispatch({type: "RECEIVE_SUBREDDIT", payload: response.data.data.children})
            })
            .catch((err) => {
                dispatch({type: "FETCH_SUBREDDIT_ERROR", payload: err})
            })
    }
}

export function setSubreddit(subreddit){
    return function(dispatch){
        dispatch({type: "SET_SUBREDDIT", payload: subreddit});
    }
}