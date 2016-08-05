import axios from "axios";

export function fetchData(subreddit, filter, search, sort_by)
{   
    // the case where both subreddit and search are not given is handled by the function calling this
    let link = "http://www.reddit.com/";
    console.log(subreddit, filter, search, sort_by);
    if (subreddit == ""){
        link += `search.json?q=${search}&restrict_sr=on&sort=${sort_by}&t=all`;
    } else {
        if (search == ""){
            link += `r/${subreddit}/${filter}.json&sort=${filter}`;
        } else {
            link += `r/${subreddit}/search.json?q=${search}&restrict_sr=on&sort=${sort_by}&t=all`;            
        }
    }
    console.log(link);
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