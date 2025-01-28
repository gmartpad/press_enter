function handleClearInterval(intervalId: NodeJS.Timeout | null) {
    if(intervalId) {
        clearInterval(intervalId)
    }
}

export default handleClearInterval