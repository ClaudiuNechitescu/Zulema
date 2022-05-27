

BEGIN TRY

MERGE INTO [Objects_Templates] AS Target
USING (VALUES
  (N'z_t_especialistas_list',N'z_especialista',N'list',N'Tarjetas',N'<div class="col-4 col-l-6 col-m-6 col-s-12 pp-employee-card">

  <div class="row pp_flex-wrap pp-border-hover padding-l col-12">
    <div class="col-3 col-m-3 col-s-12 text-center pp_align-items-middle" title={{IdEspecialista}} style="height: 100px;">
      <img id="{{IdEspecialista}}" style="max-height: 100px;" src="{{Foto|url|isnull:./img/Avatars/avatar_blank.png}}" class="img-responsive img-rounded"/>      
    </div>
    <flx-navbutton class="pp_flex-wrap col-7 col-m-7 col-s-6 iflex-text-s-center" type="openpage" pagetypeid="view" objectname="sysUser" objectwhere="(AspNetUsers.SubReference={{IdEspecialista}})" defaults="" targetid="current" excludehist="false">
      <div class="col-12 col-m-12 col-s-12 margin-left-l">
        <h3>
          <span class="{{IdEstado|switch:[-1:text-muted, else:txt-outstanding]}}">{{Nombre}} {{PrimerApellido}} {{SegundoApellido}}</span>
        </h3>   
        <ul class="list-unstyled margin-bottom-0">
          <li class="margin-bottom-s"><a title="Correo" class="text-muted" href="{{Email|isnull:javascript:void,mailto:{{Email}}}}"><i class="flx-icon icon-email icon-margin-right "></i>{{Email|isnull:{{translate|Sin correo}}}}</a></li>
          <li class="margin-bottom-s"><a title="Teléfono de trabajo" class="text-muted" href="{{Telefono|isnull:javascript:void,tel:{{Telefono}}}}"><i class="flx-icon icon-phone icon-margin-right " ></i>{{Telefono|isnull:{{translate|Sin teléfono}}}}</a></li>
          <li class="margin-bottom-s"><div title="Departamento" class="text-muted"><i class="flx-icon icon-departments-2 icon-margin-right " ></i>{{Departamento|isnull:{{translate|Sin departamento}}}}</div></li>
        </ul>
      </div>	
    </flx-navbutton>
    <div>
      <div class="col-12 col-m-12 col-s-12 text-right padding-right-0 iflex-top-right">{{objectmenu}}</div>
    </div>
  </div>
</div>',N'z_v_especialistas_list',NULL,N'<script>
    ' + convert(nvarchar(max),NCHAR(36)) + N'(''flx-navbutton a'').click(function(e) {
        e.stopPropagation();
    });
    </script>
    <div class="margin-top-l">',N'</div>',NULL,NULL,0,0,0,1,1)
 ,(N'z_t_informe_semanal',N'z_informe',N'view',N'Informe Semanal',N'<div class="col-12 z_tareas_box text-center">
  <div class="z_tareas_box margin-m">INFORME SEMANAL</div>
  <div class="z_tareas_box margin-m">
    <span class="txt-outstanding">{{Descrip}}</span>
  </div>
</div>',N'z_v_informe_diario',NULL,NULL,NULL,N'<div class="col-12 z_tareas_box text-center">
  <div class="z_tareas_box margin-m">INFORME SEMANAL</div>
  <div class="z_tareas_box margin-m">
    <span class="txt-outstanding">No hay informe semanal</span>
  </div>
</div>',NULL,0,0,0,1,1)
 ,(N'z_t_Informe_view',N'z_informe',N'view',N'Informe Diario',N'<div class="col-12 z_tareas_box text-center">
  <div class="z_tareas_box margin-m">INFORME DIARIO</div>
  <div class="z_tareas_box margin-m">
    <span class="txt-outstanding">{{Descrip}}</span>
  </div>
</div>',N'z_v_informe_diario',NULL,NULL,NULL,N'<div class="col-12 z_tareas_box text-center">
  <div class="z_tareas_box margin-m">INFORME DIARIO</div>
  <div class="z_tareas_box margin-m">
    <span class="txt-outstanding">No hay informe diario</span>
  </div>
</div>',NULL,0,0,0,1,1)
 ,(N'z_t_paciente_view',N'z_paciente',N'view',N'Paciente',N'<img class="col-3" src="{{Foto|url}}">
<div class="col-9">{{Nombre}} {{PrimerApellido}} {{SegundoApellido}}</div>',N'z_v_paciente_view_user',NULL,NULL,NULL,NULL,NULL,0,0,0,1,1)
 ,(N'z_t_pacientes_list',N'z_paciente',N'list',N'Lista de pacientes',N'<div class="col-4 col-l-6 col-m-6 col-s-12 pp-employee-card">

  <div class="row pp_flex-wrap pp-border-hover padding-l col-12">
    <div class="col-3 col-m-3 col-s-12 text-center pp_align-items-middle" title={{IdEspecialista}} style="height: 100px;">
      <img id="{{IdEspecialista}}" style="max-height: 100px;" src="{{Foto|url|isnull:./img/Avatars/avatar_blank.png}}" class="img-responsive img-rounded"/>      
    </div>
    <flx-navbutton class="pp_flex-wrap col-7 col-m-7 col-s-6 iflex-text-s-center" type="openpage" pagetypeid="view" objectname="sysUser" objectwhere="(AspNetUsers.Reference={{IdPaciente}})" defaults="" targetid="current" excludehist="false">
      <div class="col-12 col-m-12 col-s-12 margin-left-l">
        <h3>
          <span class="{{IdEstado|switch:[-1:text-muted, else:txt-outstanding]}}">{{Nombre}} {{PrimerApellido}} {{SegundoApellido}}</span>
        </h3>   
        <ul class="list-unstyled margin-bottom-0">
          <li class="margin-bottom-s"><a title="Correo" class="text-muted" href="{{Email|isnull:javascript:void,mailto:{{Email}}}}"><i class="flx-icon icon-email icon-margin-right "></i>{{Email|isnull:{{translate|Sin correo}}}}</a></li>
          <li class="margin-bottom-s"><a title="Teléfono de trabajo" class="text-muted" href="{{Telefono|isnull:javascript:void,tel:{{Telefono}}}}"><i class="flx-icon icon-phone icon-margin-right " ></i>{{Telefono|isnull:{{translate|Sin teléfono}}}}</a></li>
        </ul>
      </div>	
    </flx-navbutton>
    <div>
      <div class="col-12 col-m-12 col-s-12 text-right padding-right-0 iflex-top-right">{{objectmenu}}</div>
    </div>
  </div>
</div>',N'z_v_pacientes_esp',NULL,N'<script>
    ' + convert(nvarchar(max),NCHAR(36)) + N'(''flx-navbutton a'').click(function(e) {
        e.stopPropagation();
    });
    </script>
    <div class="margin-top-l">',N'</div>',NULL,NULL,0,0,0,1,1)
 ,(N'z_t_progreso_list',N'z_progreso',N'list',N'Lista de progresos',N'<div class="col-6 z_align-items-middle z_outside-box">
  <div class="col-12 z_tareas_box margin-m">
    <h1 class="col-12 z_align-items-middle"><button class="col-6 btn btn-default br-10" style="cursor:default;" onclick="">Semana {{Semana}}</button></h1>
    <div class="col-12 text-center">
      <div>
        <i class="flx-icon icon-text icon-margin-right"/><span>{{Descrip|isnull: Sin descripción}}</span>
      </div>
    </div>
  </div>
</div>',N'z_v_progreso_list',NULL,N'<div>',N'</div>',N'<div class="col-12 z_tareas_box text-center">
  <div class="z_tareas_box margin-m">PROGRESO</div>
  <div class="z_tareas_box margin-m">
    <span class="txt-outstanding">No hay progreso disponible</span>
  </div>
</div>',NULL,0,0,0,1,1)
 ,(N'z_t_user',N'sysUser',N'view',N'User View Template',N'<div class="content">
<div class="col-12 profile">
  <div class="row">
   <div class="col-3 userphoto">
      	<img class="image img-responsive" src="{{Avatar|url}}" alt="profile">
		
    </div>
    <div class="col-5">
      <h1>{{Name}} <span class="bold">{{SurName}}</span><br><small>{{Role}}</small></h1>
      <ul class="list-unstyled">
       	<li><i class="flx-icon icon-phone"></i>&nbsp;&nbsp;<span class="txt-color-darken">{{PhoneNumber}}</span></li>
        <li><i class="flx-icon icon-email-2"></i>&nbsp;&nbsp;<a href="mailto:{{email}}">{{Email}}</a></li>
        <li><i class="flx-icon icon-man"></i>&nbsp;&nbsp;<span class="txt-color-darken">{{UserName}} ({{NickName}})</span></li>
        <li><i class="{{flag}} icon-margin-right"></i><span class="txt-color-darken">{{Culture}}</span><flx-navbutton class="test" type="execprocess" processname="ChangeCurrentUserLanguage" targetid="modal600x400" excludehist="false" showprogress="false">
     		<i class="flx-icon icon-refresh-1 clickable txt-outstanding icon-margin-left" title="{{translate|Change Language}}"></i></flx-navbutton>
        </li>
     
      </ul>
    </div>
  </div>
</div>
</div>
',N'sysUserExtended',NULL,NULL,NULL,NULL,NULL,0,0,0,1,1)
 ,(N'z_tarea_list',N'z_tarea',N'list',N'Lista de tareas',N'<div class="col-6 z_align-items-middle z_outside-box">
  <div class="col-12 z_tareas_box margin-m">
    <h1 class="col-12 z_align-items-middle"><button class="col-6 btn btn-default br-10" style="cursor:default;" onclick="">TAREA {{IdTarea}}</button></h1>
    <div class="col-12 text-center">
      <div class="col-12"><i class="flx-icon icon-clock1 icon-margin-right"/><span>{{Duracion|isnull:Sin duración}} {{Duracion|switch:[1:día,2:días,else:]}}</span></div>
      <div>
        <i class="flx-icon icon-text icon-margin-right"/><span>{{Descrip|isnull: Sin descripción}}</span>
      </div>
    </div>
  </div>
</div>',N'z_v_tareas_initial_view',NULL,N'<div>
  ',N'</div>',N'<div class="txt-outstanding">No hay tareas para mostrar</div>',NULL,0,0,0,1,1)
) AS Source ([TemplateId],[ObjectName],[TypeId],[Descrip],[Body],[ViewName],[WhereSentence],[Header],[Footer],[Empty],[ModuleClass],[IsDefault],[Offline],[UserDefinedGroups],[Active],[OriginId])
ON (Target.[TemplateId] = Source.[TemplateId])
WHEN MATCHED AND (
	NULLIF(Source.[ObjectName], Target.[ObjectName]) IS NOT NULL OR NULLIF(Target.[ObjectName], Source.[ObjectName]) IS NOT NULL OR 
	NULLIF(Source.[TypeId], Target.[TypeId]) IS NOT NULL OR NULLIF(Target.[TypeId], Source.[TypeId]) IS NOT NULL OR 
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL OR 
	NULLIF(Source.[Body], Target.[Body]) IS NOT NULL OR NULLIF(Target.[Body], Source.[Body]) IS NOT NULL OR 
	NULLIF(Source.[ViewName], Target.[ViewName]) IS NOT NULL OR NULLIF(Target.[ViewName], Source.[ViewName]) IS NOT NULL OR 
	NULLIF(Source.[WhereSentence], Target.[WhereSentence]) IS NOT NULL OR NULLIF(Target.[WhereSentence], Source.[WhereSentence]) IS NOT NULL OR 
	NULLIF(Source.[Header], Target.[Header]) IS NOT NULL OR NULLIF(Target.[Header], Source.[Header]) IS NOT NULL OR 
	NULLIF(Source.[Footer], Target.[Footer]) IS NOT NULL OR NULLIF(Target.[Footer], Source.[Footer]) IS NOT NULL OR 
	NULLIF(Source.[Empty], Target.[Empty]) IS NOT NULL OR NULLIF(Target.[Empty], Source.[Empty]) IS NOT NULL OR 
	NULLIF(Source.[ModuleClass], Target.[ModuleClass]) IS NOT NULL OR NULLIF(Target.[ModuleClass], Source.[ModuleClass]) IS NOT NULL OR 
	NULLIF(Source.[IsDefault], Target.[IsDefault]) IS NOT NULL OR NULLIF(Target.[IsDefault], Source.[IsDefault]) IS NOT NULL OR 
	NULLIF(Source.[Offline], Target.[Offline]) IS NOT NULL OR NULLIF(Target.[Offline], Source.[Offline]) IS NOT NULL OR 
	NULLIF(Source.[UserDefinedGroups], Target.[UserDefinedGroups]) IS NOT NULL OR NULLIF(Target.[UserDefinedGroups], Source.[UserDefinedGroups]) IS NOT NULL OR 
	NULLIF(Source.[Active], Target.[Active]) IS NOT NULL OR NULLIF(Target.[Active], Source.[Active]) IS NOT NULL OR 
	NULLIF(Source.[OriginId], Target.[OriginId]) IS NOT NULL OR NULLIF(Target.[OriginId], Source.[OriginId]) IS NOT NULL) THEN
 UPDATE SET
  [ObjectName] = Source.[ObjectName], 
  [TypeId] = Source.[TypeId], 
  [Descrip] = Source.[Descrip], 
  [Body] = Source.[Body], 
  [ViewName] = Source.[ViewName], 
  [WhereSentence] = Source.[WhereSentence], 
  [Header] = Source.[Header], 
  [Footer] = Source.[Footer], 
  [Empty] = Source.[Empty], 
  [ModuleClass] = Source.[ModuleClass], 
  [IsDefault] = Source.[IsDefault], 
  [Offline] = Source.[Offline], 
  [UserDefinedGroups] = Source.[UserDefinedGroups], 
  [Active] = Source.[Active], 
  [OriginId] = Source.[OriginId]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([TemplateId],[ObjectName],[TypeId],[Descrip],[Body],[ViewName],[WhereSentence],[Header],[Footer],[Empty],[ModuleClass],[IsDefault],[Offline],[UserDefinedGroups],[Active],[OriginId])
 VALUES(Source.[TemplateId],Source.[ObjectName],Source.[TypeId],Source.[Descrip],Source.[Body],Source.[ViewName],Source.[WhereSentence],Source.[Header],Source.[Footer],Source.[Empty],Source.[ModuleClass],Source.[IsDefault],Source.[Offline],Source.[UserDefinedGroups],Source.[Active],Source.[OriginId])
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





