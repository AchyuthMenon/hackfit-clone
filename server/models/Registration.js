import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  teamName: { type: String, required: true, unique: true, trim: true },
  leaderName: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone: { type: String, required: true, trim: true },
  track: { type: String, required: true, trim: true },
  college: { type: String, required: true, trim: true },
  members: {
    type: [{ type: String, trim: true }],
    validate: [arrayLimit, 'A team can have a maximum of 5 members in the list.']
  }
}, { timestamps: true });

function arrayLimit(val) {
  return val.length <= 5;
}

export default mongoose.model('Registration', registrationSchema);
