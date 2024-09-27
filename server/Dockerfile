FROM ollama/ollama:latest

EXPOSE 10000

RUN nohup bash -c "ollama serve &" && sleep 5 && ollama pull llama3.1

CMD ["bash", "-c", "ollama serve --port 10000"]

