FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    ca-certificates \
    libunwind8-dev \
    libssl-dev \
    libcurl4-openssl-dev \
    python3 \
    python3-pip

RUN curl -fsSL https://ollama.com/install.sh | sh

EXPOSE 10000

CMD ["sh", "-c", "export OLLAMA_HOST=0.0.0.0:10000 && ollama serve && ollama pull llama3.1 && ollama run llama3.1"]


