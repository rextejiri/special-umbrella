class App extends React.Component {
	state = {
		username: "",
		profileImage: "",
		image: "",
		caption: "",
		likes: 0,

	}
	handleChange = (event) => {
     this.setState({
       [event.target.id]: event.target.value,
     })
   }

	 handleSubmit = (event) => {
     event.preventDefault()
     axios.post('/home', this.state).then((response) => console.log(response))
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
				<div className="post-container">
					<div className="profile-div" >
						<img src="" alt="profile image"/>
						<h5>Username</h5>
						<img src="" alt="edit" />
					</div>
					<div className="posted-image">
						<img src="" alt="post" />
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
				<footer>
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
