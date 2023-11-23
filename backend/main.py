import uvicorn


if __name__ == "__main__":
    # uvicorn.run("app.api:app", host="0.0.0.0", port=8375, ssl_keyfile="./cert/private.key", ssl_certfile="./cert/private.crt", reload=True)
    uvicorn.run("app.api:app", host="0.0.0.0", port=8375, reload=True)