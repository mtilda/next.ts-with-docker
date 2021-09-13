# Next.js + Typescript + Docker
This repository was bootstrapped with [mtilda](https://github.com/mtilda)'s ["Next.ts with Docker" template](https://github.com/mtilda/next.ts-with-docker), inspired by [Vercel's Next.js example "With Docker"](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

## Developement

### Prerequisits
- [Docker](https://docs.docker.com/)

### Setup
1. `git clone` and `cd` into this repository; and
1. Spin up your application in a container with
    ```bash
    docker-compose up
    ```
    or
    ```bash
    docker-compose up -d # detached mode lets you keep using your terminal
    ```

### Linting
```bash
docker-compose run frontend yarn lint
```

### Shut down the containers
```bash
docker-compose down
```

### Destroy all containers and volumes
```bash
docker system prune -a --volumes
```
