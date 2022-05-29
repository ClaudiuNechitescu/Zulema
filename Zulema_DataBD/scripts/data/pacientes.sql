CREATE TABLE [dbo].[Pacientes](
	[IdPaciente] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](100) NULL,
	[PrimerApellido] [nvarchar](100) NULL,
	[SegundoApellido] [nvarchar](100) NULL,
	[Email] [varchar](100) NULL,
	[Telefono] [varchar](100) NULL,
	[Foto] [nvarchar](100) NULL,
 CONSTRAINT [PK_Pacientes] PRIMARY KEY CLUSTERED 
(
	[IdPaciente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


