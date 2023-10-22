import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
full_name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
amount: {
    type: Number,
    required: true,
},
reference: {
    type: String,
    required: true
}
});
const Donation = mongoose.models.donor || mongoose.model('Donor', donorSchema);

export default Donation;