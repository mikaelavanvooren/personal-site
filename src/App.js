import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div className="App">
      	<div className="heading">
        	<p className="main-name">Mikaela Van Vooren</p>
        	<p className="major">Software Engineering Undergraduate</p>
        </div>
      <Grid container justify="center" spacing={2}>
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
