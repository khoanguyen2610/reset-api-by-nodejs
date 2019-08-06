export default (success, data, message) => {
    return {
        success: success,
        data: data,
        message: message,
        time: Date.now()
    }
}