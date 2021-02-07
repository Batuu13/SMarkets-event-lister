function timeout(ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("Http Request Timeout"));
    }, ms);
    promise.then(resolve, reject);
  });
}

export function callApi(url, method, body) {
  return new Promise(function (resolve, reject) {
    const TIMEOUT = 10000;
    let status = 0;
    return timeout(
      TIMEOUT,
      fetch(url, {
        headers: {
          "content-type": "application/json",
        },
        method,
        body: JSON.stringify(body),
      })
    )
      .then(function (response) {
        status = response.status;
        return response.json();
      })
      .then(function (response) {
        if (status < 400) {
          resolve(response);
        } else {
          reject(response);
        }
      });
  });
}
