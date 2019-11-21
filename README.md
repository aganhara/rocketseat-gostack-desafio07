# Rocketshoes

Aplicação desenvolvida para o desafio do 7º módulo do curso Rocketseat - GoStack.

Para executar a aplicação será necessário os seguintes passos:

* Adicionar a API json-server para simular o backend da aplicação.

```shell
npm install -g json-server
```

O arquivo da api se encontra na pasta raiz (server.json), para executá-lo:

```shell
json-server server.json -p <porta>
```

Executando a aplicação:

```shell
react-native run-android
react-native start
```

Se a aplicação for executada em um dispositivo físico e o mesmo não encontrar a api executar o comando.

```shell
adb reverse tcp:3333 tcp:3333
```
