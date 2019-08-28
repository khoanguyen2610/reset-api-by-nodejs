process.env.NODE_ENV = "test"

import chai from "chai"

import HashPassword from "../../src/utils/HashPassword"

const dummyPassword = "passpass"
const dummyWrongPassword = "wrong_password"
let hashedPassword = ""
/*
|--------------------------------------------------------------------------
| Test /Get routes
|--------------------------------------------------------------------------
*/
describe("Feature hash password", () => {
    it("Password should be hashed", (done) => {
        hashedPassword = HashPassword.hash(dummyPassword)
        chai.expect(hashedPassword).to.be.a('string')
        done()
    })

    it("Hashed password should be equal", (done) => {
        const compare = HashPassword.compareHash(dummyPassword, hashedPassword)
        chai.assert.isOk(compare)
        done()
    })

    it("Hashed password should not be equal", (done) => {
        const compare = HashPassword.compareHash(dummyWrongPassword, hashedPassword)
        chai.assert.isNotOk(compare)
        done()
    })
})