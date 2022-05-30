SET NUMERIC_ROUNDABORT OFF
GO
SET XACT_ABORT, ANSI_PADDING, ANSI_WARNINGS, CONCAT_NULL_YIELDS_NULL, ARITHABORT, QUOTED_IDENTIFIER, ANSI_NULLS ON
GO

BEGIN TRANSACTION

EXEC sp_MSforeachtable 'ALTER TABLE ? NOCHECK CONSTRAINT all'

EXEC sp_MSforeachtable 'ALTER TABLE ? DISABLE TRIGGER all'

-- Data merge

:r .\data\consulta.sql
:r .\data\consulta_estados.sql
:r .\data\consulta_trigger_insert.sql
:r .\data\especialistas.sql
:r .\data\informes.sql
:r .\data\pacientes.sql
:r .\data\progreso.sql
:r .\data\tareas.sql
:r .\data\tareas_tipos.sql
GO

EXEC sp_MSforeachtable 'ALTER TABLE ? ENABLE TRIGGER all'

EXEC sp_MSforeachtable 'ALTER TABLE ? WITH CHECK CHECK CONSTRAINT ALL'

COMMIT TRANSACTION

GO
