CREATE TABLE [Informes](
	[IdInforme] [int] IDENTITY(1,1) NOT NULL,
	[IdPaciente] [int] NOT NULL,
	[IdEspecialista] [int] NULL,
	[Fecha] [date] NULL,
	[Descrip] [varchar](max) NULL,
	[Tipo] [int] NULL,
	[Consulta] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdInforme] ASC,
	[IdPaciente] ASC
)
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]


GO