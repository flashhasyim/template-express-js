const MyService = require("../services/MyServices")

class MyController {
   
    // Define your methods here
    async getIndex(req, res) {
      try {
        const result = await MyService.send(1,2)
        res.status(200).json({ message: "Success", result })
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error", error })
      }
    }
  }
  
  module.exports = new MyController()