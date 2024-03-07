# Utiliser une image Node.js comme base
FROM node:18.19.0

# Définir le répertoire de travail dans l'image
WORKDIR ./src

# Copier les fichiers du projet dans l'image
COPY . .

# Installer les dépendances
RUN npm install 

# Construire l'application Vue.js pour la production
RUN npm run build

# Exposer le port sur lequel l'application va écouter
EXPOSE 8080

# Commande pour démarrer l'application lorsque le conteneur démarre
CMD ["npm", "run", "serve"]