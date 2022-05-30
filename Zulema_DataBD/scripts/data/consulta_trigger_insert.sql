SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [tConsulta_I]
   ON  [Consulta]
   INSTEAD OF Insert
AS 
	DECLARE @IdConsulta int, @IdEspecialista int, @IdPaciente int
	SELECT @IdConsulta=IdConsulta, @IdEspecialista=IdEspecialista, @IdPaciente=IdPaciente FROM inserted
	BEGIN
		IF EXISTS(SELECT 1 FROM Consulta WHERE IdEspecialista=@IdEspecialista AND IdPaciente=@IdPaciente AND IdEstado=1)
			BEGIN
				ROLLBACK TRANSACTION
				RAISERROR('Ya hay una consulta activa con este paciente',12,1)
			END
		ELSE
			BEGIN
				INSERT INTO Consulta(IdConsulta,IdEspecialista,IdPaciente,IdEstado) VALUES(@IdConsulta,@IdEspecialista,@IdPaciente,1)
			END
	END
	GO