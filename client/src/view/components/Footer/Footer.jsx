import React, {useEffect} from 'react';
import {Box, Grid, Typography, Container} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../redux/features/footerLinks/index.js"
import {selectors} from "../../../redux/features/footerLinks/index.js";
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#000",
        minWidth: "320px",
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
    },
    title: {
        fontFamily: "'Josefin Sans', sans-serif",
        fontSize: "18px",
        lineHeight: "1",
        color: "#fff",
        textTransform: "uppercase",
    },
    link: {
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "14px",
        lineHeight: "19px",
        color: "#fff",
        textDecoration: "none",
    }
});

const Footer = () => {
    const dispatch = useDispatch();
    const links = useSelector(selectors.footer);
    const classes = useStyles();

    useEffect(() => {
        dispatch(actions.getDataThunk())
    }, [dispatch])

    const footerContent = links.map((item, index) => {
        return (
            <Grid xs={12} sm={4} item key={index}>
                <Box textAlign="left" paddingTop={1.5} paddingBottom={2}>
                    <Typography variant="h6" component="h6"
                                className={classes.title}>{item.title}</Typography>
                </Box>
                {item.links.map((item, index) => {
                    return (
                        <Box textAlign="left" pb="12px">
                            <Link to={item.url} className={classes.link} key={index}>{item.description}</Link>
                        </Box>
                    )
                })}
            </Grid>
        )
    })

    return (
        <footer className={classes.root} data-testid="footer">
            <Container>
                <Grid container>
                    {footerContent}
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;
