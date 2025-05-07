# vigilant-spoon

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000

## Local PostgreSQL Database

This backend provides a Makefile to build and run a local PostgreSQL database using Docker or Podman. By default the Makefile uses Docker, or you can override by setting `CONTAINER_CLI=podman`.

Examples:

```sh
# Build the database image
make build

# Start the database container (default: PODMAN)
make start

# Start with Podman
make start CONTAINER_CLI=podman

# Stop the container
make stop

# Remove the container
# Open a psql shell
make psql
# Open a psql shell
make psql
```
