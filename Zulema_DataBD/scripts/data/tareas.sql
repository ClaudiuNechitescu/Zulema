CREATE TABLE [dbo].[Tareas](
	[IdTarea] [int] NOT NULL,
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


