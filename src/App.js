import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      	
      		<Container id={"imgContainer"}>
      			<Row >
      				<Col>
  							<Image src="PersonalPhoto.jpeg" id={"personalPhoto"} fluid/>
  						</Col>
  						<Col lg={1}></Col>
  						<Col>
  							<div className="heading">
        					<p className="main-name">Mikaela</p>
        					<p className="main-name">Van Vooren</p>
        					<p className="major">Software Engineering Undergraduate</p>
        				</div>
  						</Col>
  					</Row>
  				</Container>
  				

      <Grid justify="center" spacing={2}>
        	<Grid item xs={3}>
        		<Paper>
  						<div>Test</div>
  					</Paper>
  				</Grid>
  				<Grid item xs={3}>
        		<Paper>
  						<div>Test</div>
  					</Paper>
  				</Grid>
  				<Grid item xs={3}>
        		<Paper>
  						<div>Test</div>
  					</Paper>
  				</Grid>
				</Grid>
    </div>
  );
}

export default App;
