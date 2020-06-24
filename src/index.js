import 'dotenv/config';

import app from './configs/custom-express';

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
