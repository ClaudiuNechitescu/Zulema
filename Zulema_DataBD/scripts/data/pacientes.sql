CREATE TABLE [Pacientes](
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
)
) ON [PRIMARY]

INSERT INTO Pacientes VALUES('Claudiu Andrei','Nechitescu','','clne@floridauniversitaria.es','601366399','')



GO