CREATE TABLE [dbo].[Consulta](
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
