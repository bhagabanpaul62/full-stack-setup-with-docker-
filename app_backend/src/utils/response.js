

export const successResponse =(res,data,message = 'success',statusCode = 200)=>{
    return res.status(statusCode).json({
        success:true,
        message,
        data
    })
}

export const errorResponse = (res,data,message ='error',statusCode = 400)=>{
    return res.status(statusCode).json({
        success:false,
        message,
        data 
    })
}

export const validationError = (res,message='validation error',error)=>{
    return res.status(400).json({
        success:false,
        message,
        error
    })
}