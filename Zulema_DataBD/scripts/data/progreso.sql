CREATE TABLE [Progreso](
	[IdProgreso] [int] identity(1,1) NOT NULL,
	[IdPaciente] [int] NULL,
	[IdEspecialista] [int] NULL,
	[Semana] [int] NULL,
	[IdConsulta] [int] NULL,
	[Descrip] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdProgreso] ASC
)
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]



GO