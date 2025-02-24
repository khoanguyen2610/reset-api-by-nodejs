import session from "express-session"
import connectMongo from "connect-mongo"

import MongoDb from "../databases/MongoDb"
import Session from "../utils/Session"
import SessionConfig from "../configs/SessionConfig"

const MongoStore = connectMongo(session)

const SessionMiddleware = session({
    secret: SessionConfig.SESSION_SECRET_KEY,
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: new MongoStore({
        url: MongoDb.getUri(),
        mongoOptions: MongoDb.getOptions(),
    }),
    cookie: { maxAge: SessionConfig.SESSION_MAX_AGE },
})


const SessionHandling =( req, res, next) => {
    Session.instance(req.session)
    next()
}


export default SessionMiddleware
export {
    SessionHandling
}