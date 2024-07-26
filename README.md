## Manual do uso da aplicação

Necessário seguir fielmente os passos mencionados abaixo.

- Configurar o .env igual o .env.example
- Após, rodar o docker-compose com o seguinte comando

        docker-compose up --build

- Caso dispare algum erro, derrube o container usando o comando:

        docker-compose down

Após isto, ajuste os problemas e rode novamente o primeiro comando.

- Após rodar tudo, teste o comando:

        docker exec -it marketplace_db

- Esse comando irá executar o container e servira para você testar no terminal. é esperado um retorno: fwd-i-search