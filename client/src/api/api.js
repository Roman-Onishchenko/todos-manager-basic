import { fromJS } from 'immutable';

class Api {
  
  // get = (url, params) => {
  //   return new Promise((resolve, reject) => {
  //     let link = '/tasks';

  //     fetch(link).then((response) => {
  //       if (!response.ok) {
  //         this.errorHandler(response, reject);
  //         return;
  //       }
  //       response.json().then((jsonData) => {
  //         resolve(fromJS(jsonData));
  //       });
  //     }, (response) => {
  //       reject(response);
  //     });
  //   });
  // }

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

//   remove(taskId, isDone, category) {
//     return new Promise((resolve, reject) => {
//       const url = '/tasks';
//       let params;
//       if(taskId) {
//         params = {
//           method: "delete",
//           body: JSON.stringify({id: taskId}),
//           headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//           }
//         };
//       } else {
//         params = {
//           method: "delete",
//           body: JSON.stringify({isDone, category}),
//           headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//           }
//         };
//       }
      
//       fetch(url, params).then((response) => {
//         response.json().then((jsonData) => {
//           const statusCode = response.status;
//           if (statusCode === 200 || statusCode === 201) {
//             resolve({
//               data: jsonData,
//             });
//           } else {
//             reject(jsonData);
//           }
//         });
//       }, (response) => {
//         reject(response);
//       });
//     });
//   }
}

export default Api;
