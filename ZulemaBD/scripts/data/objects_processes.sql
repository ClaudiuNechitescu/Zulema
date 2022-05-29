

BEGIN TRY

MERGE INTO [Objects_Processes] AS Target
USING (VALUES
  (N'z_consulta',N'z_finalizar_consulta',N'c7287df7-c7d0-4117-9e32-f01611ff7a7e',0,1,NULL,NULL,NULL,NULL,NULL,0,1,0,1)
) AS Source ([ObjectName],[ProcessName],[MenuId],[Order],[Active],[SQLEnabled],[SQLEnabledDescrip],[EnabledProperty],[EnabledValues],[DisabledValues],[BagOnly],[ClearSelectionBag],[Offline],[OriginId])
ON (Target.[ObjectName] = Source.[ObjectName] AND Target.[ProcessName] = Source.[ProcessName])
WHEN MATCHED AND (
	NULLIF(Source.[MenuId], Target.[MenuId]) IS NOT NULL OR NULLIF(Target.[MenuId], Source.[MenuId]) IS NOT NULL OR 
	NULLIF(Source.[Order], Target.[Order]) IS NOT NULL OR NULLIF(Target.[Order], Source.[Order]) IS NOT NULL OR 
	NULLIF(Source.[Active], Target.[Active]) IS NOT NULL OR NULLIF(Target.[Active], Source.[Active]) IS NOT NULL OR 
	NULLIF(Source.[SQLEnabled], Target.[SQLEnabled]) IS NOT NULL OR NULLIF(Target.[SQLEnabled], Source.[SQLEnabled]) IS NOT NULL OR 
	NULLIF(Source.[SQLEnabledDescrip], Target.[SQLEnabledDescrip]) IS NOT NULL OR NULLIF(Target.[SQLEnabledDescrip], Source.[SQLEnabledDescrip]) IS NOT NULL OR 
	NULLIF(Source.[EnabledProperty], Target.[EnabledProperty]) IS NOT NULL OR NULLIF(Target.[EnabledProperty], Source.[EnabledProperty]) IS NOT NULL OR 
	NULLIF(Source.[EnabledValues], Target.[EnabledValues]) IS NOT NULL OR NULLIF(Target.[EnabledValues], Source.[EnabledValues]) IS NOT NULL OR 
	NULLIF(Source.[DisabledValues], Target.[DisabledValues]) IS NOT NULL OR NULLIF(Target.[DisabledValues], Source.[DisabledValues]) IS NOT NULL OR 
	NULLIF(Source.[BagOnly], Target.[BagOnly]) IS NOT NULL OR NULLIF(Target.[BagOnly], Source.[BagOnly]) IS NOT NULL OR 
	NULLIF(Source.[ClearSelectionBag], Target.[ClearSelectionBag]) IS NOT NULL OR NULLIF(Target.[ClearSelectionBag], Source.[ClearSelectionBag]) IS NOT NULL OR 
	NULLIF(Source.[Offline], Target.[Offline]) IS NOT NULL OR NULLIF(Target.[Offline], Source.[Offline]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [MenuId] = Source.[MenuId], 
  [Order] = Source.[Order], 
  [Active] = Source.[Active], 
  [SQLEnabled] = Source.[SQLEnabled], 
  [SQLEnabledDescrip] = Source.[SQLEnabledDescrip], 
  [EnabledProperty] = Source.[EnabledProperty], 
  [EnabledValues] = Source.[EnabledValues], 
  [DisabledValues] = Source.[DisabledValues], 
  [BagOnly] = Source.[BagOnly], 
  [ClearSelectionBag] = Source.[ClearSelectionBag], 
  [Offline] = Source.[Offline], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([ObjectName],[ProcessName],[MenuId],[Order],[Active],[SQLEnabled],[SQLEnabledDescrip],[EnabledProperty],[EnabledValues],[DisabledValues],[BagOnly],[ClearSelectionBag],[Offline],[OriginId])
 VALUES(Source.[ObjectName],Source.[ProcessName],Source.[MenuId],Source.[Order],Source.[Active],Source.[SQLEnabled],Source.[SQLEnabledDescrip],Source.[EnabledProperty],Source.[EnabledValues],Source.[DisabledValues],Source.[BagOnly],Source.[ClearSelectionBag],Source.[Offline],Source.[OriginId])
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





