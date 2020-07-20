import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Header(props) {

    // create custom css styling using makeStyles
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        main: {
            background: theme.palette.secondary.light,
            color: theme.palette.primary.main,
            marginTop: theme.spacing(8),
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(7),
            },
        },
        header: {
            flexGrow: 1,
            fontFamily: ['BenchNine', 'sans-serif'],
            fontSize: 40,
            padding: theme.spacing(2),
            textAlign: 'center',
            [theme.breakpoints.only('md')]: {
                fontSize: 30,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 20,
            },
        },
    }));


    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Grid container >
                <Grid item xs={12} >
                    <AppBar position="static" className={classes.main}>
                        <Typography className={classes.header}>
                            {props.h1}
                        </Typography>
                    </AppBar>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;