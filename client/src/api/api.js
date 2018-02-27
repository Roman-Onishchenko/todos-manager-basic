import { fromJS } from 'immutable';

// const API_LINK = process.env.API_LINK;

class Api {
  constructor(params = {}) {
    this.params = params;

    // this.save = ::this.save;
    // this.remove = ::this.remove;
    // this.getFetchParams = ::this.getFetchParams;
    // this.getHeaders = ::this.getHeaders;
    // this.getUrlBase = ::this.getUrlBase;
    // this.get = ::this.get;
    // this.errorHandler = ::this.errorHandler;
  }

  get = (url, params) => {
    return new Promise((resolve, reject) => {
      let link = '/tasks';

      // if (params) {
      //   const query = serializeParams(params);
      //   link = `${link}?${query}`;
      // }

      fetch(link).then((response) => {
        if (!response.ok) {
          this.errorHandler(response, reject);
          return;
        }
        response.json().then((jsonData) => {
          resolve(fromJS(jsonData));
        });
      }).catch((response) => this.errorHandler(response, reject));
    });
  }

  errorHandler = (response, callback) => {
    console.log('errorHandler', response);
    // callback(response);
    // if (response.status === 401) {
    //   global.store.dispatch(logout());
    // }
  }

  // getUrlBase() {
  //   return API_LINK + this.url;
  // }

  // getHeaders() {
  //   const headers = {
  //   };

  //   let accessToken = this.params.accessToken;
  //   if (!accessToken) {
  //     accessToken = global.store.getState().get('auth').get('access_token');
  //   }

  //   if (accessToken) {
  //     headers.Authorization = `Bearer ${accessToken}`;
  //   }

  //   return headers;
  // }

  // getFetchParams() {
  //   return {
  //     headers: this.getHeaders(),
  //     mode: 'cors',
  //   };
  // }

  save(taskId, task) {
    return new Promise((resolve, reject) => {
      let url = '/tasks';

      const params = {
        method: "post",
        body: JSON.stringify(task),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      };
      // params.method = 'post';
      // params.headers['Content-type'] = 'application/json';
      // params.body = JSON.stringify(task);

      const id = taskId || '';
      if (id !== '') {
        // url += `/${id}`;
        params.method = "put";
      }

      fetch(url, params).then((response) => {
        response.json().then((jsonData) => {
          const statusCode = response.status;

          if (statusCode === 200 || statusCode === 201) {
            resolve({
              data: jsonData,
              meta: {},
            });
          } else {
            reject(jsonData);
          }
        });
      }, (response) => {
        reject(response);
      });
    });
  }

  remove(taskId) {

    return new Promise((resolve, reject) => {
      const url = '/tasks';
      const params = {
        method: "delete",
        body: JSON.stringify({id: taskId}),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      };
      fetch(url, params).then((response) => {
        response.json().then((jsonData) => {
          const statusCode = response.status;
          if (statusCode === 200 || statusCode === 201) {
            resolve({
              data: jsonData,
              meta: {},
            });
          } else {
            reject(jsonData);
          }
        });
      }, (response) => {
        reject(response);
      });
    });
  }
}

export default Api;
