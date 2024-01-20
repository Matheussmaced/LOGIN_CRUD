# Login

## RFs (Requesitos funcionais)

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel excluir o usuário;

# RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não deve poder se cadastrar com uma senha com menos de 3 caracteres

# Rodando Docker

- Execute o seguinte comando no terminal: `docker compose up -d` rodará os containers
- Para parar, basta escrever `docker compose stop`
- Apos isso, execute o comando `npx prisma migrate dev` para ler as migrates
