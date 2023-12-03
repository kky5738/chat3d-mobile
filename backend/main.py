import uvicorn

if __name__ == "__main__":
    # Run the FastAPI app using uvicorn
    # Uncomment the line below for SSL configuration
    # uvicorn.run("app.api:app", host="0.0.0.0", port=8375, ssl_keyfile="./cert/private.key", ssl_certfile="./cert/private.crt", reload=True)
    
    # Run the FastAPI app without SSL
    uvicorn.run("app.api:app", host="0.0.0.0", port=8375, reload=True)
