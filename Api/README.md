## How was this API created

Set up the package.json to get the packages loaded.

```sh

    yarn init -y

    yarn add express
```

Then we set up the prisma and prisma/client

```sh
    yarn add prisma @prisma/client
    npx prisma init
```

setup prisma/.env file with proper  configuration with provider.

    DATABASE_URL="mysql://orm_apiuser:N5Bd5YWNMYUIS9d@127.0.0.1:3306/orm_apiexpress"
`

npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started


yarn prisma migrate dev --name init --create-only

