

BEGIN TRY

MERGE INTO [Objects_Search_Properties] AS Target
USING (VALUES
  (N'15771F7F-6A5F-46AB-A2B5-986805BAA7FE',N'sysSetting',N'Active',N'sysSetting',2,5,N'Active',N'check',1)
 ,(N'15771F7F-6A5F-46AB-A2B5-986805BAA7FE',N'sysSetting',N'Description',N'sysSetting',2,3,N'Description',N'text',1)
 ,(N'15771F7F-6A5F-46AB-A2B5-986805BAA7FE',N'sysSetting',N'GroupName',N'sysSetting',2,6,N'Group',N'dbcombo',1)
 ,(N'15771F7F-6A5F-46AB-A2B5-986805BAA7FE',N'sysSetting',N'IconName',N'sysSetting',2,2,N'Icon',N'dbcombo',1)
 ,(N'15771F7F-6A5F-46AB-A2B5-986805BAA7FE',N'sysSetting',N'SettingCustomProperty',N'sysSetting',2,4,N'Custom Property',N'dbcombo',1)
 ,(N'15771F7F-6A5F-46AB-A2B5-986805BAA7FE',N'sysSetting',N'SettingName',N'sysSetting',2,0,N'Name',N'text',1)
 ,(N'15771F7F-6A5F-46AB-A2B5-986805BAA7FE',N'sysSetting',N'SettingValue',N'sysSetting',2,1,N'Value',N'text',1)
) AS Source ([SearchId],[ObjectName],[PropertyName],[ObjectPath],[Size],[Order],[Label],[PropertySearchType],[OriginId])
ON (Target.[SearchId] = Source.[SearchId] AND Target.[ObjectName] = Source.[ObjectName] AND Target.[PropertyName] = Source.[PropertyName])
WHEN MATCHED AND (
	NULLIF(Source.[ObjectPath], Target.[ObjectPath]) IS NOT NULL OR NULLIF(Target.[ObjectPath], Source.[ObjectPath]) IS NOT NULL OR 
	NULLIF(Source.[Size], Target.[Size]) IS NOT NULL OR NULLIF(Target.[Size], Source.[Size]) IS NOT NULL OR 
	NULLIF(Source.[Order], Target.[Order]) IS NOT NULL OR NULLIF(Target.[Order], Source.[Order]) IS NOT NULL OR 
	NULLIF(Source.[Label], Target.[Label]) IS NOT NULL OR NULLIF(Target.[Label], Source.[Label]) IS NOT NULL OR 
	NULLIF(Source.[PropertySearchType], Target.[PropertySearchType]) IS NOT NULL OR NULLIF(Target.[PropertySearchType], Source.[PropertySearchType]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [ObjectPath] = Source.[ObjectPath], 
  [Size] = Source.[Size], 
  [Order] = Source.[Order], 
  [Label] = Source.[Label], 
  [PropertySearchType] = Source.[PropertySearchType], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([SearchId],[ObjectName],[PropertyName],[ObjectPath],[Size],[Order],[Label],[PropertySearchType],[OriginId])
 VALUES(Source.[SearchId],Source.[ObjectName],Source.[PropertyName],Source.[ObjectPath],Source.[Size],Source.[Order],Source.[Label],Source.[PropertySearchType],Source.[OriginId])
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





