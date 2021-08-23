/**
 *
 * @param {Object} theme
 * @param {Number | String} size
 * @returns {{verticalCenter: {top: string}, verticalTop: {top: string}, horizontalLeft: {left: string}, verticalBottom: {bottom: string}, loader: {}, root: {position: string}, containerFixed: {top: number, left: number, bottom: number, position: string, right: number}, horizontalCenter: {left: string}, horizontalRight: {right: string}, loaderAbsolute: {position: string}}}
 */
const generateStyles = (theme, size) => {
  let currentSize = size;
  if (typeof size === 'number') {
    currentSize = `${size}px`;
  }

  return {
    root: {
      position: 'relative',
      zIndex: 1000
    },
    loader: {},
    containerFixed: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    loaderAbsolute: {
      position: 'absolute'
    },
    horizontalCenter: {
      left: `calc(50% - ${currentSize})`
    },
    horizontalLeft: {
      left: `calc(25% - ${currentSize})`
    },
    horizontalRight: {
      right: `calc(25% - ${currentSize})`
    },
    verticalCenter: {
      top: `calc(50% - ${currentSize})`
    },
    verticalTop: {
      top: `calc(25% - ${currentSize})`
    },
    verticalBottom: {
      bottom: `calc(25% - ${currentSize})`
    }
  };
};

export default generateStyles;
