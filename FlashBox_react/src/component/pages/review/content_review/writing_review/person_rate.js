import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './person_rate.css'



const labels = {
  1: 'Terrible',
  2: 'Bad',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
};

const useStyles = makeStyles({
  root: {
    width: "300px",
    alignItems: 'center',
    position:"relative",
  },
});

export default function HoverRating() {
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (

    <div className={classes.root} className="rates">
    <div className="labelstyle">
    {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
      <Rating
        size="large"
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    </div>
  );
}
