import { fromJS } from 'immutable';

class Api {
  
  get = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url).then((response) => {
        if (!response.ok) {
          this.errorHandler(response, reject);
          return;
        }
        response.json().then((jsonData) => {
          resolve(fromJS(jsonData));
        });
      }, (response) => {
        reject(response);
      });
    });
  }

  save(url, data) {
    return new Promise((resolve, reject) => {
      const params = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      };
      if (data.id) {
        params.method = "put";
      }

      fetch(url, params).then((response) => {
        response.json().then((jsonData) => {
          const statusCode = response.status;

          if (statusCode === 200 || statusCode === 201) {
            resolve({
              data: jsonData,
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

  remove(url, data) {
    return new Promise((resolve, reject) => {
      const params = {
        method: "delete",
        body: JSON.stringify(data),
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
