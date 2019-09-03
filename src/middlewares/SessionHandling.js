import session from "express-session"
import connectMongo from "connect-mongo"

import MongoDb from "../databases/MongoDb"

const MongoStore = connectMongo(session);

const Session = session({
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: new MongoStore({
        url: MongoDb.getUri(),
        mongoOptions: MongoDb.getOptions(),
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 8 },
})

export default Session