import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: { 
    // Estamos colocando a URL direto aqui para testar
    // Removi o 'replicaSet' para facilitar a conexão
    url: "mongodb://A928094:UQH84J5NC8@cluster0-shard-00-00.rinrlnl.mongodb.net:27017,cluster0-shard-00-01.rinrlnl.mongodb.net:27017,cluster0-shard-00-02.rinrlnl.mongodb.net:27017/admin?ssl=true&authSource=admin&retryWrites=true&w=majority",
  },
});