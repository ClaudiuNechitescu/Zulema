

BEGIN TRY

MERGE INTO [Modules_Pager_Types] AS Target
USING (VALUES
  (N'z-listheader',N'Zulema List Header',10,N'<span class="firstPage"></span><span class="prevPage"></span><span class="pageButtons"></span><span class="nextPage"></span><span class="lastPage"></span><span class="pageInfo"><span class="titlePage">Page</span><span class="activePage"></span><span class="titleOf"> of </span><span class="numPages"></span> <b class="numTotal"> Total: </b> <span class="numRows"></span></span>',N'listHeader',1)
) AS Source ([PagerId],[Descrip],[NumButtons],[Template],[Position],[OriginId])
ON (Target.[PagerId] = Source.[PagerId])
WHEN MATCHED AND (
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[NumButtons], Target.[NumButtons]) IS NOT NULL OR NULLIF(Target.[NumButtons], Source.[NumButtons]) IS NOT NULL OR 
	NULLIF(Source.[Template], Target.[Template]) IS NOT NULL OR NULLIF(Target.[Template], Source.[Template]) IS NOT NULL OR 
	NULLIF(Source.[Position], Target.[Position]) IS NOT NULL OR NULLIF(Target.[Position], Source.[Position]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [Descrip] = Source.[Descrip], 
  [NumButtons] = Source.[NumButtons], 
  [Template] = Source.[Template], 
  [Position] = Source.[Position], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([PagerId],[Descrip],[NumButtons],[Template],[Position],[OriginId])
 VALUES(Source.[PagerId],Source.[Descrip],Source.[NumButtons],Source.[Template],Source.[Position],Source.[OriginId])
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





