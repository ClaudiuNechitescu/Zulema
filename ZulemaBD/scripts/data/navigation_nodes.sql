

BEGIN TRY

MERGE INTO [Navigation_Nodes] AS Target
USING (VALUES
  (N'1BF27F47-4D13-4F55-9ADF-0C9D4FD232BE',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',4,N'Calendario',N'vcalendar-1',N'Calendario',N'page',NULL,NULL,N'current',NULL,NULL,N'z_pg_calendario_paciente',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'45A08EF6-4CE3-4E10-B021-188AB7A120D2',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',3,N'Tareas',N'deliverynotes-2',N'Tareas',N'page',NULL,NULL,N'current',NULL,N'list',N'z_pg_tareas_list',NULL,NULL,NULL,N'z_tareas',N'IdPaciente={{currentReference}}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'ECC37505-957A-4FEB-839B-1BDA01971A12',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',7,N'Informes',N'file-text-o',N'Informes',N'page',NULL,NULL,N'current',NULL,NULL,N'z_pg_informes_paciente',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'617FD855-FAED-41BC-A816-35E991CFA16F',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',6,N'Progreso',N'combine-chart',N'progreso especialista',N'object',NULL,NULL,N'current',NULL,N'edit',NULL,NULL,NULL,NULL,N'z_progreso',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'64BD8171-B0A8-4ECC-90CD-5663580B1D0C',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',8,N'Especialistas',N'follow-3',N'Especialistas',N'page',NULL,NULL,N'current',NULL,NULL,N'z_pg_especialistas',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'1B7AE3DA-3572-447E-8527-5A524D3A739E',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',0,N'Crear consulta',N'nurse1',N'Crear consulta',N'object',NULL,NULL,N'current',NULL,N'edit',NULL,NULL,NULL,NULL,N'z_consulta',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'90EB5836-CF95-49EB-9F1A-5C5A712EA2D2',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',0,N'Tareas',N'deliverynotes-2',N'tarees especialista',N'object',NULL,NULL,N'current',NULL,N'edit',NULL,NULL,NULL,NULL,N'z_tarea',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'940A2C3E-6E9A-4413-A783-748831109F5D',N'28B52419-9F72-4156-BAD4-BEAA462B450F',0,N'Log in',N'log-on',N'Zulema Log in',N'process',NULL,NULL,N'current',N'GotoLogOn',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,N'right',1)
 ,(N'87221611-BA27-42FD-BAA8-79F4990EF81F',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',9,N'Pacientes',N'follow-3',N'Pacientes',N'object',NULL,NULL,N'current',NULL,N'list',N'z_pg_pacientes',NULL,NULL,NULL,N'z_consultas',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'C3AC24E9-B555-4AD3-BA9D-890701BFA8F7',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',11,N'Progreso',N'combine-chart',N'Progreso',N'page',NULL,NULL,N'current',NULL,NULL,N'z_pg_progreso_paciente',NULL,NULL,NULL,N'z_progresos',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'28B52419-9F72-4156-BAD4-BEAA462B450F',NULL,1,N'Zulema Guest Main Menu',N'noicon',N'Zulema Guest Users Main Menu',N'text',NULL,NULL,N'current',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'C1C61370-13B4-46F1-8D4D-D2A50E963F62',N'502DC12A-C032-407C-AD4E-372A476E7309',0,N'Perfil',N'noicon',N'Perfil',N'object',NULL,NULL,N'current',NULL,N'view',NULL,NULL,NULL,NULL,N'sysUser',N'AspNetUsers.Reference={{currentReference}}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,N'right',1)
 ,(N'50B7A331-15B2-42A2-B62B-DAAE9345C493',N'25A4B4D5-44AE-4CF1-8733-568F00F31520',2,N'Informes',N'file-text-o',N'informes especialista',N'object',NULL,NULL,N'current',NULL,N'edit',NULL,NULL,NULL,NULL,N'z_informe',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,1)
 ,(N'FF2A93C8-EB19-4234-989C-DADD5BE25C8D',N'8011C6F0-3336-4696-B510-AACBE239E2FE',1,N'Register',N'register',N'Register',N'text',NULL,N'Register',N'current',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,N'right',1)
) AS Source ([NodeId],[ParentNodeId],[Order],[Title],[IconName],[Descrip],[TypeId],[Params],[Url],[TargetId],[ProcessName],[PageTypeId],[PageName],[ReportName],[HelpId],[ReportWhere],[ObjectName],[ObjectWhere],[Defaults],[SQLSentence],[SQLConStringId],[WebComponent],[TableName],[BadgeClass],[BadgeSQL],[BadgeConStringId],[BadgeRefresh],[Enabled],[cssClass],[OriginId])
ON (Target.[NodeId] = Source.[NodeId])
WHEN MATCHED AND (
	NULLIF(Source.[ParentNodeId], Target.[ParentNodeId]) IS NOT NULL OR NULLIF(Target.[ParentNodeId], Source.[ParentNodeId]) IS NOT NULL OR 
	NULLIF(Source.[Order], Target.[Order]) IS NOT NULL OR NULLIF(Target.[Order], Source.[Order]) IS NOT NULL OR 
	NULLIF(Source.[Title], Target.[Title]) IS NOT NULL OR NULLIF(Target.[Title], Source.[Title]) IS NOT NULL OR 
	NULLIF(Source.[IconName], Target.[IconName]) IS NOT NULL OR NULLIF(Target.[IconName], Source.[IconName]) IS NOT NULL OR 
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[TypeId], Target.[TypeId]) IS NOT NULL OR NULLIF(Target.[TypeId], Source.[TypeId]) IS NOT NULL OR 
	NULLIF(Source.[Params], Target.[Params]) IS NOT NULL OR NULLIF(Target.[Params], Source.[Params]) IS NOT NULL OR 
	NULLIF(Source.[Url], Target.[Url]) IS NOT NULL OR NULLIF(Target.[Url], Source.[Url]) IS NOT NULL OR 
	NULLIF(Source.[TargetId], Target.[TargetId]) IS NOT NULL OR NULLIF(Target.[TargetId], Source.[TargetId]) IS NOT NULL OR 
	NULLIF(Source.[ProcessName], Target.[ProcessName]) IS NOT NULL OR NULLIF(Target.[ProcessName], Source.[ProcessName]) IS NOT NULL OR 
	NULLIF(Source.[PageTypeId], Target.[PageTypeId]) IS NOT NULL OR NULLIF(Target.[PageTypeId], Source.[PageTypeId]) IS NOT NULL OR 
	NULLIF(Source.[PageName], Target.[PageName]) IS NOT NULL OR NULLIF(Target.[PageName], Source.[PageName]) IS NOT NULL OR 
	NULLIF(Source.[ReportName], Target.[ReportName]) IS NOT NULL OR NULLIF(Target.[ReportName], Source.[ReportName]) IS NOT NULL OR 
	NULLIF(Source.[HelpId], Target.[HelpId]) IS NOT NULL OR NULLIF(Target.[HelpId], Source.[HelpId]) IS NOT NULL OR 
	NULLIF(Source.[ReportWhere], Target.[ReportWhere]) IS NOT NULL OR NULLIF(Target.[ReportWhere], Source.[ReportWhere]) IS NOT NULL OR 
	NULLIF(Source.[ObjectName], Target.[ObjectName]) IS NOT NULL OR NULLIF(Target.[ObjectName], Source.[ObjectName]) IS NOT NULL OR 
	NULLIF(Source.[ObjectWhere], Target.[ObjectWhere]) IS NOT NULL OR NULLIF(Target.[ObjectWhere], Source.[ObjectWhere]) IS NOT NULL OR 
	NULLIF(Source.[Defaults], Target.[Defaults]) IS NOT NULL OR NULLIF(Target.[Defaults], Source.[Defaults]) IS NOT NULL OR 
	NULLIF(Source.[SQLSentence], Target.[SQLSentence]) IS NOT NULL OR NULLIF(Target.[SQLSentence], Source.[SQLSentence]) IS NOT NULL OR 
	NULLIF(Source.[SQLConStringId], Target.[SQLConStringId]) IS NOT NULL OR NULLIF(Target.[SQLConStringId], Source.[SQLConStringId]) IS NOT NULL OR 
	NULLIF(Source.[WebComponent], Target.[WebComponent]) IS NOT NULL OR NULLIF(Target.[WebComponent], Source.[WebComponent]) IS NOT NULL OR 
	NULLIF(Source.[TableName], Target.[TableName]) IS NOT NULL OR NULLIF(Target.[TableName], Source.[TableName]) IS NOT NULL OR 
	NULLIF(Source.[BadgeClass], Target.[BadgeClass]) IS NOT NULL OR NULLIF(Target.[BadgeClass], Source.[BadgeClass]) IS NOT NULL OR 
	NULLIF(Source.[BadgeSQL], Target.[BadgeSQL]) IS NOT NULL OR NULLIF(Target.[BadgeSQL], Source.[BadgeSQL]) IS NOT NULL OR 
	NULLIF(Source.[BadgeConStringId], Target.[BadgeConStringId]) IS NOT NULL OR NULLIF(Target.[BadgeConStringId], Source.[BadgeConStringId]) IS NOT NULL OR 
	NULLIF(Source.[BadgeRefresh], Target.[BadgeRefresh]) IS NOT NULL OR NULLIF(Target.[BadgeRefresh], Source.[BadgeRefresh]) IS NOT NULL OR 
	NULLIF(Source.[Enabled], Target.[Enabled]) IS NOT NULL OR NULLIF(Target.[Enabled], Source.[Enabled]) IS NOT NULL OR 
	NULLIF(Source.[cssClass], Target.[cssClass]) IS NOT NULL OR NULLIF(Target.[cssClass], Source.[cssClass]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [ParentNodeId] = Source.[ParentNodeId], 
  [Order] = Source.[Order], 
  [Title] = Source.[Title], 
  [IconName] = Source.[IconName], 
  [Descrip] = Source.[Descrip], 
  [TypeId] = Source.[TypeId], 
  [Params] = Source.[Params], 
  [Url] = Source.[Url], 
  [TargetId] = Source.[TargetId], 
  [ProcessName] = Source.[ProcessName], 
  [PageTypeId] = Source.[PageTypeId], 
  [PageName] = Source.[PageName], 
  [ReportName] = Source.[ReportName], 
  [HelpId] = Source.[HelpId], 
  [ReportWhere] = Source.[ReportWhere], 
  [ObjectName] = Source.[ObjectName], 
  [ObjectWhere] = Source.[ObjectWhere], 
  [Defaults] = Source.[Defaults], 
  [SQLSentence] = Source.[SQLSentence], 
  [SQLConStringId] = Source.[SQLConStringId], 
  [WebComponent] = Source.[WebComponent], 
  [TableName] = Source.[TableName], 
  [BadgeClass] = Source.[BadgeClass], 
  [BadgeSQL] = Source.[BadgeSQL], 
  [BadgeConStringId] = Source.[BadgeConStringId], 
  [BadgeRefresh] = Source.[BadgeRefresh], 
  [Enabled] = Source.[Enabled], 
  [cssClass] = Source.[cssClass], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([NodeId],[ParentNodeId],[Order],[Title],[IconName],[Descrip],[TypeId],[Params],[Url],[TargetId],[ProcessName],[PageTypeId],[PageName],[ReportName],[HelpId],[ReportWhere],[ObjectName],[ObjectWhere],[Defaults],[SQLSentence],[SQLConStringId],[WebComponent],[TableName],[BadgeClass],[BadgeSQL],[BadgeConStringId],[BadgeRefresh],[Enabled],[cssClass],[OriginId])
 VALUES(Source.[NodeId],Source.[ParentNodeId],Source.[Order],Source.[Title],Source.[IconName],Source.[Descrip],Source.[TypeId],Source.[Params],Source.[Url],Source.[TargetId],Source.[ProcessName],Source.[PageTypeId],Source.[PageName],Source.[ReportName],Source.[HelpId],Source.[ReportWhere],Source.[ObjectName],Source.[ObjectWhere],Source.[Defaults],Source.[SQLSentence],Source.[SQLConStringId],Source.[WebComponent],Source.[TableName],Source.[BadgeClass],Source.[BadgeSQL],Source.[BadgeConStringId],Source.[BadgeRefresh],Source.[Enabled],Source.[cssClass],Source.[OriginId])
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





