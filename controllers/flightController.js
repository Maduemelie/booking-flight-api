const {Flights} = require('../models/Flight')
const { v4: uuid } = require('uuid')


const getAllFlight = async (req, res)=>{
    try {
        const flights = Flights 
        res.status(200).json({message: "All flights ", Flights:   flights})
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

const createFlight = async(req, res)=>{

   try {
       const flight = await req.body
       flight.id = uuid() 
       const newFlight = Flights.push(flight)
       res.status(200).json({ message: "flight created", flight })
   } catch (error) {
       res.status(500).json(error.message)
   }
}

const getAFlight = async (req, res)=>{
 try {
     const id = req.params.id
     const flight = await Flights.find((flight) => flight.id === id)
     res.status(200).json({ message: "flight found", flight })

 } catch (error) {
    res.status(404).json(error)
    
 }
}

const updateFlight = async (req, res) => {
    try {
        const id = req.params.id
        const flight = await Flights.find((flight) => flight.id === id)
        const{title, time, price, date} = await req.body
       flight.title = title
       flight.time = time
       flight.price = price
       flight.date = date


        res.status(200).json({ message: "flight updated", flight })

    } catch (error) {
        res.status(404).json(error.message)

    }
}
const deleteFlight = async (req, res) => {
    try {
        const id = req.params.id
        const flight = await Flights.find((flight) => flight.id === id)
        Flights.splice(Flights.indexOf(flight), 1)

        res.status(200).json({ message: "flight deleted" })

    } catch (error) {
        res.status(404).json(error)

    }
}

module.exports = {getAllFlight, createFlight, getAFlight,updateFlight, deleteFlight}