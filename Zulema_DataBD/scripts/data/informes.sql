CREATE TABLE [dbo].[Informes](
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


