const billsModel = require("../models/billsModel");


//add items
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill Generated Successfully!");
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
};

module.exports = {
  addBillsController
};