export const tryCatchWrapper = async function(fn) {
    return async function(req, res, next) {
        try{
            await fn(req, res)
        }catch(err){
            next(err)
        }
    }
}