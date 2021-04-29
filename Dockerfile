# Imagem de Origem
FROM node
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Copiar arquivo de inicialização
COPY start.sh /bin
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Inicializa a aplicação
CMD ["start.sh"]