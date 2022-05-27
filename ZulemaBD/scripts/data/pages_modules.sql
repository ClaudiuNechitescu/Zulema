

BEGIN TRY

MERGE INTO [Pages_Modules] AS Target
USING (VALUES
  (N'06443971-41C9-4888-8D56-123885F87A61',N'z_m_tareas_list',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_calendario_paciente',N'z_m_calendario',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_chat',N'z_m_chatter',N'RightPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_chat',N'z_m_especialistas_list',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_especialistas',N'z_m_especialistas_list',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_informes_paciente',N'z_m_informe_diario',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_informes_paciente',N'z_m_informe_semanal',N'RightPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_paciente_view',N'sysmod-view-generic',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_pacientes',N'z_m_pacientes',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_perfil',N'z_m_perfil',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_progreso_paciente',N'z_m_progreso',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
 ,(N'z_pg_tareas_list',N'z_m_tareas_list',N'TopPosition',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1)
) AS Source ([PageName],[ModuleName],[LayoutPositionId],[RelationWhere],[Order],[SQlEnabled],[SQLEnabledDescrip],[Title],[IconName],[HeaderClass],[ModuleClass],[ConnStringID],[OriginId])
ON (Target.[PageName] = Source.[PageName] AND Target.[ModuleName] = Source.[ModuleName])
WHEN MATCHED AND (
	NULLIF(Source.[LayoutPositionId], Target.[LayoutPositionId]) IS NOT NULL OR NULLIF(Target.[LayoutPositionId], Source.[LayoutPositionId]) IS NOT NULL OR 
	NULLIF(Source.[RelationWhere], Target.[RelationWhere]) IS NOT NULL OR NULLIF(Target.[RelationWhere], Source.[RelationWhere]) IS NOT NULL OR 
	NULLIF(Source.[Order], Target.[Order]) IS NOT NULL OR NULLIF(Target.[Order], Source.[Order]) IS NOT NULL OR 
	NULLIF(Source.[SQlEnabled], Target.[SQlEnabled]) IS NOT NULL OR NULLIF(Target.[SQlEnabled], Source.[SQlEnabled]) IS NOT NULL OR 
	NULLIF(Source.[SQLEnabledDescrip], Target.[SQLEnabledDescrip]) IS NOT NULL OR NULLIF(Target.[SQLEnabledDescrip], Source.[SQLEnabledDescrip]) IS NOT NULL OR 
	NULLIF(Source.[Title], Target.[Title]) IS NOT NULL OR NULLIF(Target.[Title], Source.[Title]) IS NOT NULL OR 
	NULLIF(Source.[IconName], Target.[IconName]) IS NOT NULL OR NULLIF(Target.[IconName], Source.[IconName]) IS NOT NULL OR 
	NULLIF(Source.[HeaderClass], Target.[HeaderClass]) IS NOT NULL OR NULLIF(Target.[HeaderClass], Source.[HeaderClass]) IS NOT NULL OR 
	NULLIF(Source.[ModuleClass], Target.[ModuleClass]) IS NOT NULL OR NULLIF(Target.[ModuleClass], Source.[ModuleClass]) IS NOT NULL OR 
	NULLIF(Source.[ConnStringID], Target.[ConnStringID]) IS NOT NULL OR NULLIF(Target.[ConnStringID], Source.[ConnStringID]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [LayoutPositionId] = Source.[LayoutPositionId], 
  [RelationWhere] = Source.[RelationWhere], 
  [Order] = Source.[Order], 
  [SQlEnabled] = Source.[SQlEnabled], 
  [SQLEnabledDescrip] = Source.[SQLEnabledDescrip], 
  [Title] = Source.[Title], 
  [IconName] = Source.[IconName], 
  [HeaderClass] = Source.[HeaderClass], 
  [ModuleClass] = Source.[ModuleClass], 
  [ConnStringID] = Source.[ConnStringID], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([PageName],[ModuleName],[LayoutPositionId],[RelationWhere],[Order],[SQlEnabled],[SQLEnabledDescrip],[Title],[IconName],[HeaderClass],[ModuleClass],[ConnStringID],[OriginId])
 VALUES(Source.[PageName],Source.[ModuleName],Source.[LayoutPositionId],Source.[RelationWhere],Source.[Order],Source.[SQlEnabled],Source.[SQLEnabledDescrip],Source.[Title],Source.[IconName],Source.[HeaderClass],Source.[ModuleClass],Source.[ConnStringID],Source.[OriginId])
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





