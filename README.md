## RiotEX
API para fornecer informações com base na api da riot.

## TODO:
  - Criar error handler global
  - Testes e2e
  - Instalar Rate limit
  - Cache do ID do jogador (No front o usuario vai consumir tudo usando o nick dele, então a cada request vamos precisar pegar esse id com base no nick, a chance de um usuario que faz uma request fazer mais outras requests a seguir é alta, então com um cache em memória (chave valor) do nick>id vai deixar nossa api muito mais rapida, porque caso contrario, a cada request teria que fazer antes uma request para consultar esse id) (pensar se vai fazer o cache com redis, no mongoose ou em memoria).
  - Usar validator nas endpoints
  - Testar casos negativos nos testes
