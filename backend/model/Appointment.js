import mongoose from "mongoose";


const schema = new mongoose.Schema({
  name: {
    type: String,
    required :true,
  },

  email: {
    type: String,
    required :true,
  },

  phone: {
    type: String,
    required :true,
  },

  date: {
    type: String,
    required :true,
  },


});
                                   //collection ka naam...
export const Appointment = mongoose.model("Appointment", schema);
