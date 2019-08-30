


const mongoose = require('./mongoose')

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;



const UsersModel = require ("../model/UsersModel")
const UsersModel_N = require('../model/UsersModel_N')



 A = async () =>  {

try {
              const data = await UsersModel.findOne()
              console.log(data)
              const data_N = await UsersModel_N.findOne()
              console.log(data_N)

    } catch (error) {
                if( process.env.NODE_ENV !== "test") console.log("|>>>>>>>>>>>>>>>>>>>>>>> Cannot Connect Mongo Database")
            }
        }    


module.exports = A


