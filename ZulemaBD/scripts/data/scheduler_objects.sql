

BEGIN TRY

MERGE INTO [Scheduler_Objects] AS Target
USING (VALUES
  (N'Calendario_Paciente',N'z_tarea',N'z_v_tareas_initial_view',N'FechaInicio',N'FechaFin',NULL,NULL,NULL,N'Color',N'<span class="{{IdPaciente|switch:[{{currentReference}}:,else:hidden]}}">
<i class="icon-margin-right">{{IdTipo|switch:[1:?,2:??,3:??,4:?????,else:&nbsp;}}</i>
{{Descrip}} 
  </span>
<!--<div class="ellipsis"><i class="flx-icon icon-man-4 icon-margin-right"></i>{{Nombre}} {{PrimerApellido}} {{SegundoApellido}}</div>-->',N'Pacientes.IdPaciente',N'ColorTexto',NULL,1)
) AS Source ([SchedulerName],[ObjectName],[ViewName],[StartDateField],[EndDateField],[StartTimeField],[EndTimeField],[DurationField],[ColorField],[DescripTemplate],[UserIdField],[TextColorField],[AllDayField],[OriginId])
ON (Target.[SchedulerName] = Source.[SchedulerName] AND Target.[ObjectName] = Source.[ObjectName])
WHEN MATCHED AND (
	NULLIF(Source.[ViewName], Target.[ViewName]) IS NOT NULL OR NULLIF(Target.[ViewName], Source.[ViewName]) IS NOT NULL OR 
	NULLIF(Source.[StartDateField], Target.[StartDateField]) IS NOT NULL OR NULLIF(Target.[StartDateField], Source.[StartDateField]) IS NOT NULL OR 
	NULLIF(Source.[EndDateField], Target.[EndDateField]) IS NOT NULL OR NULLIF(Target.[EndDateField], Source.[EndDateField]) IS NOT NULL OR 
	NULLIF(Source.[StartTimeField], Target.[StartTimeField]) IS NOT NULL OR NULLIF(Target.[StartTimeField], Source.[StartTimeField]) IS NOT NULL OR 
	NULLIF(Source.[EndTimeField], Target.[EndTimeField]) IS NOT NULL OR NULLIF(Target.[EndTimeField], Source.[EndTimeField]) IS NOT NULL OR 
	NULLIF(Source.[DurationField], Target.[DurationField]) IS NOT NULL OR NULLIF(Target.[DurationField], Source.[DurationField]) IS NOT NULL OR 
	NULLIF(Source.[ColorField], Target.[ColorField]) IS NOT NULL OR NULLIF(Target.[ColorField], Source.[ColorField]) IS NOT NULL OR 
	NULLIF(Source.[DescripTemplate], Target.[DescripTemplate]) IS NOT NULL OR NULLIF(Target.[DescripTemplate], Source.[DescripTemplate]) IS NOT NULL OR 
	NULLIF(Source.[UserIdField], Target.[UserIdField]) IS NOT NULL OR NULLIF(Target.[UserIdField], Source.[UserIdField]) IS NOT NULL OR 
	NULLIF(Source.[TextColorField], Target.[TextColorField]) IS NOT NULL OR NULLIF(Target.[TextColorField], Source.[TextColorField]) IS NOT NULL OR 
	NULLIF(Source.[AllDayField], Target.[AllDayField]) IS NOT NULL OR NULLIF(Target.[AllDayField], Source.[AllDayField]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [ViewName] = Source.[ViewName], 
  [StartDateField] = Source.[StartDateField], 
  [EndDateField] = Source.[EndDateField], 
  [StartTimeField] = Source.[StartTimeField], 
  [EndTimeField] = Source.[EndTimeField], 
  [DurationField] = Source.[DurationField], 
  [ColorField] = Source.[ColorField], 
  [DescripTemplate] = Source.[DescripTemplate], 
  [UserIdField] = Source.[UserIdField], 
  [TextColorField] = Source.[TextColorField], 
  [AllDayField] = Source.[AllDayField], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([SchedulerName],[ObjectName],[ViewName],[StartDateField],[EndDateField],[StartTimeField],[EndTimeField],[DurationField],[ColorField],[DescripTemplate],[UserIdField],[TextColorField],[AllDayField],[OriginId])
 VALUES(Source.[SchedulerName],Source.[ObjectName],Source.[ViewName],Source.[StartDateField],Source.[EndDateField],Source.[StartTimeField],Source.[EndTimeField],Source.[DurationField],Source.[ColorField],Source.[DescripTemplate],Source.[UserIdField],Source.[TextColorField],Source.[AllDayField],Source.[OriginId])
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





