const errorHandler = {}

errorHandler.axiosError = error => {
    if (error.res) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.res.data);
        console.log(error.res.status);
        console.log(error.res.headers);
        // window.location.href = '/error/resp'
    } else if (error.request) {
        /*
        * The request was made but no response was received, `error.request`
        * is an instance of XMLHttpRequest in the browser and an instance
        * of http.ClientRequest in Node.js
        */
       console.log('Error en la req ',error.request);
    //    window.location.href = '/error/connection'
    } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
        // window.location.href = '/error/req'
    }
}

export default errorHandler