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
    python3-pip \
    nginx

RUN curl -fsSL https://ollama.com/install.sh | sh

RUN mkdir -p /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN ollama serve &
RUN ollama pull llama3.1 &

EXPOSE 11434

CMD ["sh", "-c", "nginx -g 'daemon off;' & ollama serve"]

