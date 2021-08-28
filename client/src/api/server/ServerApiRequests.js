import isJSON from "../../utils/isJSON";

class ServerApiRequests {
  /**
   * @example
   * const paths = {
   *   create: "/api/customer",
   *   retrieve: "/api/customer",
   *   update: "/api/customer/id",
   *   delete: "/api/customer/id"
   * };
   *
   * const headers = {
   *   "Content-Type": "application/json"
   * };
   *
   * const fetchException = new Error("An error occurred");
   *
   * const customerRequests = new ServerApiRequests(paths, headers, fetchException);
   * const customers = customerRequests.retrieve();
   *
   *
   * @param {Object | String} path - an endpoint or endpoints where the request will be sent.
   * if object is passed, it should has paths for all the requests
   *
   * @param {Object} headers - request headers. It can be both an object or on object with other objects,
   * in case different requests need different headers.
   *
   * @param {Object | Error} fetchException - an error or an object with error that should be thrown in catch block.
   * If it's needed to throw unique error for every response, object keys should match with the requests
   *
   *
   */
  constructor(path, headers, fetchException) {
    this.path = path;
    this.headers = headers;
    this.fetchException = fetchException;
  };

  /**
   *
   * @param {Object} body - data that should be sent
   * @param {String} [path] - request url
   * @param {Object} [headers] - request headers
   * @param {Error} [exception] - exception that will be thrown in catch block
   * @returns {Promise<Object|Array|string|{statusText: string, message: (any|string), status: number}>}
   */
  async create(body, path, exception, headers) {
    const currentPath = path || this.path.create || this.path;
    const currentHeaders = headers || this.headers.create || this.headers;
    const currentException =
      exception || this.fetchException.create || this.fetchException;
    try {
      const response = await fetch(currentPath, {
        method: "POST",
        headers: currentHeaders,
        body: JSON.stringify(body),
      });

      const isResponseJSON = await isJSON(response);

      const data = isResponseJSON
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        const readableData = createReadableData(data);
        throw {
          ...currentException,
          message: readableData,
          status: response.status,
          statusText: response.statusText,
        };
      }

      return data;
    } catch (error) {
      throw error || currentException;
    }
  };

  /**
   * @param {String} [path] - request url
   * @param {Object} [headers] - request headers
   * @param {Error} [exception] - exception that will be thrown in catch block
   * @returns {Promise<Object|Array|string|{statusText: string, message: (any|string), status: number}>}
   */
  async retrieve(path, exception, headers) {
    const currentPath = path || this.path.retrieve || this.path;
    const currentHeaders = headers || this.headers.retrieve || this.headers;
    const currentException =
      exception || this.fetchException.retrieve || this.fetchException;
    try {
      const response = await fetch(currentPath, {
        method: "GET",
        headers: currentHeaders,
      });

      const isResponseJSON = await isJSON(response);
      const data = isResponseJSON
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        const readableData = createReadableData(data);
        throw {
          ...currentException,
          message: readableData,
          status: response.status,
          statusText: response.statusText,
        };
      }

      return data;
    } catch (error) {
      throw error || currentException;
    }
  }

  /**
   * @param {Object} body - data that should be updated
   * @param {String} [path] - request url
   * @param {Object} [headers] - request headers
   * @param {Error} [exception] - exception that will be thrown in catch block
   * @returns {Promise<Object|Array|string|{statusText: string, message: (any|string), status: number}>}
   */
  async update(body, path, exception, headers) {
    const currentPath = path || this.path.update || this.path;
    const currentHeaders = headers || this.headers.update || this.headers;
    const currentException =
      exception || this.fetchException.update || this.fetchException;
    try {
      const response = await fetch(currentPath, {
        method: "PUT",
        headers: currentHeaders,
        body: JSON.stringify(body),
      });

      const isResponseJSON = await isJSON(response);
      const data = isResponseJSON
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        const readableData = createReadableData(data);
        throw {
          ...currentException,
          message: readableData,
          status: response.status,
          statusText: response.statusText,
        };
      }

      return data;
    } catch (error) {
      throw error || currentException;
    }
  }

  /**
   * @param {String} [path] - request url
   * @param {Object} [headers] - request headers
   * @param {Error} [exception] - exception that will be thrown in catch block
   * @returns {Promise<Object|Array|string|{statusText: string, message: (any|string), status: number}>}
   */
  async delete(path, exception, headers) {
    const currentPath = path || this.path.delete || this.path;
    const currentHeaders = headers || this.headers.delete || this.headers;
    const currentException =
      exception || this.fetchException.delete || this.fetchException;
    try {
      const response = await fetch(currentPath, {
        method: "DELETE",
        headers: currentHeaders,
      });

      const isResponseJSON = await isJSON(response);
      const data = isResponseJSON
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        const readableData = createReadableData(data);
        throw {
          ...currentException,
          message: readableData,
          status: response.status,
          statusText: response.statusText,
        };
      }

      return data;
    } catch (error) {
      throw error || currentException;
    }
  }
}

function createReadableData(data) {
  if (typeof data === "object" && data !== null) {
    return Object.values(data).join(".");
  }

  if (Array.isArray(data)) {
    return data.join(".");
  }
  return data;
}

export default ServerApiRequests;
