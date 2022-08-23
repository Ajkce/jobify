import{ CustomAPIError }from "./index.js"
import  {StatusCodes} from 'http-status-codes'

class UnAuthError extends CustomAPIError{
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.BAD_REQUEST
        
    }
}

export default  UnAuthError;