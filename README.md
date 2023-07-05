Punto 1.d:
Pasos para instalar y ejecutar la apliacion.

1. Primero se realiza la descarga de los archivos comprimidos en ZIP.
2. Al descomprimir la carpeta ingresamos a VS Code y en la terminal ejecutamos:
3. Ejecutamos el comando npm init y posteriormente.
4. npm install (instalar las dependencias.) que seran almacenadas en el archivo packcage.json, luego.
5. npm install express nodemon. (dependencias)
   npm i sequelize mysql2 --save (instalar las bases de datos)
   npm install ejs
   npm i dotenv

6. en el package.json/scripts situamos {
   "start": "node app.js",
   "dev": "nodemon app.js"
   } y guardamos los cambios.
7. En la consola ejecutamos el comando npm run dev y se establecera la conexion con el servidor en el puerto que hayamos establecido anteriormente.
