import express from 'express';
import routes from './routes/index.js';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
const PORT= 4000 


app.use("/", routes);

app.listen(PORT, () => {
    console.log(`[OLD but HD] - Backend running at:: ${PORT}`)
});

app.use(function(req, res){
    res.status(404);
});


