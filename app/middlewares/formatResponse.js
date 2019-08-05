const formatResponse = (success, data, message) => {
    return {
        success: success,
        data: data,
        message: message,
        time: Date.now()
    }
}
export default formatResponse