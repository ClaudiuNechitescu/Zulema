

BEGIN TRY

MERGE INTO [Objects_Views_Properties] AS Target
USING (VALUES
  (N'z_consulta',N'z_consultaDefaultList',N'z_consulta',N'IdConsulta',N'z_consulta',0,N'IdConsulta_1',1)
 ,(N'z_consulta',N'z_consultaDefaultList',N'z_consulta',N'IdEspecialista',N'z_consulta',1,N'IdEspecialista',1)
 ,(N'z_consulta',N'z_consultaDefaultList',N'z_consulta',N'IdPaciente',N'z_consulta',2,N'IdPaciente',1)
 ,(N'z_consulta',N'z_consultaDefaultList',N'z_consulta',N'IdTipo',N'z_consulta',3,N'IdTipo',1)
 ,(N'z_especialista',N'z_especialistaDefaultList',N'z_especialista',N'IdEspecialista',N'z_especialista',0,N'IdEspecialista_1',1)
 ,(N'z_especialista',N'z_especialistaDefaultList',N'z_especialista',N'Nombre',N'z_especialista',1,N'Nombre',1)
 ,(N'z_especialista',N'z_especialistaDefaultList',N'z_especialista',N'PrimerApellido',N'z_especialista',2,N'PrimerApellido',1)
 ,(N'z_especialista',N'z_especialistaDefaultList',N'z_especialista',N'SegundoApellido',N'z_especialista',3,N'SegundoApellido',1)
 ,(N'z_informe',N'z_informeDefaultList',N'z_informe',N'Descrip',N'z_informe',3,N'Descrip',1)
 ,(N'z_informe',N'z_informeDefaultList',N'z_informe',N'Fecha',N'z_informe',2,N'Fecha',1)
 ,(N'z_informe',N'z_informeDefaultList',N'z_informe',N'IdEspecialista',N'z_informe',1,N'IdEspecialista',1)
 ,(N'z_informe',N'z_informeDefaultList',N'z_informe',N'IdPaciente',N'z_informe',0,N'IdPaciente_1',1)
 ,(N'z_informe',N'z_informeDefaultList',N'z_informe',N'Tipo',N'z_informe',4,N'Tipo',1)
 ,(N'z_progreso',N'z_progresoDefaultList',N'z_progreso',N'Descrip',N'z_progreso',5,N'Descrip',1)
 ,(N'z_progreso',N'z_progresoDefaultList',N'z_progreso',N'IdConsulta',N'z_progreso',4,N'IdConsulta',1)
 ,(N'z_progreso',N'z_progresoDefaultList',N'z_progreso',N'IdEspecialista',N'z_progreso',2,N'IdEspecialista',1)
 ,(N'z_progreso',N'z_progresoDefaultList',N'z_progreso',N'IdPaciente',N'z_progreso',1,N'IdPaciente',1)
 ,(N'z_progreso',N'z_progresoDefaultList',N'z_progreso',N'IdProgreso',N'z_progreso',0,N'IdProgreso_1',1)
 ,(N'z_progreso',N'z_progresoDefaultList',N'z_progreso',N'Semana',N'z_progreso',3,N'Semana',1)
 ,(N'z_tarea',N'z_tareaDefaultList',N'z_tarea',N'Descrip',N'z_tarea',3,N'Descrip',1)
 ,(N'z_tarea',N'z_tareaDefaultList',N'z_tarea',N'FechaFin',N'z_tarea',6,N'FechaFin',1)
 ,(N'z_tarea',N'z_tareaDefaultList',N'z_tarea',N'FechaInicio',N'z_tarea',5,N'FechaInicio',1)
 ,(N'z_tarea',N'z_tareaDefaultList',N'z_tarea',N'IdConsulta',N'z_tarea',2,N'IdConsulta_1',1)
 ,(N'z_tarea',N'z_tareaDefaultList',N'z_tarea',N'IdEspecialista',N'z_tarea',4,N'IdEspecialista',1)
 ,(N'z_tarea',N'z_tareaDefaultList',N'z_tarea',N'IdPaciente',N'z_tarea',1,N'IdPaciente_1',1)
 ,(N'z_tarea',N'z_tareaDefaultList',N'z_tarea',N'IdTarea',N'z_tarea',0,N'IdTarea_1',1)
) AS Source ([ObjectName],[ViewName],[ObjectPropertyName],[PropertyName],[ObjectPath],[Order],[Label],[OriginId])
ON (Target.[ObjectName] = Source.[ObjectName] AND Target.[ViewName] = Source.[ViewName] AND Target.[ObjectPropertyName] = Source.[ObjectPropertyName] AND Target.[PropertyName] = Source.[PropertyName])
WHEN MATCHED AND (
	NULLIF(Source.[ObjectPath], Target.[ObjectPath]) IS NOT NULL OR NULLIF(Target.[ObjectPath], Source.[ObjectPath]) IS NOT NULL OR 
	NULLIF(Source.[Order], Target.[Order]) IS NOT NULL OR NULLIF(Target.[Order], Source.[Order]) IS NOT NULL OR 
	NULLIF(Source.[Label], Target.[Label]) IS NOT NULL OR NULLIF(Target.[Label], Source.[Label]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [ObjectPath] = Source.[ObjectPath], 
  [Order] = Source.[Order], 
  [Label] = Source.[Label], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([ObjectName],[ViewName],[ObjectPropertyName],[PropertyName],[ObjectPath],[Order],[Label],[OriginId])
 VALUES(Source.[ObjectName],Source.[ViewName],Source.[ObjectPropertyName],Source.[PropertyName],Source.[ObjectPath],Source.[Order],Source.[Label],Source.[OriginId])
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





