import {
  generateFetchException,
  generateHeaders,
  generateResponseException,
} from './index';

const SLIDER_PATH = '/api/slider';

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const addSlide = async (data) => {
  try {
    const response = await fetch(SLIDER_PATH, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw generateResponseException('add slide', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('adding slide', error);
  }
};

const updateSlide = async (data, id) => {
  try {
    const response = await fetch(`${SLIDER_PATH}/${id}`, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw generateResponseException('update slide', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('updating slide', error);
  }
};

const getSlides = async () => {
  try {
    const response = await fetch(SLIDER_PATH, {
      method: 'GET',
      headers: generateHeaders(),
    });

    if (!response.ok) {
      throw generateResponseException('get slides', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('getting slides', error);
  }
};

const deleteSlide = async (id) => {
  try {
    const response = await fetch(`${SLIDER_PATH}/${id}`, {
      method: 'DELETE',
      headers: generateHeaders(),
    });

    if (!response.ok) {
      throw generateResponseException('delete slide', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('deleting slide', error);
  }
};

const catalog = {
  addSlide,
  deleteSlide,
  getSlides,
  updateSlide,
};

export default catalog;
