import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'; // Permite que o express trate erros assincronos
import cors from 'cors';
import AppError from '@shared/errors/AppErrors';
import '@shared/typeorm'; // importa a conexão com o banco de dados
import { errors } from 'celebrate';
import routes from './routes';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

// error middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  // caso for uma instancia da classe de erro criada
  if(error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  } else { 
    // Caso contrário retorna uma mensagem padrão
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

app.listen(port, () => {
  console.log(`We're on the air! Server started on port ${port}`);
});
