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
	-Usuario Especialista 
		magegr --> -aZ123456
	-Usuario Paciente
		clne --> -aZ123456

--Para definir usuario especialista-paciente
	--Esto es una funcionalidad no programada, no se asigna automáticamente el IdEspecialista.
1.-En el menú superior, clicamos en herramientas, modo desarrollador.
2.-En el lateral derecho, le damos click a la pestaña Page Config. --> Desarrollador-->Area de diseño
3.- Seguridad-->Usuarios-->Clicamos en el menú contextual del usuario a modificar-->Editar
4.-Para definir un especialista nos dirigiremos al apartado Referencias externas y le especificaremos la Referencia 2 igual que el IdEspecialista en la tabla Especialistas, en la base de datos de datos.
5.-Para definir un paciente el procedimiento es el mismo que el anterior, pero definiendo la Referencia igual que el IdPaciente.
	Para ambos casos, la referencia que no se especifica, dejarla vacía.
