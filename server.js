const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    // Display single work items on /work/:id
    server.get('/work/:id', (req, res) => {
      const actualPage = '/single';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    /* Redirect to root if someone tries to access work directory, since this
     * does not exist.
     */
    server.get('/work/', (req, res) => {
      res.redirect('/');
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // Listen on localhost 3000
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('🚀  Ready on http://localhost:3000/');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
