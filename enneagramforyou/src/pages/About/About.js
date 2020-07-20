import React from "react";
import Header from "../../components/Header/Header"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function About() {

     // create custom css styling using makeStyles
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.primary,
            marginTop: theme.spacing(4)
        },
        paragraph: {
            padding: theme.spacing(2),
            fontSize: 16,
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(1),
                fontSize: 12,
            },
        },
        caption: {
            fontSize: 10,
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(1),
                fontSize: 8,
            },
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header h1="About Enneagram" />
            <Grid container >
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.paragraph}>
                            What is the Enneagram?
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            The word 'Enneagram' comes from the Greek words ennea (nine) and gram (what is written or drawn). It refers to the nine different Enneagram styles, identified as number 1-9. Each number represents a worldview and archetype that resonates with our core motivations. This impacts personality as well as thinking, feeling and actions. For example, is your behavior driven by the need to be in control but it's driving the people in your life away? Do you subconsciously seek to maintain an image you think would appeal to people but you feel empty no matter how seemingly successful you are to others? Are you mainly driven by fear in your approach to life but you know deep inside it is limiting? Understanding our Enneagram type and how it colors our perception can help us broaden our perspective and approach situations more effectively.
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            Oft times, the same outward behavior by two different individuals may be driven by different motivations - working with Enneagram empowers us to take responsibility for our own behavior and growth, from a greater understanding of why we act and react the way we do. It helps us in the hardest part of our consciousness work by enabling us to realise, own and accept our strengths and weaknesses.
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            While the Enneagram is a useful guide on our journey towards self-development, relationship building, conflict resolution and the improvement of team dynamics, it is not aimed at "boxing", limiting or categorising any person. As individuals, we are more complex, unique, and distinct than what our Enneagram style reflects. Through Enneagram work, we can all become a little better with higher self-awareness and more empathy for others.
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            Get started <a href="/enneagram">here</a> by finding out more about the nine Enneagram Types.
                        </Typography>
                        <Typography variant="caption" className={classes.caption}>
                            Information source: <a href="https://www.integrative9.com/" target="blank" rel="noopener noreferrer">Integrative9 Enneagram Solutions</a>.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    );
}

export default About;
