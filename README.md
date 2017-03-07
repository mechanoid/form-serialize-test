a "modern" (2017) approach of serializing a form asynchronously to the server.

In `client/index.js` you'll find the important bits of this repository, while `./server.js` provides
a little backend to send the forms (contained in `client/index.html`) back to.

To start the server just run `npm start` to get the server up and running. You may provide a `PORT` env variable,
or a `config.port` key inside of the package.json to change the server default port.

Alternatively you may just visit the linked web-page in the project.

By visiting the service you'll find some outputs to the console, which describe what is actually going on.

1. parsing the form
2. sending the form data to the server
  - as form/url-encoded GET request
  - as form/multipart POST request
3. parsing and logging the results (which is the form data as json)
