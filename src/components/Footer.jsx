import React from 'react';
import {Grid, Box} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from './FooterStyles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="footer">
            <Grid container >
                <Grid item xs={12} sm={12}>
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Box> <a href="https://github.com/enes9103" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <GitHubIcon className={classes.icon} /> </a> </Box>
                        <Box> <a href="https://www.linkedin.com/in/enesunlu/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <LinkedInIcon className={classes.icon} /> </a> </Box>
                        <Box> <a href="https://www.instagram.com/enesunlu0303/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <InstagramIcon className={classes.icon} /> </a></Box>
                        <Box> <a href="https://twitter.com/Enes9103" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <TwitterIcon className={classes.icon}/> </a> </Box>
                    </Box>
                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>

            <Grid container justify="center">
                <Grid item xs={12}>
                    <p className={classes.footer__copyRight}>Developed by Enes ÜNLÜ <small>Copyright © 2022</small> </p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
