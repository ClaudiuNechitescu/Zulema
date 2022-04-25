
--Put here your data scripts.
--SAMPLE:

MERGE INTO [Sample_Table] AS Target
USING (VALUES
  (1,N'Flexygo')
) AS Source ([SampleId],[Description])
ON (Target.[SampleId] = Source.[SampleId])
WHEN MATCHED AND (
	NULLIF(Source.[Description], Target.[Description]) IS NOT NULL OR NULLIF(Target.[Description], Source.[Description]) IS NOT NULL) THEN
 UPDATE SET
  [Description] = Source.[Description]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([SampleId],[Description])
 VALUES(Source.[SampleId],Source.[Description])
WHEN NOT MATCHED BY SOURCE THEN 
 DELETE
;
GO
