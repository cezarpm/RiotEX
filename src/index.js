import app from './configs/custom-express';
import env from '../env';

const port = env.PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
