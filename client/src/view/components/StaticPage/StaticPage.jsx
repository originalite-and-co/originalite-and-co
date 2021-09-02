import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import icon from './299087_marker_map_icon.svg';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './Styles';
import { getOffices } from './offices';
import useWindowSize from '../../hooks/useWindowSize';

import utils from './utils';
import constants from '../../constants';

StaticPage.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

function StaticPage({ title, htmlContent }) {
  document.title = title;
  const { width } = useWindowSize();
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  const officesArray = getOffices();
  const { token } = utils;

  const [selectedOffice, setSelectedOffice] = useState(null);
  const [isContactPage, setIsContactPage] = useState(false);
  const [isTablet, setIsTablet] = useState(
    width >= constants.WINDOW_TABLET_SIZE
  );

  const [viewport, setViewport] = useState({
    latitude: 50.43640886690054,
    longitude: 30.547306363409636,
    zoom: 10
  });

  useEffect(() => {
    setIsTablet(width >= constants.WINDOW_TABLET_SIZE);
  }, [width]);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedOffice(null);
      }
    };
    window.addEventListener('keydown', listener);
  }, []);

  useEffect(() => {
    if (title === 'Contact') {
      setIsContactPage(true);
    }
  }, []);
  const offices = officesArray.map((office) => (
    <Marker
      longitude={office.longitude}
      latitude={office.latitude}
      key={office.longitude}
    >
      <button
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        onClick={(event) => {
          event.preventDefault();
          setSelectedOffice(office);
        }}
      >
        <img src={icon} />
      </button>
    </Marker>
  ));

  console.log(isTablet);
  const html = parse(htmlContent);
  let page;
  isContactPage
    ? (page = (
        <Box style={{ position: 'relative' }}>
          {html}
          <Box className={classes.mapWrapper}>
            <ReactMapGL
              {...viewport}
              width={isTablet ? '50vw' : '100vw'}
              height="30vh"
              mapboxApiAccessToken={token}
              mapStyle="mapbox://styles/antonmolchanov/ckt0gexez00qb18mk01wp9eeq"
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
            >
              {offices}
              {selectedOffice && (
                <Popup
                  longitude={selectedOffice.longitude}
                  latitude={selectedOffice.latitude}
                  onClose={() => {
                    setSelectedOffice(null);
                  }}
                >
                  <div>
                    <Typography component="p" color="textSecondary">
                      {selectedOffice.address}
                    </Typography>
                    <Typography component="p" color="textSecondary">
                      {selectedOffice.mobile}
                    </Typography>
                  </div>
                </Popup>
              )}
            </ReactMapGL>
          </Box>
        </Box>
      ))
    : (page = <>{html}</>);

  return <>{page}</>;
}

export default StaticPage;
