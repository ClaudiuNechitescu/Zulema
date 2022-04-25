

BEGIN TRY

MERGE INTO [Skins] AS Target
USING (VALUES
  (N'zulema',N'Zulema',NULL,NULL,0,1)
) AS Source ([SkinId],[Descrip],[Css],[Script],[HasDarkMode],[OriginId])
ON (Target.[SkinId] = Source.[SkinId])
WHEN MATCHED AND (
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[Css], Target.[Css]) IS NOT NULL OR NULLIF(Target.[Css], Source.[Css]) IS NOT NULL OR 
	NULLIF(Source.[Script], Target.[Script]) IS NOT NULL OR NULLIF(Target.[Script], Source.[Script]) IS NOT NULL OR 
	NULLIF(Source.[HasDarkMode], Target.[HasDarkMode]) IS NOT NULL OR NULLIF(Target.[HasDarkMode], Source.[HasDarkMode]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [Descrip] = Source.[Descrip], 
  [Css] = Source.[Css], 
  [Script] = Source.[Script], 
  [HasDarkMode] = Source.[HasDarkMode], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([SkinId],[Descrip],[Css],[Script],[HasDarkMode],[OriginId])
 VALUES(Source.[SkinId],Source.[Descrip],Source.[Css],Source.[Script],Source.[HasDarkMode],Source.[OriginId])
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





