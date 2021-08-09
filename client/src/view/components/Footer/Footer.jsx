import React, {useEffect} from 'react';
import {Box, Grid, Typography, Container} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {footerLinksOperations} from "../../../redux/features/footerLinks/index.js"
import {footerLinksSelectors} from "../../../redux/features/footerLinks/index.js";
import {Link} from "react-router-dom";
import FooterStyles from './Footer.module.scss'

const Footer = () => {
    const {getData} = footerLinksOperations;
    const {footer} = footerLinksSelectors;
    const dispatch = useDispatch();
    const links = useSelector(footer);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    const footerContent = links.map((item, index) => {
        return (
            <Grid xs={12} sm={4} item key={index}>
                <Box textAlign="left" paddingTop={1.5} paddingBottom={2}>
                    <Typography variant="h6" component="h6"
                                className={FooterStyles.title}>{item.title}</Typography>
                </Box>
                {item.links.map((item, index) => {
                    return (
                        <Box textAlign="left" pb="12px">
                            <Link to={item.url} className={FooterStyles.link} key={index}>{item.description}</Link>
                        </Box>
                    )
                })}
            </Grid>
        )
    })

    return (
        <footer className={FooterStyles.footer} data-testid="footer">
            <Container>
                <Grid container>
                    {footerContent}
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;
