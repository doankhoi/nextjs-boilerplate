# Nextjs Boilerplate
Nextjs + Redux + Chakra-UI Boilerplate

## How to run for development
- Create environment file `.env` at root project with content below
```
NEXT_PUBLIC_BASE_URL=https://jsonplaceholder.typicode.com
```

```
yarn install
```

```
yarn dev
```

## How to run by Docker
```
docker build -t myapp:v1 .
```

```
docker run --name myapp -p 3000:3000 -d myapp:v1
```

## How to access
```
http://localhost:3000/
```
