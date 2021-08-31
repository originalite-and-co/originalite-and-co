import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import ReactMapGL, { Marker } from 'react-map-gl';
import icon from './299087_marker_map_icon.svg';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './Styles';

StaticPage.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

function StaticPage({ title, htmlContent }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  const token =
    'pk.eyJ1IjoiYW50b25tb2xjaGFub3YiLCJhIjoiY2t0MDd5M3ozMnRrdTMxcG56YzV6NXljMCJ9.3ik1POQ7boTGYfhyQv9tHw';
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    if (title === 'Contact') {
      setIsContactPage(true);
    }
  }, []);

  const latitude = 50.43640886690054;
  const longitude = 30.547306363409636;

  const [viewport, setViewport] = useState({
    latitude: 50.43640886690054,
    longitude: 30.547306363409636,
    width: '100vw',
    height: '50vh',
    zoom: 10
  });

  document.title = title;
  const html = parse(htmlContent);
  let page;
  isContactPage
    ? (page = (
        <Box className={classes.wrapper}>
          {html}
          <Box className={classes.mapWrapper}>
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken={token}
              mapStyle="mapbox://styles/antonmolchanov/ckt0gexez00qb18mk01wp9eeq"
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
            >
              <Marker longitude={longitude} latitude={latitude}>
                <img src={icon} />
              </Marker>
            </ReactMapGL>
          </Box>
        </Box>
      ))
    : (page = <>{html}</>);

  return <>{page}</>;
}

export default StaticPage;
