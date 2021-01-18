class App extends React.Component {
	state = {
		username: "",
		profileImage: "",
		image: "",
		caption: "",
		likes: 0,
		posts: []

	}
	handleChange = (event) => {
     this.setState({
       [event.target.id]: event.target.value,
     })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('/home', this.state)
      .then((response) =>
        this.setState({ posts: response.data, image: '', username: '' ,caption: "",profileImage: "", likes: ""})
      )
  }
	deletePost = (event) => {
		axios.delete('/home/' + event.target.value).then((response) => {
			this.setState({
				posts: response.data,
			})
		})
	}
	updatePost = (event) => {
		event.preventDefault()
		const id = event.target.id
		axios.put('/home/' + id, this.state).then((response) => {
			this.setState({
				posts: response.data,
				caption: '',
				image: '',
			})
		})
	}

	componentDidMount = () => {
		axios.get('/home').then((response) => {
			this.setState({
				posts: response.data,
			})
		})
	}


	render = () => {
		return (
			<div className="main-container">
				<header>
					<div className="logo-div">
						<img className="logo" src="./images/logo.svg" alt="Besties" />
					</div>
					<div className="nav-div">
						<img className="inbox" src="./images/inboxIcon.svg" alt="share"/>
					</div>
				</header>
				{this.state.posts.map((post) => {
					return (
						<div key={post._id} className="post-container">
							<div className="profile-div" >
								<img className="profile-image" src={post.profileImage} alt="photo" />
								<h5>{post.username}</h5>
                  <form id={post._id} onSubmit={this.updatePost}>
                    <label htmlFor="caption">caption</label>
                    <br />
                    <input type="text" id="caption" onChange={this.handleChange} />
                    <label htmlFor="image">Image</label>
                    <br />
                    <input
                      type="text"
                      id="image"
                      onChange={this.handleChange}
                    />
                    <br />
                    <input type="submit" value="Update Post" />
                  </form>
									<div className="editButtton">
									<img className="edit" src="./images/editIcon.svg" />
									</div>
							</div>
							<div className="posted-image">
									<img className="image" src={post.image} alt={post.username} />
							</div>
							<div className="like-bar">
								<div className="left-side-icons">
									<div className="likeButton">
									<img src="./images/likeIcon.svg" />
									</div>
									<div className="commentButton">
									<img src="./images/commentIcon.svg" />
									</div>
									<div className="sendButton">
									<img src="./images/sendIcon.svg" />
									</div>
								</div>
								<button className="deleteButton" value={post._id} onClick={this.deletePost}>
								<img src="./images/deleteIcon.svg" />
								<p className="delete">Delete</p>
								</button>
							</div>
							<p className="caption">{post.username} {post.caption}</p>
						</div>
					)
				})}
				<footer>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="caption">Caption</label>
						<input type="text" id="caption" onChange={this.handleChange} value={this.state.caption}/>
						<br />
						<label htmlFor="image">Image</label>
						<input type="text" id="image" onChange={this.handleChange} value={this.state.image}/>
						<br />
						<label htmlFor="profileImage">profileImage</label>
						<input type="text" id="profileImage" onChange={this.handleChange} value={this.state.profileImage}/>
						<br />
						<label htmlFor="username">Username</label>
						<input type="text" id="username" onChange={this.handleChange} value={this.state.username}/>
						<br />
						<input type="submit" value="Post" />

					</form>
					<div className="footer-div">
					<div className="homeButton">
					<img src="./images/home.svg" />
					</div>
					<div className="createButton">
					<img src="./images/create post.svg" />
					</div>
					</div>
				</footer>
			</div>
		)
	}
}

ReactDOM.render(<App></App>, document.querySelector("main"))
