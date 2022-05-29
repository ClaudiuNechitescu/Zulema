CREATE TABLE [dbo].[Progreso](
	[IdProgreso] [int] NOT NULL,
	[IdPaciente] [int] NULL,
	[IdEspecialista] [int] NULL,
	[Semana] [int] NULL,
	[IdConsulta] [int] NULL,
	[Descrip] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdProgreso] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


