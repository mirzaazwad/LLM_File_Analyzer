
# LLM File Analyzer

Recommended to run locally, provided you have a GPU setup, or a good enough RAM and CPU

A RAM of around 8GB would suffice, but a GPU would be greatly helpful and a CPU with performance near that of AMD Ryzen 7 5000 series would be more helpful

To run locally, go to the server directory and run the following commands:
```
docker build -t ollama_service .
docker run -d -p 5000:10000 ollama_service
```
This starts your backend service, note that 5000 can be replaced by any port number of your choice.

For the nextJS, set an .env.local file in the client directory with the following:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```
Again if you replaced the port number with a number of your choice fix it accordingly.

You can run the frontend application using the instructions provided in the client directory.
