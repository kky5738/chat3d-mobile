import uvicorn
import sys
from huggingface_hub import login

if __name__ == "__main__":
    # login huggingface locally
    login("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")
    # uvicorn.run("app.api:app", host="0.0.0.0", port=8375, ssl_keyfile="./cert/private.key", ssl_certfile="./cert/private.crt", reload=True)
    print(sys.path)
    uvicorn.run("app.api:app", host="0.0.0.0", port=8375, reload=True)