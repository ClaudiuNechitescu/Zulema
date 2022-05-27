

BEGIN TRY

MERGE INTO [Security_Pages_Roles] AS Target
USING (VALUES
  (N'06443971-41C9-4888-8D56-123885F87A61',N'notRegistered',1,1)
 ,(N'syspage-generic-objectwizard',N'notRegistered',1,1)
 ,(N'z_pg_chat',N'notRegistered',1,1)
 ,(N'z_pg_especialistas',N'notRegistered',1,1)
 ,(N'z_pg_inicio_guest',N'notRegistered',1,1)
 ,(N'z_pg_paciente_view',N'notRegistered',1,1)
 ,(N'z_pg_pacientes',N'notRegistered',1,1)
 ,(N'z_pg_tareas_list',N'notRegistered',1,1)
 ,(N'z_pg_tareas_paciente',N'notRegistered',1,1)
) AS Source ([PageName],[RoleId],[Canview],[OriginId])
ON (Target.[PageName] = Source.[PageName] AND Target.[RoleId] = Source.[RoleId])
WHEN MATCHED AND (
	NULLIF(Source.[Canview], Target.[Canview]) IS NOT NULL OR NULLIF(Target.[Canview], Source.[Canview]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [Canview] = Source.[Canview], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([PageName],[RoleId],[Canview],[OriginId])
 VALUES(Source.[PageName],Source.[RoleId],Source.[Canview],Source.[OriginId])
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





