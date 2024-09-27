# Use a base image with Ubuntu
FROM ubuntu:20.04

# Install necessary dependencies
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

# Install Ollama CLI (assuming it's available via a script or repository)
RUN curl -o- https://ollama.com/install.sh | bash

# Expose the internal Ollama service port (Render will map this later)
EXPOSE 11434

# Download the LLaMA 3.1 model automatically
RUN ollama pull llama3.1

# Set Ollama to serve LLaMA 3.1 on the internal port
CMD ["ollama", "serve", "--model", "llama3.1", "--port", "11434"]

