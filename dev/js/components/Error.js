import React from 'react';

var Error = React.createClass({
    render(){
        console.log(this.props.error);
        if (this.props.error != null){
            return(
                <div>
                    <p>The following error occured:</p>
                    <strong>{this.props.error.message}</strong>
                </div>   
            );
        }
        return <div></div>;
    }
})

export default Error;

