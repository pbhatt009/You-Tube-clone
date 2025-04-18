class ApiEror extends Error {
    constructor(
        statusCode,
        message = 'Something went wrong',   
        errors=[],
        stack=''
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
      this.data=null,
        this.errors=errors,
        this.sucess=false
        if(stack){
         this.stack=stack
        }
        else{
        Error.captureStackTrace(this, this.constructor)
    }
    }
}
export {ApiEror} 