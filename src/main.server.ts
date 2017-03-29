import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from './aot/src/app/app.server-module.ngfactory';
import * as express from 'express';
import * as fs from 'fs';
let templateCache = {};
function ngExpressEngine() {
  return function (filePath, options, callback) {
    if (!templateCache[filePath]) {
      let file = fs.readFileSync(filePath);
      templateCache[filePath] = file.toString();
    }
    renderModuleFactory(AppServerModuleNgFactory, {
      document: fs.readFileSync(filePath).toString(),
      url: options.req.url
    }).then(string => {
      callback(null, string);
    });
  };
}

enableProdMode();

const app = express();
app.engine('html', ngExpressEngine());

app.set('view engine', 'html');
app.set('views', '.');

app.use(express.static('.'));
app.get('/main.server.bundle.js', (req, res) => {
  res.sendFile('main.server.bundle.js');
});
app.get('/', (req, res) => {
  res.render('index', { req });
});

app.get('/page2*', (req, res) => {
  res.render('index', { req });
});
app.get('/main*', (req, res) => {
  res.render('index', { req });
});

app.use(express.static('.'));

app.listen(8000, () => console.log('listening...'));





