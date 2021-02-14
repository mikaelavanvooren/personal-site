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
  							<Image src="PersonalPhoto.jpeg" id={"personalPhoto"} fluid/>
  						</Col>
  						<Col>
  							<Card square id={"textBox"}>
  								<div id={"aboutText"}>Hi, my name is Mikaela Van Vooren. <br/> <br/>
  								I believe software engineers create specialized tools to solve problems. I consider myself primarily a problem solver who uses software engineering as one of the many tools in my arsenal to get the job done. <br/><br/><br/>
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
  							</Card>
  						</Col>
  					</Row>
  				</Container>
  				<Container fluid id={"infoContainer"}>

			      <Grid container justify="center" spacing={4}>
			        	<Grid item xs={3}>
			        		<Paper>
			  						<div>Some of the problems I'd love to work on include supporting those with <b>mental heath struggles</b>, finding new ways to further <b>environmental sustainability</b> and developing new techniques to get kids excited about <b>STEAM subjects in school</b>.</div>
			  					</Paper>
			  				</Grid>
			  				<Grid item xs={3}>
			        		<Paper>
			  						<div>Technologies I've worked with include:</div>
			  					</Paper>
			  				</Grid>
			  				<Grid item xs={3}>
			        		<Paper>
			  						<div>Test</div>
			  					</Paper>
			  				</Grid>
							</Grid>
						</Container>
    </div>
  );
}

export default App;
