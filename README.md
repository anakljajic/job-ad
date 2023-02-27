
# Job Advertisements App

This is a project that allows user to add, update, preview, and change the status of the job ad. The list of job ads is provided through the following views: via table and via cards. The data for job ads are stored in the database, and filtering is server-side to enable users to search for job ads by status and/or title.

**Note:** On smaller screen size, list of job advertisements are only available as cards view.

## Technologies && Libraries Used

-   Backend: NestJS
-   Frontend: Angular version 15.1.6
-   UI library: Angular Material
-   Reverse proxy: Nginx
-   Database: PostgreSQL
-   Docker-compose

## Requirements

-   Docker
-   Docker Compose

## Installation

1.  Clone the repository:

`git clone https://github.com/anakljajic/job-ad.git` 

2.  Navigate to the project directory:

`cd job-ad` 

4.  Start the application using docker-compose:

`docker-compose up` 

4.  Access the application at [http://localhost:80](http://localhost/).

## Services

-   **Backend**: This service contains the NestJS backend application. It is built using the Dockerfile in the `backend` directory. The volumes are used to mount the local code into the container for development. It listens on port `3000` and `9229`.
-   **Frontend**: This service contains the Angular frontend application. It is built using the Dockerfile in the `frontend` directory. The volumes are used to mount the local code into the container for development. It listens on port `4200`.
-   **Postgres**: This service contains the PostgreSQL database. It uses the `postgres:10.4` image and listens on port `35000`.
-   **Nginx**: This service acts as the reverse proxy for the application. It listens on port `80` and forwards requests to the frontend service.

## Environment Variables

The following environment variables can be set in the `docker-compose.yml` file:

-   `DATABASE_URL`: The connection URL for the PostgreSQL database.
