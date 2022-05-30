

BEGIN TRY

MERGE INTO [Pages] AS Target
USING (VALUES
  (N'06443971-41C9-4888-8D56-123885F87A61',N'list',N'z_tarea',NULL,N'default',N'list z_tarea',N'noicon',N'{{ObjectDescrip}}',NULL,NULL,0,NULL,0,1,0,NULL,0,1)
 ,(N'z_pg_calendario_especialista',N'generic',NULL,NULL,N'default',N'Calendario',N'vcalendar-1',N'Calendario paciente',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_calendario_paciente',N'generic',NULL,NULL,N'default',N'Calendario',N'vcalendar-1',N'Calendario paciente',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_chat',N'generic',N'z_chat',NULL,N'syslayout-5',N'Chat',N'chat-online-1',N'Chat',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_consultas_list',N'list',N'z_consulta',NULL,N'default',N'Consultas',N'noicon',N'Consultas',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_especialistas',N'list',N'z_especialista',NULL,N'default',N'Especialistas',N'nurse1',N'Especialistas',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_informes_paciente',N'list',NULL,NULL,N'syslayout-14',N'Informes',N'file-text-o',N'Informes paciente',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_inicio_guest',N'generic',NULL,N'webguest',N'default',N'Página inicio',N'noicon',N'Página inicio',NULL,NULL,0,N'body{background-image:url(''/zulema/img/principal.jpg'')}',0,0,0,NULL,0,1)
 ,(N'z_pg_paciente_view',N'view',N'z_paciente',NULL,N'default',N'Paciente',N'noicon',N'Paciente',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_pacientes',N'list',N'z_paciente',NULL,N'default',N'Pacientes',N'follow-3',N'Pacientes',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_perfil',N'view',N'sysUser',N'webdefault',N'default',N'Perfil',N'noicon',N'Perfil',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_progreso_paciente',N'list',NULL,NULL,N'default',N'Progreso',N'combine-chart',N'Progreso paciente',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_tareas_list',N'list',N'z_tareas',NULL,N'default',N'Tareas',N'noicon',N'Tareas',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
 ,(N'z_pg_tareas_paciente',N'list',N'z_tareas',NULL,N'default',N'Tareas',N'deliverynotes-2',N'Tareas Paciente',NULL,NULL,0,NULL,0,0,0,NULL,0,1)
) AS Source ([PageName],[TypeId],[ObjectName],[InterfaceName],[LayoutName],[Name],[IconName],[Descrip],[UrlRewrite],[Script],[ScriptActive],[Style],[RefreshInterval],[Sytem],[Generic],[BodyCssClass],[Offline],[OriginId])
ON (Target.[PageName] = Source.[PageName])
WHEN MATCHED AND (
	NULLIF(Source.[TypeId], Target.[TypeId]) IS NOT NULL OR NULLIF(Target.[TypeId], Source.[TypeId]) IS NOT NULL OR 
	NULLIF(Source.[ObjectName], Target.[ObjectName]) IS NOT NULL OR NULLIF(Target.[ObjectName], Source.[ObjectName]) IS NOT NULL OR 
	NULLIF(Source.[InterfaceName], Target.[InterfaceName]) IS NOT NULL OR NULLIF(Target.[InterfaceName], Source.[InterfaceName]) IS NOT NULL OR 
	NULLIF(Source.[LayoutName], Target.[LayoutName]) IS NOT NULL OR NULLIF(Target.[LayoutName], Source.[LayoutName]) IS NOT NULL OR 
	NULLIF(Source.[Name], Target.[Name]) IS NOT NULL OR NULLIF(Target.[Name], Source.[Name]) IS NOT NULL OR 
	NULLIF(Source.[IconName], Target.[IconName]) IS NOT NULL OR NULLIF(Target.[IconName], Source.[IconName]) IS NOT NULL OR 
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[UrlRewrite], Target.[UrlRewrite]) IS NOT NULL OR NULLIF(Target.[UrlRewrite], Source.[UrlRewrite]) IS NOT NULL OR 
	NULLIF(Source.[Script], Target.[Script]) IS NOT NULL OR NULLIF(Target.[Script], Source.[Script]) IS NOT NULL OR 
	NULLIF(Source.[ScriptActive], Target.[ScriptActive]) IS NOT NULL OR NULLIF(Target.[ScriptActive], Source.[ScriptActive]) IS NOT NULL OR 
	NULLIF(Source.[Style], Target.[Style]) IS NOT NULL OR NULLIF(Target.[Style], Source.[Style]) IS NOT NULL OR 
	NULLIF(Source.[RefreshInterval], Target.[RefreshInterval]) IS NOT NULL OR NULLIF(Target.[RefreshInterval], Source.[RefreshInterval]) IS NOT NULL OR 
	NULLIF(Source.[Sytem], Target.[Sytem]) IS NOT NULL OR NULLIF(Target.[Sytem], Source.[Sytem]) IS NOT NULL OR 
	NULLIF(Source.[Generic], Target.[Generic]) IS NOT NULL OR NULLIF(Target.[Generic], Source.[Generic]) IS NOT NULL OR 
	NULLIF(Source.[BodyCssClass], Target.[BodyCssClass]) IS NOT NULL OR NULLIF(Target.[BodyCssClass], Source.[BodyCssClass]) IS NOT NULL OR 
	NULLIF(Source.[Offline], Target.[Offline]) IS NOT NULL OR NULLIF(Target.[Offline], Source.[Offline]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [TypeId] = Source.[TypeId], 
  [ObjectName] = Source.[ObjectName], 
  [InterfaceName] = Source.[InterfaceName], 
  [LayoutName] = Source.[LayoutName], 
  [Name] = Source.[Name], 
  [IconName] = Source.[IconName], 
  [Descrip] = Source.[Descrip], 
  [UrlRewrite] = Source.[UrlRewrite], 
  [Script] = Source.[Script], 
  [ScriptActive] = Source.[ScriptActive], 
  [Style] = Source.[Style], 
  [RefreshInterval] = Source.[RefreshInterval], 
  [Sytem] = Source.[Sytem], 
  [Generic] = Source.[Generic], 
  [BodyCssClass] = Source.[BodyCssClass], 
  [Offline] = Source.[Offline], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([PageName],[TypeId],[ObjectName],[InterfaceName],[LayoutName],[Name],[IconName],[Descrip],[UrlRewrite],[Script],[ScriptActive],[Style],[RefreshInterval],[Sytem],[Generic],[BodyCssClass],[Offline],[OriginId])
 VALUES(Source.[PageName],Source.[TypeId],Source.[ObjectName],Source.[InterfaceName],Source.[LayoutName],Source.[Name],Source.[IconName],Source.[Descrip],Source.[UrlRewrite],Source.[Script],Source.[ScriptActive],Source.[Style],Source.[RefreshInterval],Source.[Sytem],Source.[Generic],Source.[BodyCssClass],Source.[Offline],Source.[OriginId])
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





