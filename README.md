Para poder acceder al proyecto:
1.-Abrir la solución con Visual Studio, como administrador.
2.-Hacer click derecho en el proyecto de base de datos de configuración(ZulemaBD) y darle a publicar
3.-Nos saldrá una ventana emergente, le damos a Editar y seleccionamos nuestra instancia de SQL Server.
4.-Estblecemos el nombre de la base de datos a crear.
5.-Pulsamos en Cargar valores y publicamos. Ahora toca esperar a que finalice.

6.-Publicamos la base de datos de datos (Zulema_DataBD).
7.-Editamos la configuración del proyecto principal para establecer las cadenas de conexión a la base de datos.
    7.1.-Proyecto principal, abrimos Web.config
    7.2.-Editamos las líneas del xml correspondientes a <connectionStrings>, en ConfConnectionString establecemos como Data Source la instancia de SQL Server, Initial Catalog es el nombre de la base de datos de configuración, después especificamos nombre de usuario y contraseña del SQL Server.
    7.3.-Lo mismo para DataConnectionString.
8.-Guardamos todos los cambios e iniciamos el proyecto.