import React, {useEffect} from 'react';
import {Box, Grid, Typography, Container} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {footerLinksOperations, footerLinksSelectors} from "../../../redux/features/footerLinks/index.js"
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

        const checkTypeLink = url => url.includes('https') || url.includes('http')

        const footerContent = links.map(item => {
            return (
                <Grid xs={12} sm={4} item key={item._id}>
                    <Box textAlign="left" paddingTop={1.5} paddingBottom={2}>
                        <Typography variant="h6" component="h6"
                                    className={FooterStyles.title}>{item.title}</Typography>
                    </Box>
                    {item.links.map(item => {
                        return (
                            <Box textAlign="left" pb="12px" key={item._id}>
                                {checkTypeLink(item.url) ?
                                    <a href={item.url} className={FooterStyles.link}
                                       target="_blank">{item.description}</a> :
                                    <Link to={item.url} className={FooterStyles.link}>{item.description}</Link>}
                            </Box>
                        )
                    })}
                </Grid>
            )
        })

        return (
            <Box component="footer" className={FooterStyles.footer} data-testid="footer">
                <Container>
                    <Grid container>
                        {footerContent}
                    </Grid>
                </Container>
            </Box>
        )
    }
;

export default Footer;