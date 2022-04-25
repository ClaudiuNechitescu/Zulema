

BEGIN TRY

MERGE INTO [Skins_Variables] AS Target
USING (VALUES
  (N'zulema',N'bgColor',N'Body',N'ffffff',N'color',N'1. Main Colors',3,1)
 ,(N'zulema',N'borderModuleColor',N'Module Border',N'e6e6e6',N'color',N'1. Main Colors',6,1)
 ,(N'zulema',N'DangerColor',N'Danger',N'ba362f',N'color',N'3. Notify Colors',4,1)
 ,(N'zulema',N'DialogHeaderColor',N'Dialog Header',N'feb9e5',N'color',N'1. Main Colors',3,1)
 ,(N'zulema',N'HeaderColor',N'Header Top Panel',N'feb9e5',N'color',N'1. Main Colors',1,1)
 ,(N'zulema',N'InfoColor',N'Info',N'1f8eee',N'color',N'3. Notify Colors',2,1)
 ,(N'zulema',N'large',N'Large',N'1400px',N'size',N'5. Responsive Screen Sizes',2,1)
 ,(N'zulema',N'medium',N'Medium',N'993px',N'size',N'5. Responsive Screen Sizes',1,1)
 ,(N'zulema',N'MenuColor',N'Menu',N'FFFFFF',N'color',N'1. Main Colors',7,1)
 ,(N'zulema',N'ModuleColor',N'Module',N'FFFFFF',N'color',N'1. Main Colors',4,1)
 ,(N'zulema',N'ModuleHeaderColor',N'Module Header',N'7a315c',N'color',N'1. Main Colors',5,1)
 ,(N'zulema',N'NavColor',N'Navigation Left Panel',N'feb9e5',N'color',N'1. Main Colors',2,1)
 ,(N'zulema',N'NotifyColor',N'Notify',N'0b5ba1',N'color',N'3. Notify Colors',1,1)
 ,(N'zulema',N'OutstandingColor',N'Outstanding',N'7a315c',N'color',N'1. Main Colors',0,1)
 ,(N'zulema',N'PagerbgColor',N'Pager background color',N'FFFFFF',N'color',N'8. Pager Colors',8,1)
 ,(N'zulema',N'PagerbtnborderColor',N'Pager button border color',N'cccccc',N'color',N'8. Pager Colors',8,1)
 ,(N'zulema',N'PagerbtnColor',N'Pager button background color',N'FFFFFF',N'color',N'8. Pager Colors',8,1)
 ,(N'zulema',N'PagerbtntextColor',N'Pager button text color',N'333333',N'color',N'8. Pager Colors',8,1)
 ,(N'zulema',N'PrimaryColor',N'Primary',N'616e7c',N'color',N'3. Notify Colors',0,1)
 ,(N'zulema',N'small',N'Small',N'729px',N'size',N'5. Responsive Screen Sizes',0,1)
 ,(N'zulema',N'SuccessColor',N'Success',N'107c10',N'color',N'3. Notify Colors',5,1)
 ,(N'zulema',N'TimelineBackgroundColor',N'Background',N'ffffff',N'color',N'6. Timeline Colors',5,1)
 ,(N'zulema',N'TimelineDarkColor',N'Dark',N'3C3C46',N'color',N'6. Timeline Colors',1,1)
 ,(N'zulema',N'TimelineLightColor',N'Light',N'f1f3f4',N'color',N'6. Timeline Colors',4,1)
 ,(N'zulema',N'TimelineMediumDarkColor',N'Medium Dark',N'4e4e57',N'color',N'6. Timeline Colors',2,1)
 ,(N'zulema',N'TimelineMediumLightColor',N'Medium Light',N'bdc1c6',N'color',N'6. Timeline Colors',3,1)
 ,(N'zulema',N'ToolbarbgColor',N'Toolbar background color',N'FFFFFF',N'color',N'7. Toolbar Colors',7,1)
 ,(N'zulema',N'ToolbarbtnborderColor',N'Toolbar button border color',N'cccccc',N'color',N'7. Toolbar Colors',7,1)
 ,(N'zulema',N'ToolbarbtnColor',N'Toolbar button background color',N'FFFFFF',N'color',N'7. Toolbar Colors',7,1)
 ,(N'zulema',N'ToolbarbtntextColor',N'Toolbar button text color',N'333333',N'color',N'7. Toolbar Colors',7,1)
 ,(N'zulema',N'ToolsColor',N'Tools',N'80397b',N'color',N'3. Notify Colors',6,1)
 ,(N'zulema',N'txtColor',N'Default Text',N'777777',N'color',N'2. Main Text Colors',3,1)
 ,(N'zulema',N'txtDangerColor',N'Danger',N'FFFFFF',N'color',N'4. Notify Text Colors',4,1)
 ,(N'zulema',N'txtDialogHeaderColor',N'Dialog Header Text',N'FFFFFF',N'color',N'2. Main Text Colors',3,1)
 ,(N'zulema',N'txtHeaderColor',N'Header Top Panel Text Color',N'7a315c',N'color',N'2. Main Text Colors',1,1)
 ,(N'zulema',N'txtInfoColor',N'Info',N'FFFFFF',N'color',N'4. Notify Text Colors',2,1)
 ,(N'zulema',N'txtMenuColor',N'Menu Text Color',N'323f4b',N'color',N'2. Main Text Colors',6,1)
 ,(N'zulema',N'txtModuleColor',N'Module Text Color',N'777777',N'color',N'2. Main Text Colors',4,1)
 ,(N'zulema',N'txtModuleHeaderColor',N'Module Header Text Color',N'F6F6F6',N'color',N'2. Main Text Colors',5,1)
 ,(N'zulema',N'txtNavColor',N'Navigation Left Panel Text Color',N'7a315c',N'color',N'2. Main Text Colors',2,1)
 ,(N'zulema',N'txtNotifyColor',N'Notify',N'FFFFFF',N'color',N'4. Notify Text Colors',1,1)
 ,(N'zulema',N'txtOutstandingColor',N'Outstanding',N'FFFFFF',N'color',N'2. Main Text Colors',0,1)
 ,(N'zulema',N'txtPrimaryColor',N'Primary',N'DDDDDD',N'color',N'4. Notify Text Colors',0,1)
 ,(N'zulema',N'txtSuccessColor',N'Success',N'FFFFFF',N'color',N'4. Notify Text Colors',5,1)
 ,(N'zulema',N'txtToolsColor',N'Tools',N'FFFFFF',N'color',N'4. Notify Text Colors',6,1)
 ,(N'zulema',N'txtWarningColor',N'Warning',N'FFFFFF',N'color',N'4. Notify Text Colors',3,1)
 ,(N'zulema',N'WarningColor',N'Warning',N'ee9e1f',N'color',N'3. Notify Colors',3,1)
) AS Source ([SkinId],[VarName],[Descrip],[VarValue],[VarType],[VarGroup],[VarOrder],[OriginId])
ON (Target.[SkinId] = Source.[SkinId] AND Target.[VarName] = Source.[VarName])
WHEN MATCHED AND (
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[VarValue], Target.[VarValue]) IS NOT NULL OR NULLIF(Target.[VarValue], Source.[VarValue]) IS NOT NULL OR 
	NULLIF(Source.[VarType], Target.[VarType]) IS NOT NULL OR NULLIF(Target.[VarType], Source.[VarType]) IS NOT NULL OR 
	NULLIF(Source.[VarGroup], Target.[VarGroup]) IS NOT NULL OR NULLIF(Target.[VarGroup], Source.[VarGroup]) IS NOT NULL OR 
	NULLIF(Source.[VarOrder], Target.[VarOrder]) IS NOT NULL OR NULLIF(Target.[VarOrder], Source.[VarOrder]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [Descrip] = Source.[Descrip], 
  [VarValue] = Source.[VarValue], 
  [VarType] = Source.[VarType], 
  [VarGroup] = Source.[VarGroup], 
  [VarOrder] = Source.[VarOrder], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([SkinId],[VarName],[Descrip],[VarValue],[VarType],[VarGroup],[VarOrder],[OriginId])
 VALUES(Source.[SkinId],Source.[VarName],Source.[Descrip],Source.[VarValue],Source.[VarType],Source.[VarGroup],Source.[VarOrder],Source.[OriginId])
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





