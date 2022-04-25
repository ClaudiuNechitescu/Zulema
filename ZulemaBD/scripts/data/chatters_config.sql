

BEGIN TRY

MERGE INTO [Chatters_Config] AS Target
USING (VALUES
  (N'z_paciente',N'Nombre',1)
) AS Source ([ObjectName],[ObjectPK],[OriginId])
ON (Target.[ObjectName] = Source.[ObjectName] AND Target.[ObjectPK] = Source.[ObjectPK])
WHEN MATCHED AND (
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([ObjectName],[ObjectPK],[OriginId])
 VALUES(Source.[ObjectName],Source.[ObjectPK],Source.[OriginId])
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





