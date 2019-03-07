import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import dotenv from 'dotenv';
import GlobalStyle from './styles/index';

dotenv.config();

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.290869,
      longitude: -42.535898,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  // eslint-disable-next-line class-methods-use-this
  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    // eslint-disable-next-line no-alert
    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  }

  render() {
    const { viewport } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoibW1jb2RpbmciLCJhIjoiY2pzeXlheGV1MDAxYTN5bGUybjdnc3F0cyJ9.1YhtjrA5gSzNeu18rKXbgA"
          // eslint-disable-next-line no-shadow
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={-22.290869}
            longitude={-42.535898}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
              alt="User"
            />
          </Marker>
        </MapGL>
      </Fragment>
    );
  }
}
