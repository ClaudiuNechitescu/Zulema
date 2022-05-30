CREATE TABLE [Consulta_Estados](
	[IdEstado] [int] identity(1,1) NOT NULL,
	[Descrip] [varchar](100) NULL
PRIMARY KEY CLUSTERED 
(
	[IdEstado] ASC
)
) ON [PRIMARY]

INSERT INTO Consulta_Estados VALUES('Activa'),('Finalizada')
GO