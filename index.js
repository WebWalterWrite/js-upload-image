import "@babel/polyfill";
import express from 'express'
import bodyParser from 'body-parser'
import imageRoute from './src/Routes/uploadRoute'
import path from 'path';
import exphbs from 'express-handlebars'

const app = express()

// static files rendering
const chemin = path.join(__dirname, '/src/public');
app.use('/public', express.static(chemin));

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// templates config
app.engine('.hbs', exphbs({
    defaultLayout:'layout',
    extname:'.hbs'})
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname,'src/views'));

// express routes
app.use('/', imageRoute)

// run server
const port = process.env.PORT || 3000
app.listen( port, () => console.log("it's great"));

export default app;