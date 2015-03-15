var ListItem = React.createClass({
    handleClick: function(event) {
        console.log('an item is clicked', this.props.post)
        this.props.onListItemClicked(this.props.post.data.url,this.props.post.data.title )
    },

    render: function() {
        var post = this.props.post
        return ( 
            <div className="post row" >
                <div className="postTitle twelve columns" onClick={this.handleClick}>
                 <b>TITLE: {post.data.title}</b>                
                </div>
                <div className="postTitle eight columns">
                 <b>AUTHOR: </b> {post.data.author}  <img src={post.data.thumbnail} border="8"/>
                </div>          
		 <div className="postTitle eight columns">
                 <b>UpVotes #: </b> {post.data.ups}
                </div>           
                 <div className="postAuthor eight columns">
                   <b>URL:</b> <a href={post.data.url}>{post.data.url}</a>  
                </div>
		<div className="postAuthor eight columns">
                   <b>__________________________________________________________________________</b> 
                </div>

            </div>
        )
  }
})
