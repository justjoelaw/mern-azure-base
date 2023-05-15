# MERN Azure Base

I copied the original project from the quickstart guide for MERN apps published by MongoDB: https://www.mongodb.com/languages/mern-stack-tutorial

I have then modified it to be used as a base repo for MERN stack apps which are deployed on Azure App Sevices using the Container Registry.

On pushing to your main github branch:
- The app is containerised using Docker
- The container image is pushed to Azure Container Registry
- The container registry is deployed using Azure App Services

**Note: GitHub Secrets are used for environment variables**

Next Step - Add Infrastructure-As-Code component to automate setting up resources on Azure:
- Azure Cosmos MongoDB instance
- App Service for deployment
