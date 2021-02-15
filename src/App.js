import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function App() {
  return (
    <div className="App">
  		<Container fluid id={"imgContainer"}>
  			<Row >
  				<Col>
						<Image src="/PersonalPhoto.jpeg" id={"personalPhoto"} fluid/>
					</Col>
					<Col>
						<div id={"aboutText"}><h2><b>Hi, my name is Mikaela Van Vooren.</b></h2> <br/>
							I believe software engineers create specialized tools to solve problems. I consider myself primarily a problem solver who uses software engineering as one of the many tools in my arsenal to get the job done. <br/> 
						</div>
						<IconButton aria-label="linkedin" href="http://linkedin.com/in/mikaelavanvooren/">
							<LinkedInIcon />
						</IconButton>
						<IconButton aria-label="github" href="http://github.com/mikaelavanvooren">
							<GitHubIcon />
						</IconButton> 
						<IconButton aria-label="email" href={"mailto:mikaelavanvooren@gmail.com"}>
							<MailOutlineIcon />
						</IconButton> 
					</Col>
				</Row>
			</Container>
			<Container fluid id={"infoContainer"}>
			  <div id={"aboutMe"}>problems</div>
			  	<Container className="aboutText">
					  <div><br/><br/><br/>Some of the problems I'm most passionate about are finding ways to support those with <b>mental heath struggles</b>, working on new technology to further <b>environmental sustainability</b> and developing new techniques to get kids excited about <b>STEAM subjects in school</b>. <br/><br/>I'm excited about where we will lead the future with what we are doing now to drive it forward!
					  <br/><br/><br/>
			  		</div>
			  	</Container>
				</Container>
				<Container fluid id={"projectsContainer"}>
				  <div id={"projects"}>technology</div>
				  	<Container className="aboutText">
						  <div>At my time in school I've been exposed to many different technologies from Assembly to React.js. Each has had their pros and their cons but there's always been something about backend development and figuring out how to orginize data in more efficent ways that I find appealing. Embedded systems is also fascinating to me because I love seeing how we get from literal 0s and 1s to everything that we consider technology now.

						  <br/><br/>Languages Used: Java, React, Node, MIPS, Javascript and HTML/CSS
				  		</div>
			  	</Container>
			  </Container>

				<Container fluid id={"footer"}>
					<div><br/>Feel free to reach out!<br/>
					</div>
					<IconButton aria-label="linkedin" href="http://linkedin.com/in/mikaelavanvooren/">
						<LinkedInIcon />
					</IconButton>
					<IconButton aria-label="github" href="http://github.com/mikaelavanvooren">
						<GitHubIcon />
					</IconButton> 
					<IconButton aria-label="email" href={"mailto:mikaelavanvooren@gmail.com"}>
						<MailOutlineIcon />
					</IconButton> 
				</Container>
    	</div>
  );
}

export default App;
