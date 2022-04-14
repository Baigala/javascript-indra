function _getData() {
    return {
      req: async function (url, method) {
        try {
          const response = await fetch(url, {
            method: method ? method : "GET",
          });
          if (!response.ok) {
            switch (response.status) {
              case 404:
                throw new Error("Not Found");
              case 401:
                throw new Error("UnAuthorized");
              default:
                throw new Error("Network Error");
            }
          }
          const data = await response.json();
          return { data, error: null };
        } catch (err) {
          return { error: err.message };
        }
      },
    };
  }
  export const request = _getData();