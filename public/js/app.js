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


	render = () => {
		return (
			<div className="main-container">
				<header>
					<div className="logo-div">
						<img src="" alt="Besties" />
					</div>
					<div className="nav-div">
						<img src="" alt="share"/>
					</div>
				</header>
				{this.state.posts.map((post) => {
					return (
						<div className="post-container">
							<div className="profile-div" >
									<img src="" alt="profile image"/>
									<h5>Username</h5>
									<img src={post.profileImage} alt={post.name} />
							</div>
							<div className="posted-image">
									<img src={post.image} alt={post.username} />
							</div>
							<div className="like-bar">
								<button>
								Like
								</button>
								<button>
								comment
								</button>
								<button>
								share
								</button>
								<button>
								Delete
							</button>
							</div>
						</div>
					)
				})}

				<footer>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="caption">Caption</label>
						<input type="text" id="caption" onChange={this.handleChange}/>
						<br />
						<label htmlFor="image">Image</label>
						<input type="text" id="image" onChange={this.handleChange}/>
						<br />
						<label htmlFor="profileImage">profileImage</label>
						<input type="text" id="profileImage" onChange={this.handleChange}/>
						<br />
						<label htmlFor="username">Username</label>
						<input type="text" id="username" onChange={this.handleChange}/>
						<br />
						<input type="submit" value="Post" />

					</form>
					<div className="footer-div">
					<button>
					Home
					</button>
					<button>
					Create Post
					</button>
					</div>
				</footer>
			</div>
		)
	}
}

ReactDOM.render(<App></App>, document.querySelector("main"))
