// import "./index.css";
import React, { useState, useContext, useEffect } from 'react';
import Header from "../../components/Header/Header"
import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TypeButton from '../../components/Button/Button'
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Modal, requirePropFactory } from '@material-ui/core';


function Enneagram() {

    // create custom css styling using makeStyles
    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            gridContainer: {
                marginTop: theme.spacing(4),
                marginRight: theme.spacing(2),
                [theme.breakpoints.down('md')]: {
                    marginTop: theme.spacing(1),
                    marginRight: theme.spacing(0)
                },
                // [theme.breakpoints.down('sm')]: {
                //     marginTop: theme.spacing(1),
                // },
            },
            media: {
                padding: theme.spacing(2),
                height: 800,
                [theme.breakpoints.only('md')]: {
                    padding: theme.spacing(0),
                    height: 450,
                    width: "auto",
                    marginLeft: theme.spacing(-20)
                },
                [theme.breakpoints.only('sm')]: {
                    padding: theme.spacing(0),
                    height: 400,
                    width: "auto",
                    marginLeft: theme.spacing(-13)
                },
                [theme.breakpoints.only('xs')]: {
                    padding: theme.spacing(0),
                    height: 250,
                    width: "auto",
                    marginLeft: theme.spacing(-10)
                },
            },
            title: {
                flexGrow: 1,
                fontFamily: ['BenchNine', 'sans-serif'],
                fontSize: 24,
                textAlign: 'right',
                [theme.breakpoints.only('md')]: {
                    fontSize: 16,
                    width: 450
                },
                [theme.breakpoints.only('sm')]: {
                    fontSize: 16,
                    width: 450
                },
                [theme.breakpoints.only('xs')]: {
                    fontSize: 16,
                    width: 250
                },
            },
            buttonSectionH: {
                padding: theme.spacing(1),
                marginTop: theme.spacing(4),
                marginLeft: theme.spacing(20),
                [theme.breakpoints.only('md')]: {
                    marginTop: theme.spacing(1),
                    marginLeft: theme.spacing(18),
                },
                [theme.breakpoints.only('sm')]: {
                    marginTop: theme.spacing(1),
                    marginLeft: theme.spacing(18),
                },
                [theme.breakpoints.only('xs')]: {
                    marginTop: theme.spacing(1),
                    marginLeft: theme.spacing(0),
                },
            },
            buttonSectionV: {
                padding: theme.spacing(3),
                marginTop: theme.spacing(24),
                marginLeft: theme.spacing(4),
                [theme.breakpoints.only('md')]: {
                    marginTop: theme.spacing(10),
                    marginLeft: theme.spacing(10),
                },
                [theme.breakpoints.only('sm')]: {
                    marginTop: theme.spacing(10),
                    marginLeft: theme.spacing(-1),
                },
                [theme.breakpoints.only('xs')]: {
                    marginTop: theme.spacing(1),
                    marginLeft: theme.spacing(1),
                },
            },
            paragraph: {
                padding: theme.spacing(2),
                fontSize: 16,
                [theme.breakpoints.down('sm')]: {
                    padding: theme.spacing(1),
                    fontSize: 10,
                },
            },
        }));


    const classes = useStyles();

    return (
        <div className={classes.root}>

            {/* header */}
            <Header h1="Enneagram Types" />

            {/* top button list */}
            <Grid container >
                <Grid item xs={1} sm={1} md={2} lg={3} />
                <Grid item xs={10} sm={10} md={8} lg={6} >
                    <ButtonGroup className={classes.buttonSectionH} variant="text" aria-label="contained button group">
                        <Typography variant="body2" className={classes.paragraph}>
                            Action Center
                        </Typography>
                        <TypeButton type="Type 8"></TypeButton>
                        <TypeButton type="Type 9"></TypeButton>
                        <TypeButton type="Type 1"></TypeButton>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={3} />
            </Grid>

            <Grid container >
                {/* left button list */}
                <Grid item xs={12} sm={2} md={3} lg={2}>
                    <ButtonGroup
                        className={classes.buttonSectionV}
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text">
                        <Typography variant="body2" className={classes.paragraph}>
                            Thinking Center
                        </Typography>
                        <TypeButton type="Type 7"></TypeButton>
                        <TypeButton type="Type 6"></TypeButton>
                        <TypeButton type="Type 5"></TypeButton>
                    </ButtonGroup>
                </Grid>

                {/* enneagram image */}
                <Grid item xs={12} sm={8} md={6} lg={8}>
                    <Card className={classes.gridContainer}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={require('../../utils/egimage.png')}
                                title="Enneagram Types"
                                component="img"
                                alt="Enneagram Types"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                    Enneagram For You
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* right button list */}
                <Grid item xs={12} sm={2} md={3} lg={2}>
                    <ButtonGroup
                        className={classes.buttonSectionV}
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text">
                        <Typography variant="body2" className={classes.paragraph}>
                            Feeling Center
                        </Typography>
                        <TypeButton type="Type 2"></TypeButton>
                        <TypeButton type="Type 3"></TypeButton>
                        <TypeButton type="Type 4"></TypeButton>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    )
}

export default Enneagram;