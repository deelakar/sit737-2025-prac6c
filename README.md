# Calculator Microservice API

This is a simple **Calculator API** that performs basic arithmetic operations (addition, subtraction, multiplication, division, exponentiation, square root, and modulo) using **Node.js** and **Express**. The application is built using **REST architecture** and follows **microservice** principles.

## Features

- **Addition**: Adds two numbers.
- **Subtraction**: Subtracts two numbers.
- **Multiplication**: Multiplies two numbers.
- **Division**: Divides two numbers, with a check for division by zero.
- **Exponentiation**: Raises a number to a given power.
- **Square Root**: Computes the square root of a non-negative number.
- **Modulo**: Computes the remainder of division between two numbers.

## Technologies Used

- **Node.js**
- **Express** The web framework used to build the API
- **REST API**
- **Microservice Architecture**
- **Winston** for logging
- **dotenv** for environment variable management
- **CORS** for enabling cross-origin requests
- **Docker**

## Requirements

Before getting started, ensure you have the following installed:

- **Git**: To clone the repository and manage version control.
- **Visual Studio Code** (VSCode): A popular IDE for editing and running JavaScript applications.
- **Node.js**: To run the application. You can download it from [nodejs.org](https://nodejs.org/).
- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)

## Getting Started

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/deelakar/sit737-2025-prac5p.git
cd sit737-2025-prac5p
```

### 2. Install Dependencies

The project uses several npm packages, including express, dotenv, winston, and cors. Install the dependencies by running the following command:

```bash
npm install
```

### 3. Configuration

Create a .env file in the root of the project directory to store environment variables. with the following:

```bash
PORT=3000
```

### 4. Start the Application

To run the application, use the following command:

```bash
npm start
```

This will start the API on http://localhost:3000. You can modify the PORT value in the .env file to change the port.

### 5. Testing the API Endpoints

You can test the API using tools like Postman or curl. Below are the API endpoints:

# API Endpoints

### 1. Addition

- Endpoint: POST /api/calculator/add

- Request Body:

  ```bash
  {
    "num1": 10,
    "num2": 4
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Addition successful"
    "result": 14
  }
  ```

### 2. Subtraction

- Endpoint: POST /api/calculator/subtract

- Request Body:

  ```bash
  {
    "num1": 20,
    "num2": 3
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Subtraction successful"
    "result": 17
  }
  ```

### 3. Multiplication

- Endpoint: POST /api/calculator/multiply

- Request Body:

  ```bash
  {
    "num1": 12,
    "num2": 2
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Multiplication successful"
    "result": 24
  }
  ```

### 4. Division

- Endpoint: POST /api/calculator/divide

- Request Body:

  ```bash
  {
    "num1": 12,
    "num2": 4
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Division successful"
    "result": 3
  }
### 5. Exponentiation

- Endpoint: POST /api/calculator/exponent

- Request Body:

  ```bash
  {
    "base": 2,
    "exponent": 3
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Exponent successful"
    "result": 8
  }
### 6. Square Root

- Endpoint: POST /api/calculator/sqrt

- Request Body:

  ```bash
  {
    "number": 1216
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "square root successful"
    "result": 4
  }
### 7. Modulo

- Endpoint: POST /api/calculator/modulo

- Request Body:

  ```bash
  {
    "dividend": 10,
    "divisor": 3
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Modulo successful"
    "result": 1
  }
  ```

### Error Handling

If invalid inputs or missing parameters are provided, the API will return meaningful error messages.

### Example Errors:

- Missing Parameters:
  ```bash
  {
    "success": false
    "error": "Missing parameters: num1 and num2 are required"
  }
  ```
- Invalid Input:
  ```bash
  {
    "success": false
    "error": "Invalid input: num1 and num2 must be valid numbers"
  }
  ```
- Division by Zero:
  ```bash
  {
    "success": false
    "error": "Invalid input: Division by zero is not allowed"
  }
  ```
## Part I – Dockerizing the Application

This section guides you through containerizing the application using Docker.

### Step-by-Step Instructions

#### 1. Install Docker  
Ensure Docker Desktop is installed and running on your machine.

#### 2. Create a Dockerfile (Dockerfile)  (if you don't already have one):
create a dockerfile in the project root folder with the name as `Dockerfile` without any file extension
```bash
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

#### 3. Create a Docker Compose File (docker-compose.yml)
```bash
version: '3.8'

services:
  calculator-api:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

#### 4. Install Docker Extension in VSCode
To install the Docker extension in Visual Studio Code:

  1. Open **Visual Studio Code**.
  2. Go to the **Extensions** view by clicking on the Extensions icon in the Activity Bar on the side of the window.
  3. In the search box, type **Docker**.
  4. Select the **Docker** extension by **Microsoft** from the search results.
  5. Click **Install** to install the extension.

#### 5. Log in to Docker Hub from VSCode

After installing the Docker extension, you need to log in to Docker Hub:

  1. Open the **Command Palette** by pressing `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac).
  2. Type **Docker: Sign In** and select the **Docker: Sign In** command.
  3. A prompt will appear for you to enter your **Docker Hub username** and **password**.
  4. After successfully logging in, you should see your Docker Hub account in the Docker view of the sidebar.

## Set Up Kubernetes Cluster
#### 1. Install Minikube
```bash
choco install minikube   # for Windows (using Chocolatey)
brew install minikube    # for Mac
 ```
#### 2. Start Minikube:
```bash
minikube start
 ```

#### 3. Check cluster status:
```bash
kubectl cluster-info
 ```

## Build and Push Docker Image
#### 1. Build the Docker Image

```bash
docker build -t sit737-2025-prac6c .
```

#### 2. Push your image to DockerHub:

```bash
docker tag sit737-2025-prac6c s223693522/sit737-2025-prac6c
docker push s223693522/sit737-2025-prac6c
```
After pushing 

You can check my Docker Hub Image registry at the following URL: https://hub.docker.com/r/s223693522/sit737-2025-prac6c

## Create Kubernetes Deployment

#### 1. Create a new deployment.yaml file:
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sit737-2025-prac6c-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: sit737-2025-prac6c
  template:
    metadata:
      labels:
        app: sit737-2025-prac6c
    spec:
      containers:
      - name: sit737-2025-prac6c
        image: s223693522/sit737-2025-prac6c:latest
        imagePullPolicy: Always
        ports:
        - containerPort: 3000
```

#### 2. Apply the deployment:
```bash
kubectl apply -f deployment.yaml
```

#### 3. Check if pods are running:
```bash
kubectl get pods
```

## Create Kubernetes Service
This service exposes your app so you can access it.

#### 1. Create a service.yaml file:
```bash
apiVersion: v1
kind: Service
metadata:
  name: sit737-2025-prac6p-service
spec:
  type: NodePort
  selector:
    app: sit737-2025-prac6p
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 3000
      nodePort: 3000
```

#### 2. Apply the service:
```bash
kubectl apply -f service.yaml
```
#### 3. Get service info:
```bash
kubectl get services
```

#### 4. Port Forward:
If you just want to access the application locally without exposing a NodePort, you can forward the service port to a local port:
```bash
kubectl port-forward service/sit737-2025-prac6c-service 3000:3000
```
Then visit http://localhost:3000/api/health

### Part 2

#### 1. Update the Deployment Configuration:
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sit737-2025-prac6c-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: sit737-2025-prac6c
  template:
    metadata:
      labels:
        app: sit737-2025-prac6c
    spec:
      containers:
      - name: sit737-2025-prac6c
        image: s223693522/sit737-2025-prac6c:v2
        imagePullPolicy: Always
        ports:
        - containerPort: 3000
```
#### 2. Apply the deployment:
```bash
kubectl apply -f deployment.yaml
```

### Build and Tag the New Docker Image

#### 1. Build the Docker Image
```bash
docker build -t s223693522/sit737-2025-prac6c:v2 .
```

#### 2. Push the New Image to Docker Hub
```bash
docker tag sit737-2025-prac6c s223693522/sit737-2025-prac6c:v2
```
```bash
docker push s223693522/sit737-2025-prac6c:v2
```

#### Port Forward (If Necessary)
If you just want to access the application locally without exposing a NodePort, you can forward the service port to a local port:

```bash
kubectl port-forward service/sit737-2025-prac6c-service 3000:3000
```

Then try or visit http://localhost:3000/api/health