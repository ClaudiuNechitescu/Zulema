

BEGIN TRY

MERGE INTO [Objects_Search] AS Target
USING (VALUES
  (N'15771F7F-6A5F-46AB-A2B5-986805BAA7FE',N'sysSettings',N'Text',0,0,N'Text',1,NULL,N'( EXISTS (
 SELECT * FROM [dbo].[Settings] FlxTblFilter 
 LEFT JOIN (SELECT IconName, CSSClass, Classification from Icons ) [FlxCmb1] ON [FlxCmb1].[IconName]=[Settings].[IconName] 
 LEFT JOIN (SELECT  [Descrip], [CustomPropName] from [Objects_Properties_Templates] ) [FlxCmb2] ON [FlxCmb2].[CustomPropName]=[Settings].[SettingCustomProperty] 
 LEFT JOIN (select [GroupName], Descrip from settings_Groups ) [FlxCmb3] ON [FlxCmb3].[GroupName]=[Settings].[GroupName] 

 WHERE ( [Settings].[SettingName] LIKE {~@Param1|16|152|FindString~} 
 or  [Settings].[SettingValue] LIKE {~@Param2|16|2147483647|FindString~} 
 or  [FlxCmb1].[IconName] LIKE {~@Param3|16|200|FindString~} 
 or  [Settings].[Description] LIKE {~@Param4|16|1002|FindString~} 
 or  [FlxCmb2].[Descrip] LIKE {~@Param5|16|200|FindString~} 
 or  CONVERT(varchar,[Settings].[Active]) Like {~@Param6|16|200|FindString~} 
 or  [FlxCmb3].[Descrip] LIKE {~@Param7|16|200|FindString~} 
)
 AND  [Settings].[SettingName] = [FlxTblFilter].[SettingName] 

))
',1)
) AS Source ([SearchId],[ObjectName],[Name],[Generic],[IsDefault],[Type],[Order],[UserId],[SQLSentence],[OriginId])
ON (Target.[SearchId] = Source.[SearchId])
WHEN MATCHED AND (
	NULLIF(Source.[ObjectName], Target.[ObjectName]) IS NOT NULL OR NULLIF(Target.[ObjectName], Source.[ObjectName]) IS NOT NULL OR 
	NULLIF(Source.[Name], Target.[Name]) IS NOT NULL OR NULLIF(Target.[Name], Source.[Name]) IS NOT NULL OR 
	NULLIF(Source.[Generic], Target.[Generic]) IS NOT NULL OR NULLIF(Target.[Generic], Source.[Generic]) IS NOT NULL OR 
	NULLIF(Source.[IsDefault], Target.[IsDefault]) IS NOT NULL OR NULLIF(Target.[IsDefault], Source.[IsDefault]) IS NOT NULL OR 
	NULLIF(Source.[Type], Target.[Type]) IS NOT NULL OR NULLIF(Target.[Type], Source.[Type]) IS NOT NULL OR 
	NULLIF(Source.[Order], Target.[Order]) IS NOT NULL OR NULLIF(Target.[Order], Source.[Order]) IS NOT NULL OR 
	NULLIF(Source.[UserId], Target.[UserId]) IS NOT NULL OR NULLIF(Target.[UserId], Source.[UserId]) IS NOT NULL OR 
	NULLIF(Source.[SQLSentence], Target.[SQLSentence]) IS NOT NULL OR NULLIF(Target.[SQLSentence], Source.[SQLSentence]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [ObjectName] = Source.[ObjectName], 
  [Name] = Source.[Name], 
  [Generic] = Source.[Generic], 
  [IsDefault] = Source.[IsDefault], 
  [Type] = Source.[Type], 
  [Order] = Source.[Order], 
  [UserId] = Source.[UserId], 
  [SQLSentence] = Source.[SQLSentence], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([SearchId],[ObjectName],[Name],[Generic],[IsDefault],[Type],[Order],[UserId],[SQLSentence],[OriginId])
 VALUES(Source.[SearchId],Source.[ObjectName],Source.[Name],Source.[Generic],Source.[IsDefault],Source.[Type],Source.[Order],Source.[UserId],Source.[SQLSentence],Source.[OriginId])
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





