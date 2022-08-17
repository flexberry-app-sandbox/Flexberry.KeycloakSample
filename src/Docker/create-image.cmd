docker build --no-cache -f SQL\Dockerfile.PostgreSql -t keycloaksample/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t keycloaksample/app ../..
