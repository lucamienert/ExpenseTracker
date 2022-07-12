import allowedOrigins from "./allowedOrigins"

const corsOptions = {
    origin: (origin: any, callback: Function) => {
        allowedOrigins.indexOf(origin) !== -1 || !origin
            ? callback(null, true)
            : callback(new Error('Not allowed by CORS'))
    },
    optionsSuccessStatus: 200
}

export default corsOptions