# **Node.js Docker Example Project**

Welcome to the **Node.js Docker Example Project**! This repository demonstrates how to containerize a simple Node.js application using Docker. The project setup was greatly simplified with the use of Docker's `docker init` command, which automatically generates the necessary Docker configuration files.

## **Project Overview**

This project includes a basic Node.js application that uses Express.js to serve a "Hello from Node.js" message. The application is containerized using Docker, allowing it to run consistently across different environments.

## **Project Structure**

dockerinit/
```bash
├── app.js # Main application file
├── package.json # Node.js dependencies and scripts
├── Dockerfile # Docker configuration for containerizing the application
├── docker-compose.yml # Docker Compose file for running the application with Docker
```


### **app.js**

This file contains a simple Express.js server that listens on port 3000 and responds with "**Hello from JEET DAGAR**".

### **package.json**

This file manages the Node.js dependencies, including Express, and defines the start script for running the application.

### **Docker Files**

- **Dockerfile**: Configures the Docker image to be built, specifying the base image, copying the application code, and running the Node.js application.
- **docker-compose.yml**: Defines the services, networks, and volumes for running the application in a Docker container.

## **Getting Started**

Follow the steps below to run this project locally in a Docker container.

### **Prerequisites**

- **Docker**: Ensure that Docker is installed on your system.

### **Steps to Run the Application**

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/JEETDAGAR/dockerinit.git
    cd dockerinit
    ```

2. **Install Node.js Dependencies**:
    ```bash
    npm install
    ```

3. **Build and Run the Docker Container**:
    ```bash
    docker compose up --build
    ```

4. **Access the Application**:
    Open your web browser and navigate to `http://localhost:3000`.

    You should see the message: "**Hello from JEET DAGAR**".

## **Understanding `docker init`**

The `docker init` command simplifies Docker setup by generating Docker configuration files based on your application. It asks a few questions about your project type and then creates the necessary files to containerize your app.

### **Benefits of Using `docker init`**

- **Automatic File Generation**: Saves time by creating Docker-related files automatically.
- **Easy Customization**: Provides a great starting point that you can customize according to your project needs.
- **Streamlined Workflow**: Makes it easier to get your project up and running in a Docker container.

## **Contributing**

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. **Contributions are always welcome!**

## **Connect**

If you have any questions or want to discuss Docker, Node.js, or anything else, feel free to reach out!

**LinkedIn**: https://www.linkedin.com/in/jeet-dagar-0463621b7/

