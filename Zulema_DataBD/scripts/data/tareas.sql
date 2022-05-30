CREATE TABLE [Tareas](
	[IdTarea] [int] identity(1,1) NOT NULL,
	[IdPaciente] [int] NOT NULL,
	[IdConsulta] [int] NOT NULL,
	[Descrip] [nvarchar](max) NULL,
	[IdEspecialista] [int] NULL,
	[FechaInicio] [date] NULL,
	[FechaFin] [date] NULL,
	[Color] [varchar](6) NULL,
	[ColorTexto] [varchar](6) NULL,
	[IdTipo] [int] NULL,
 CONSTRAINT [PK_Tareas] PRIMARY KEY CLUSTERED 
(
	[IdTarea] ASC,
	[IdPaciente] ASC,
	[IdConsulta] ASC
)
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO