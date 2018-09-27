# Music

# Instalar Dependencias

- Express, construir Api Rest protocolos Http -> npm install express --save
- Bcrypt-nodejs, encriptar contraseñas -> npm install bcrypt-nodejs --save
- Body-Parser, los datos que recibis se conviertan en un obj -> npm install body-parser --save
- Connect-multiparty, permite subir fichero con NodeJs -> npm install connect-multiparty
- Jwt-simple, autenticacion con tokens -> npm install jwt-simple --save
- Momento -> npm install moment --save
- Mongoose, ORM para trabajar con mongoDB -> npm install mongoose
- mongoose-pagination, paginacion en el proyecto -> npm install mongoose-pagination --save
- Nodemon, nos permite lanzar el servidor cada ves que guardemos, solo en desarrollo -> npm install nodemon --save-dev
- Nodemon, instalar de forma global -> npm install -g nodemon

# Desinstalar dependencias
- npm unistall mongoose --save

# MongoDB
use music_db
db.artist.save({ name: 'artista', description: 'una descripcion', image: 'null'});

# Códigos de estado HTTP

- 2xx: Peticiones correctas
- 3xx: Redirecciones
- 4xx: Errores del cliente
- 5xx: Errores de servidor
