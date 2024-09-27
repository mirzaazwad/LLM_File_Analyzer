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

EXPOSE 11434

RUN ollama pull llama3.1

CMD ["ollama", "serve", "--model", "llama3.1", "--port", "11434"]

