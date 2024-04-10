# Pasos para crear el proyecto, abrir el terminal  ( ojo dia 2 presentacion parte 1 desde pag 60 aprox)
1. Ejecutar el comando npm init para inicializar el proyeto creando el package.json. asegurese de estar en la ruta donde quiere crear el proyecto 
`npm init -y`
para ver la ruta ejecuta el comando  pwd
2. Instalar la dependencia de babel ir a la documentacion de babel  https://babeljs.io/docs/usage
en overwiew se copia esto: npm install --save-dev @babel/core @babel/cli @babel/preset-env
y esa ruta se copia en el terminal
eso instala el package-lock.json
luego de instalado para poder usarlo luego solo se ejecuta el npm install
ahora pongamos en el terminal: npm install

luego voy mas abajo a a core Library y copio: npm install --save-dev @babel/core

ahora hay que crear en la raiz en forma manual el archivo babel.config.json
y copias la informacion que esta en la documentacion dentro de este archivo.

ahora crea un archivo .gitignore

ahora en el menu el simbolito pisa el boton azul recuerda cambiar las menos a mas dile y luego commit dale el nombre y cierralo en la x arriba en la barra

ahora para desarrollar tu proyecto se crean los archivos: , se crea la carpeta src adentro se crean los archivos:cliente, impuestos y el principal

para traspilar se colocca esta ruta en el terminal:
npx babel src/ -d dist/ --config-file ./babel.config.json






