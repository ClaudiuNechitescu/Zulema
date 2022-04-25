CREATE PROCEDURE [dbo].[pSampleProcedure]
	@SampleParam		NVARCHAR(128)
AS
----------------------------------------------------------------------------------
--#NAME
--		pSampleProcedure
--#CREATION
-- 		12/01/2018
--#CLASIFICATION
-- 		User Procedure
--#DESCRIPTION
-- 		Sample procedure to do smething
--#PARAMETERS
--		@@ampleParam			Descip of sample param
--#OBSERVATIONS
-- 		
--#CHANGES
----------------------------------------------------------------------------------
BEGIN TRY

	--Throwing sample exception	
	IF @SampleParam IS null BEGIN
		RAISERROR('Throwing sample exception',12,1)
	END

	--Put your code here

	COMMIT TRAN

 
	RETURN 1

END TRY
BEGIN CATCH

	IF @@TRANCOUNT >0 BEGIN
		ROLLBACK TRAN 
	END
	DECLARE @CatchError NVARCHAR(MAX)
	SET @CatchError=dbo.funPrintError(ERROR_MESSAGE(),ERROR_NUMBER(),ERROR_PROCEDURE(),@@PROCID ,ERROR_LINE())


	RAISERROR(@CatchError,12,1)
 
END CATCH 
GO
