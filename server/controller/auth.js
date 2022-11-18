import { StatusCodes } from "http-status-codes"

export const login = async (req, res) => {
    res.status(StatusCodes.OK).json({sucess : true, msg : "login "})
}