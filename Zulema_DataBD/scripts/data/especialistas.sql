CREATE TABLE [Especialistas](
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
)
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

INSERT INTO Especialistas VALUES('María','Genís','Grau','mariagenis81@gmail.com','','Psicología','')

GO