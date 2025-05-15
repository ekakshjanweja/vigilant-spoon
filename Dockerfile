FROM docker.io/library/postgres:latest

# Set environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=mydb

# Copy initialization scripts if needed
#COPY ./init-scripts/ /docker-entrypoint-initdb.d/

# Expose PostgreSQL default port
EXPOSE 54321

# Volume for persisting data
VOLUME ["/var/lib/postgresql/data"]

# Default command
CMD ["postgres"]