# Deployment Instructions

This document provides instructions for deploying the client and server applications.

## Client (React App)

The client application can be deployed to static hosting services like Netlify or Vercel.

### Deploying to Netlify

1.  **Push your code to a Git repository** (e.g., GitHub, GitLab, Bitbucket).
2.  **Sign up for a Netlify account** and connect it to your Git provider.
3.  **Create a new site from Git** on Netlify.
4.  **Select your repository**.
5.  **Configure the build settings:**
    *   **Branch to deploy:** `main` (or your primary branch)
    *   **Build command:** `npm run build`
    *   **Publish directory:** `client/build`
6.  **Add environment variables:**
    *   You will need to add your Firebase configuration as environment variables. Make sure to prefix them with `REACT_APP_` (e.g., `REACT_APP_FIREBASE_API_KEY`).
7.  **Deploy the site.**

### Deploying to Vercel

1.  **Push your code to a Git repository.**
2.  **Sign up for a Vercel account** and connect it to your Git provider.
3.  **Import your project** from the Git repository.
4.  **Configure the project:**
    *   Vercel will likely detect that it is a Create React App and configure the build settings automatically.
    *   **Root Directory:** `client`
5.  **Add environment variables** for your Firebase configuration.
6.  **Deploy the project.**

## Server (Node.js App)

The server application can be deployed to services like Heroku or Render.

### Deploying to Heroku

1.  **Sign up for a Heroku account** and install the Heroku CLI.
2.  **Create a new Heroku app:**
    ```bash
    heroku create your-app-name
    ```
3.  **Add a `Procfile`** to the `server` directory:
    ```
    web: node index.js
    ```
4.  **Set the environment variables** on Heroku:
    ```bash
    heroku config:set ATLAS_URI=your_mongodb_connection_string
    ```
5.  **Push your code to Heroku:**
    ```bash
    git subtree push --prefix server heroku main
    ```

### Deploying to Render

1.  **Sign up for a Render account.**
2.  **Create a new Web Service.**
3.  **Connect your Git repository.**
4.  **Configure the service:**
    *   **Name:** your-service-name
    *   **Root Directory:** `server`
    *   **Environment:** Node
    *   **Build Command:** `npm install`
    *   **Start Command:** `node index.js`
5.  **Add environment variables** for your MongoDB connection string.
6.  **Create the service.**

## Securing API Keys and Environment Variables

*   **Never commit your `.env` files to Git.** Add them to your `.gitignore` file.
*   **Use the environment variable settings** provided by your hosting service to store your API keys and other sensitive information.
*   **For the client application, use environment variables prefixed with `REACT_APP_`** to make them accessible in your code.
*   **For the server application, use `process.env`** to access your environment variables.
