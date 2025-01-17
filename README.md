
# LLM File Analyzer

Recommended to run locally, provided you have a GPU setup, or a good enough RAM and CPU

A RAM of around 8GB would suffice, but a GPU would be greatly helpful and a CPU with performance near that of AMD Ryzen 7 5000 series would be more helpful

Follow the ollama instructions for downloading ollama at: [Ollama Docs](https://ollama.com/download)

After downloading ollama and running it in your local machines, use:
```
ollama pull llama3.1
```
To get the llama3.1 pre-trained model to use. You can also use it directly on your local machine with:
```
ollama run llama3.1
```

For the nextJS, set an .env.local file in the client directory with the following:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:11434
```
If you replaced the port number with a number of your choice fix it accordingly.

You can run the frontend application using the instructions provided in the client directory.
