

BEGIN TRY

MERGE INTO [Objects_Views] AS Target
USING (VALUES
  (N'z_consulta',N'z_consultaDefaultList',N'z_consultaDefaultList',N'DataConnectionString',N' SELECT [Consulta].[IdConsulta], [Consulta].[IdConsulta] as [IdConsulta_1], [Consulta].[IdEspecialista] as [IdEspecialista], [Consulta].[IdPaciente] as [IdPaciente], [Consulta].[IdTipo] as [IdTipo] FROM [Consulta] 

',0,1,1,0,1,NULL,0,NULL,NULL,1)
 ,(N'z_especialista',N'z_especialistaDefaultList',N'z_especialistaDefaultList',N'DataConnectionString',N' SELECT [Especialistas].[IdEspecialista], [Especialistas].[IdEspecialista] as [IdEspecialista_1], [Especialistas].[Nombre] as [Nombre], [Especialistas].[PrimerApellido] as [PrimerApellido], [Especialistas].[SegundoApellido] as [SegundoApellido] FROM [Especialistas] 

',0,1,1,0,1,NULL,0,NULL,NULL,1)
 ,(N'z_especialista',N'z_v_especialistas_list',N'Lista de especialistas',N'DataConnectionString',N' SELECT [Especialistas].[IdEspecialista], [Especialistas].[IdEspecialista] as [IdEspecialista_1], [Especialistas].[Nombre] as [Nombre], [Especialistas].[PrimerApellido] as [PrimerApellido], [Especialistas].[SegundoApellido] as [SegundoApellido], [Especialistas].[Email] as [Email], [Especialistas].[Telefono] as [Telefono], [Especialistas].[Departamento] as [Departamento],users.Avatar as Foto FROM [Especialistas] 
INNER JOIN {~ConfConnectionString~}.dbo.AspNetUsers users on users.SubReference=[Especialistas].IdEspecialista
',0,0,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'z_informe',N'z_informeDefaultList',N'z_informeDefaultList',N'DataConnectionString',N' SELECT [Informes].[IdInforme], [Informes].[IdPaciente], [Informes].[IdPaciente] as [IdPaciente_1], [Informes].[IdEspecialista] as [IdEspecialista], [Informes].[Fecha] as [Fecha], [Informes].[Descrip] as [Descrip], [Informes].[Tipo] as [Tipo] FROM [Informes] 

',0,1,1,0,1,NULL,0,NULL,NULL,1)
 ,(N'z_informe',N'z_v_informe_diario',N'Informe Diario',N'DataConnectionString',N'SELECT 
	  IdInforme
    , IdPaciente
    , IdEspecialista
    , Fecha
    , Descrip
    , Tipo
FROM Informes
WHERE Fecha=''{{currentDate}}''',0,0,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'z_informe',N'z_v_informe_Semanal',N'Informe Diario',N'DataConnectionString',N'SELECT 
	  IdInforme
    , IdPaciente
    , IdEspecialista
    , Fecha
    , Descrip
    , Tipo
FROM Informes
WHERE
	DATEPART(ISO_WEEK,Fecha) = DATEPART(ISO_WEEK,GETDATE())',0,0,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'z_informe',N'z_v_informes_list',N'Lista de informes',N'DataConnectionString',N'SELECT 
	  IdInforme
    , IdPaciente
    , IdEspecialista
    , Fecha
    , Descrip
    , Tipo
FROM Informes',0,0,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'z_paciente',N'z_v_paciente_view_user',N'Pacientes',N'DataConnectionString',N'SELECT
	  IdPaciente
    , Nombre
    , PrimerApellido
    , SegundoApellido
    , Avatar as Foto
FROM
	Pacientes
INNER JOIN {~ConfConnectionString~}.dbo.AspNetUsers users on users.Reference=Pacientes.IdPaciente',0,0,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'z_paciente',N'z_v_pacientes',N'Pacientes',N'DataConnectionString',N'SELECT
	  IdPaciente
    , Nombre
    , PrimerApellido
    , SegundoApellido
FROM
	Pacientes',0,0,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'z_paciente',N'z_v_pacientes_esp',N'Pacientes',N'DataConnectionString',N'SELECT Pacientes.IdPaciente, Nombre, PrimerApellido, SegundoApellido, users.Email, Telefono,Avatar as Foto
FROM Pacientes
INNER JOIN Consulta c on c.IdPaciente=Pacientes.IdPaciente and c.IdEspecialista={{currentSubReference}}
INNER JOIN {~ConfConnectionString~}.dbo.AspNetUsers users on users.Reference=Pacientes.IdPaciente',0,0,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'z_progreso',N'z_progresoDefaultList',N'z_progresoDefaultList',N'DataConnectionString',N' SELECT [Progreso].[IdProgreso], [Progreso].[IdProgreso] as [IdProgreso_1], [Progreso].[IdPaciente] as [IdPaciente], [Progreso].[IdEspecialista] as [IdEspecialista], [Progreso].[Semana] as [Semana], [Progreso].[IdConsulta] as [IdConsulta], [Progreso].[Descrip] as [Descrip] FROM [Progreso] 

',0,1,1,0,1,NULL,0,NULL,NULL,1)
 ,(N'z_progreso',N'z_v_progreso_list',N'Progreso',N'DataConnectionString',N'SELECT IdProgreso, IdPaciente, IdEspecialista, Semana, IdConsulta, Descrip FROM Progreso where IdPaciente={{currentReference}}',0,0,1,0,0,NULL,0,NULL,NULL,1)
 ,(N'z_tarea',N'z_tareaDefaultList',N'z_tareaDefaultList',N'DataConnectionString',N' SELECT [Tareas].[IdTarea], [Tareas].[IdPaciente], [Tareas].[IdConsulta], [Tareas].[IdTarea] as [IdTarea_1], [Tareas].[IdPaciente] as [IdPaciente_1], [Tareas].[IdConsulta] as [IdConsulta_1], [Tareas].[Descrip] as [Descrip], [Tareas].[IdEspecialista] as [IdEspecialista], [Tareas].[FechaInicio] as [FechaInicio], [Tareas].[FechaFin] as [FechaFin] FROM [Tareas] 

',0,1,1,0,1,NULL,0,NULL,NULL,1)
 ,(N'z_tarea',N'z_v_tareas_initial_view',N'Vista inicial tareas',N'DataConnectionString',N'SELECT 
	  Tareas.IdTarea
    , Tareas.IdPaciente
    , Tareas.IdConsulta
    , Tareas.Descrip
    , Tareas.IdEspecialista
    , Tareas.FechaInicio
    , Tareas.FechaFin
    , Tareas.Color
    , Tareas.ColorTexto
    , p.Nombre
    , p.PrimerApellido
    , p.SegundoApellido
    , tt.IdTipo
    , tt.Descrip AS Tipo 
    , CASE WHEN DATEDIFF(day,FechaFin,FechaInicio) = 0 THEN 1 ELSE DATEDIFF(day,FechaFin,FechaInicio) END AS Duracion
    FROM Tareas
INNER JOIN Pacientes p ON p.IdPaciente=Tareas.IdPaciente
LEFT JOIN Tareas_Tipos tt ON tt.IdTipo = Tareas.IdTipo
WHERE p.IdPaciente={{currentReference}}',0,0,1,0,0,NULL,0,NULL,NULL,1)
) AS Source ([ObjectName],[ViewName],[Descrip],[ConnStringId],[SQLSentence],[NoFilter],[ShowAsGrid],[Active],[System],[IsDefault],[OrderBy],[Offline],[PrimaryKeys],[IndexFields],[OriginId])
ON (Target.[ObjectName] = Source.[ObjectName] AND Target.[ViewName] = Source.[ViewName])
WHEN MATCHED AND (
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[ConnStringId], Target.[ConnStringId]) IS NOT NULL OR NULLIF(Target.[ConnStringId], Source.[ConnStringId]) IS NOT NULL OR 
	NULLIF(Source.[SQLSentence], Target.[SQLSentence]) IS NOT NULL OR NULLIF(Target.[SQLSentence], Source.[SQLSentence]) IS NOT NULL OR 
	NULLIF(Source.[NoFilter], Target.[NoFilter]) IS NOT NULL OR NULLIF(Target.[NoFilter], Source.[NoFilter]) IS NOT NULL OR 
	NULLIF(Source.[ShowAsGrid], Target.[ShowAsGrid]) IS NOT NULL OR NULLIF(Target.[ShowAsGrid], Source.[ShowAsGrid]) IS NOT NULL OR 
	NULLIF(Source.[Active], Target.[Active]) IS NOT NULL OR NULLIF(Target.[Active], Source.[Active]) IS NOT NULL OR 
	NULLIF(Source.[System], Target.[System]) IS NOT NULL OR NULLIF(Target.[System], Source.[System]) IS NOT NULL OR 
	NULLIF(Source.[IsDefault], Target.[IsDefault]) IS NOT NULL OR NULLIF(Target.[IsDefault], Source.[IsDefault]) IS NOT NULL OR 
	NULLIF(Source.[OrderBy], Target.[OrderBy]) IS NOT NULL OR NULLIF(Target.[OrderBy], Source.[OrderBy]) IS NOT NULL OR 
	NULLIF(Source.[Offline], Target.[Offline]) IS NOT NULL OR NULLIF(Target.[Offline], Source.[Offline]) IS NOT NULL OR 
	NULLIF(Source.[PrimaryKeys], Target.[PrimaryKeys]) IS NOT NULL OR NULLIF(Target.[PrimaryKeys], Source.[PrimaryKeys]) IS NOT NULL OR 
	NULLIF(Source.[IndexFields], Target.[IndexFields]) IS NOT NULL OR NULLIF(Target.[IndexFields], Source.[IndexFields]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [Descrip] = Source.[Descrip], 
  [ConnStringId] = Source.[ConnStringId], 
  [SQLSentence] = Source.[SQLSentence], 
  [NoFilter] = Source.[NoFilter], 
  [ShowAsGrid] = Source.[ShowAsGrid], 
  [Active] = Source.[Active], 
  [System] = Source.[System], 
  [IsDefault] = Source.[IsDefault], 
  [OrderBy] = Source.[OrderBy], 
  [Offline] = Source.[Offline], 
  [PrimaryKeys] = Source.[PrimaryKeys], 
  [IndexFields] = Source.[IndexFields], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([ObjectName],[ViewName],[Descrip],[ConnStringId],[SQLSentence],[NoFilter],[ShowAsGrid],[Active],[System],[IsDefault],[OrderBy],[Offline],[PrimaryKeys],[IndexFields],[OriginId])
 VALUES(Source.[ObjectName],Source.[ViewName],Source.[Descrip],Source.[ConnStringId],Source.[SQLSentence],Source.[NoFilter],Source.[ShowAsGrid],Source.[Active],Source.[System],Source.[IsDefault],Source.[OrderBy],Source.[Offline],Source.[PrimaryKeys],Source.[IndexFields],Source.[OriginId])
WHEN NOT MATCHED BY SOURCE AND TARGET.OriginId = 1 THEN 
 DELETE
;
END TRY
BEGIN CATCH
    DECLARE @ERRORNUMBER	INT,@ERRORMSG		VARCHAR(MAX),@ERRORSTATE		INT
    SELECT @ERRORNUMBER = 50000 + ERROR_NUMBER(),@ERRORMSG = ERROR_MESSAGE(), @ERRORSTATE = ERROR_STATE();
    THROW @ERRORNUMBER, @ERRORMSG, @ERRORSTATE
END CATCH
GO





