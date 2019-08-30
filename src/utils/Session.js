class Session {
    constructor() {
        // this.session = session
    }

    instance(session) {
        this.session = session
    }

    get(key) {
        return this.session[key]
    }

    set(key, value) {
        this.session[key] = value
    }
}

export default new Session()