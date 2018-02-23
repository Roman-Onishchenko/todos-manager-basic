import { fromJS } from 'immutable';

// const API_LINK = process.env.API_LINK;

class Api {

  constructor(params = {}) {
    this.url = '';
    this.params = params;

    this.save = ::this.save;
    this.remove = ::this.remove;
    this.getFetchParams = ::this.getFetchParams;
    this.getHeaders = ::this.getHeaders;
    this.getUrlBase = ::this.getUrlBase;
    this.get = ::this.get;
    this.errorHandler = ::this.errorHandler;
  }

  get(url, params) {
    return new Promise((resolve, reject) => {
      let link = this.getUrlBase() + url;

      if (params) {
        const query = serializeParams(params);
        link = `${link}?${query}`;
      }

      fetch(link, this.getFetchParams()).then((response) => {
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

  // errorHandler(response, callback) {
  //   callback(response);
  //   if (response.status === 401) {
  //     global.store.dispatch(logout());
  //   }
  // }

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

  // // istanbul ignore next
  // save(modelUrl, model) {
  //   return new Promise((resolve, reject) => {
  //     const url = `${this.getUrlBase()}${modelUrl}`;

  //     const params = this.getFetchParams();

  //     params.method = 'post';
  //     params.headers['Content-type'] = 'application/json; charset=utf-8';
  //     params.body = JSON.stringify(model);


  //     const id = model.id || '';
  //     if (id !== '') {
  //       // url += `/${id}`;
  //       params.method = 'put';
  //     }

  //     fetch(url, params).then((response) => {
  //       response.json().then((jsonData) => {
  //         const statusCode = response.status;

  //         if (statusCode === 200 || statusCode === 201) {
  //           resolve({
  //             data: jsonData,
  //             meta: {},
  //           });
  //         } else {
  //           reject(jsonData);
  //         }
  //       });
  //     }, (response) => {
  //       reject(response);
  //     });
  //   });
  // }

  // // istanbul ignore next
  // remove(modelUrl, model) {
  //   return new Promise((resolve, reject) => {
  //     const url = `${this.getUrlBase()}${modelUrl}`;
  //     const params = this.getFetchParams();
  //     params.method = 'delete';
  //     params.headers['Content-type'] = 'application/json; charset=utf-8';
  //     if (typeof model !== 'undefined') {
  //       params.body = JSON.stringify(model);
  //     }
  //     fetch(url, params).then((response) => {
  //       response.json().then((jsonData) => {
  //         const statusCode = response.status;

  //         if (statusCode === 200 || statusCode === 201) {
  //           resolve({
  //             data: jsonData,
  //             meta: {},
  //           });
  //         } else {
  //           reject(jsonData);
  //         }
  //       });
  //     }, (response) => {
  //       reject(response);
  //     });
  //   });
  // }
}

export default Api;
