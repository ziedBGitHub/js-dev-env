import experess from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

/* eslint-disable no-console */
const port = 3000;
const app = experess()
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  // Hard coding for simplicity. Pretend this hits real database
  res.json([
    {"id": 1,"firstName": "Rafaela","lastName": "Ruegg","email": "rruegg0@unc.edu"},
    {"id": 2,"firstName": "Palm","lastName": "Shearsby","email": "pshearsby1@hostgator.com"},
    {"id": 3,"firstName": "Isidora","lastName": "Keemar","email": "ikeemar2@apple.com"},
    {"id": 4,"firstName": "Gerek","lastName": "Adam","email": "gadam3@g.co"},
    {"id": 5,"firstName": "Michaeline","lastName": "Duchesne","email": "mduchesne4@businessinsider.com"},
    {"id": 6,"firstName": "Sharline","lastName": "Speedin","email": "sspeedin5@oracle.com"},
    {"id": 7,"firstName": "Jedd","lastName": "Pfaffel","email": "jpfaffel6@statcounter.com"},
    {"id": 8,"firstName": "Darsie","lastName": "Oldroyd","email": "doldroyd7@dot.gov"},
    {"id": 9,"firstName": "Mitzi","lastName": "Cowing","email": "mcowing8@pbs.org"},
    {"id": 10,"firstName": "Ruthy","lastName": "Paget","email": "rpaget9@devhub.com"}
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
