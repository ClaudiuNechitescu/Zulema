CREATE TABLE [Consulta](
	[IdConsulta] [int] NOT NULL,
	[IdEspecialista] [int] NOT NULL,
	[IdPaciente] [int] NOT NULL,
	[IdTipo] [int] NULL,
	[IdEstado] [tinyint] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdConsulta] ASC,
	[IdEspecialista] ASC,
	[IdPaciente] ASC
)
) ON [PRIMARY]
GO