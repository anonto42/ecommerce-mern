import jwt from "jsonwebtoken";

const cookieOption = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true
};

const jwtToken = ( user ) => {
    if(!user) return null;
    const token = jwt.sign( 
            {
                _id : user._id
            },
            process.env.JWT_SECRET_KEY 
        )
    return token;
}

export { cookieOption , jwtToken }