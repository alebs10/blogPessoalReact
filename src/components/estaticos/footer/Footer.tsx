import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className="bg">
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className="font1">Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/alebs10" target="_blank">
                            <GitHubIcon className="redes" />
                        </a>
                        <a href="https://www.instagram.com/alexandrebs10/" target="_blank">
                            <InstagramIcon className="redes" />
                        </a>
                        <a href="https://www.linkedin.com/in/alexandrebsilva/" target="_blank">
                            <LinkedInIcon className="redes" />
                        </a>
                    </Box>
                </Box>
                <Box className="pos-background">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className="font1" >© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brasil.generation.org" className="text-decorator-none">
                            <Typography variant="subtitle2" gutterBottom className="font1 " align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;