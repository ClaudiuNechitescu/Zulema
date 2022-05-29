CREATE TABLE [dbo].[Especialistas](
	[IdEspecialista] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](100) NULL,
	[PrimerApellido] [varchar](100) NULL,
	[SegundoApellido] [varchar](100) NULL,
	[Email] [varchar](100) NULL,
	[Telefono] [varchar](100) NULL,
	[Departamento] [varchar](100) NULL,
	[Foto] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdEspecialista] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


