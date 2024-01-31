class MyServices {
    
    async send(num1, num2) {
        const sum = num1 + num2
        return sum
    }
}

module.exports = new MyServices()