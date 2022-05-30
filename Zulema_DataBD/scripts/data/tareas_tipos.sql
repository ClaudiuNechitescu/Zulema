CREATE TABLE [Tareas_Tipos](
	[IdTipo] [int] IDENTITY(1,1) NOT NULL,
	[Descrip] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

INSERT INTO Tareas_Tipos VALUES ('Emociones'),('Pensamientos'),('Agresividad'),('Recaídas')


GO