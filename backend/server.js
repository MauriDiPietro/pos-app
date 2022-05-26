import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './db/db.js';
import routesSales from './routes/sale.routes.js';


const PORT = process.env.PORT || 8081

const app = express();

db.sync({ force:false })
.then(()=>{
    console.log('Conexión a la base de datos exitosa!')
})
.catch((err)=>{
    console.log(`Error al conectar: ${err}`)
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/sale', routesSales)

app.listen(PORT, ()=>{
    console.log(`Server OK on port: ${PORT}`)
});