import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

function TypeButton(props) {

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(2),
        height: 48,
        fontSize: 14,
        [theme.breakpoints.down('md')]: {
          height: 28,
          fontSize: 8,
          margin: theme.spacing(1),
      },
      [theme.breakpoints.only('xs')]: {
        height: 25,
        fontSize: 8,
        margin: theme.spacing(1,0,0,0),
    },
      },
      buttonDesign1: {
        background: "#fb8c00"
      },
      buttonDesign2: {
        background: "#fdd835"
      },
      buttonDesign3: {
        background: "#c6ff00"
      },
      buttonDesign4: {
        background: "#4caf50"
      },
      buttonDesign5: {
        background: "#3f51b5"
      },
      buttonDesign6: {
        background: "#9c27b0"
      },
      buttonDesign7: {
        background: "#ff4081"
      },
      buttonDesign8: {
        background: "#c62828"
      },
      buttonDesign9: {
        background: "#795548"
      }
    }),
  );

  const classes = useStyles();

  const buttonNumber = props.type;

  if (buttonNumber === "Type 1") {
    return (
      <Button className={classNames(classes.buttonDesign1, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } if (buttonNumber === "Type 2") {
    return (
      <Button className={classNames(classes.buttonDesign2, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } if (buttonNumber === "Type 3") {
    return (
      <Button className={classNames(classes.buttonDesign3, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } if (buttonNumber === "Type 4") {
    return (
      <Button className={classNames(classes.buttonDesign4, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } if (buttonNumber === "Type 5") {
    return (
      <Button className={classNames(classes.buttonDesign5, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } if (buttonNumber === "Type 6") {
    return (
      <Button className={classNames(classes.buttonDesign6, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } if (buttonNumber === "Type 7") {
    return (
      <Button className={classNames(classes.buttonDesign7, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } if (buttonNumber === "Type 8") {
    return (
      <Button className={classNames(classes.buttonDesign8, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } if (buttonNumber === "Type 9") {
    return (
      <Button className={classNames(classes.buttonDesign9, classes.root)} variant="contained">
        {buttonNumber}
      </Button>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default TypeButton;