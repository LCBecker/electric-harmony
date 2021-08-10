import { useEffect, useState } from 'react';

import AnimatedArrow from './AnimatedArrow';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  column: {
    width: '33%',
    height: '100vh',
    backgroundImage: 'linear-gradient(140deg, #EADEDB, #BC70A4, #BFD641)'
  },
  goal: {
    position: 'fixed',
    width: '33%',
    height: '5%',
    bottom: '10vh',
    background: 'rgba(255, 255, 255, 0.5)'
  }
});

const GamePlayColumn = () => {
  const classes = useStyles();
  const [timer, setTimer] = useState(0);
  const [noteColumns, setNoteColumns] = useState({ up: [], down: [], left: [], right: [] });

  let metronome;

  useEffect(() => {
    getNotes();
  }, [timer])


  const simpleSong = ["up", "down", "left", "right"];
  setTimeout(() => {
    if (timer < simpleSong.length - 1) {
      setTimer(timer + 1);
    } else {
      clearTimeout();
    }
  }, 2000);

  const getNotes = () => {
    let columns = Object.assign({}, noteColumns);
    const note = simpleSong[timer];
    // for (let i = 0; i < timer; i++) {
    //   const note = simpleSong[i]
    columns[note].push(<Grid key={`${note}_${timer}`}><AnimatedArrow direction={note} /></Grid>);
    // }
    setNoteColumns(columns);
  }


  //const notes = simpleSong.map((note, index) => );

  return (
    <Grid container item direction="row" className={classes.column}>
      <Grid item xs={3}>{noteColumns.up}</Grid>
      <Grid item xs={3}>{noteColumns.down}</Grid>
      <Grid item xs={3}>{noteColumns.left}</Grid>
      <Grid item xs={3}>{noteColumns.right}</Grid>
      {/* {notes} */}
      <div className={classes.goal} />
    </Grid>
  )
}

export default GamePlayColumn;

