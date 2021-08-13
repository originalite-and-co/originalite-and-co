import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Typography} from "@material-ui/core";
import styles from "./Catalog.module.scss"
import Filter from "./Filter/Filter";
import Header from "../../components/Header/Header";

Catalog.propTypes = {};

function Catalog(props) {
    return (
        <>
            <Header/>
            <Box>
                <Filter/>
            </Box>
        </>
        // <Grid
        //     container
        //     component="main"
        // >
        //     <Grid item>

        // </Grid>
        // {/*<Grid*/
        // }
        // {/*    style={{*/
        // }
        // {/*        backgroundColor: "red"*/
        // }
        // {/*    }}*/
        // }
        // {/*    xs={3}*/
        // }
        // {/*    item*/
        // }
        // {/*    component="aside"*/
        // }
        // {/*>*/
        // }
        // {/*    <Box className={styles.filterInner}>*/
        // }
        // {/*        <p style={{*/
        // }
        // {/*            backgroundColor: "blue",*/
        // }
        // {/*            color: "white",*/
        // }
        // {/*        }}>Filter content</p>*/
        // }
        // {/*    </Box>*/
        // }
        // {/*</Grid>*/
        // }
        // {/*<Grid*/
        // }
        // {/*    style={{*/
        // }
        // {/*        backgroundColor: "gold"*/
        // }
        // {/*    }}*/
        // }
        // {/*    xs={12}*/
        // }
        // {/*    component="section"*/
        // }
        // {/*    item*/
        // }
        // {/*>*/
        // }
        // {/*    <Box className={styles.contentInner}>*/
        // }
        // {/*        <Typography component="h2" variant="h5">*/
        // }
        // {/*            Category*/
        // }
        // {/*        </Typography>*/
        // }
        // {/*        <p style={{*/
        // }
        // {/*            backgroundColor: "green",*/
        // }
        // {/*            color: "white",*/
        // }
        // {/*        }}>Product list</p>*/
        // }
        // {/*    </Box>*/
        // }
        // {/*</Grid>*/}
        // </Grid>
    )
        ;
}

export default Catalog;