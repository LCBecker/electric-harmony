import GamePlayColumn from './components/GamePlayColumn';
import { Grid } from '@material-ui/core'

function App() {
  return (

    <Grid container justifyContent='space-between'>
      <Grid>Name, Score, Details goes here</Grid>
      <GamePlayColumn>Arrows appear here</GamePlayColumn>
      <Grid>Empty space maybe??</Grid>
    </Grid>
  );
}

export default App;
