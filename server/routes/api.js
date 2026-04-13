import express from 'express';
import Registration from '../models/Registration.js';
import Contact from '../models/Contact.js';

const router = express.Router();

import xss from 'xss';

// Helper to sanitize text
const sanitizeInput = (input) => {
  if (typeof input === 'string') return xss(input.trim());
  if (Array.isArray(input)) return input.map(item => xss(item.trim()));
  return input;
};

// @route   POST /api/register
// @desc    Register a team for the hackathon
router.post('/register', async (req, res) => {
  console.log(`[POST] /api/register - Received registration request`);
  try {
    let { teamName, leaderName, email, phone, track, college, members } = req.body;

    // 1. Validation for missing or empty fields
    if (!teamName || !leaderName || !email || !phone || !track || !college) {
      return res.status(400).json({ success: false, message: 'All mandatory fields must be filled.' });
    }

    // 2. Normalize and check team size (members array)
    members = Array.isArray(members) ? members : [];
    if (members.length > 5) {
      return res.status(400).json({ success: false, message: 'Team size cannot exceed 5 members.' });
    }

    // 3. Prevent Injection / XSS Attacks (Sanitization)
    teamName = sanitizeInput(teamName);
    leaderName = sanitizeInput(leaderName);
    email = sanitizeInput(email).toLowerCase();
    phone = sanitizeInput(phone);
    track = sanitizeInput(track);
    college = sanitizeInput(college);
    members = sanitizeInput(members);

    // 4. Duplicate Check (Case-Insensitive for name, exact for email)
    const normalizedEmail = email.toLowerCase().trim();
    // Escape regex characters in teamName
    const safeRegexTeamName = teamName.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    
    console.log(`[DEBUG] Checking duplicates for Team: "${teamName}", Email: "${normalizedEmail}"`);

    const existingRegistration = await Registration.findOne({
      $or: [
        { teamName: { $regex: new RegExp(`^${safeRegexTeamName}$`, 'i') } },
        { email: normalizedEmail }
      ]
    });

    if (existingRegistration) {
      console.log(`[DEBUG] Duplicate found: ${JSON.stringify(existingRegistration)}`);
      if (existingRegistration.teamName.toLowerCase() === teamName.toLowerCase()) {
        return res.status(409).json({ success: false, message: 'A team with this name already exists.' });
      }
      if (existingRegistration.email.toLowerCase() === normalizedEmail) {
        return res.status(409).json({ success: false, message: 'An entry with this email already exists.' });
      }
      return res.status(409).json({ success: false, message: 'Team name or email already exists.' });
    }
    console.log(`[DEBUG] No duplicates found, proceeding with save.`);
    
    // 5. Save Record
    const newRegistration = new Registration({
      teamName,
      leaderName,
      email,
      phone,
      track,
      college,
      members
    });

    await newRegistration.save();
    console.log(`[POST] /api/register - Success for team: ${teamName}`);
    res.status(201).json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    // 6. Handle Mongoose/Database Errors
    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: 'A team with this expected name or email already exists (Database Constraint).' });
    }
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }

    // 7. Safe fallback for other Server Errors
    console.error('[POST] /api/register - Server Error:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error during registration.' });
  }
});

// @route   POST /api/contact
// @desc    Submit a contact message
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in contact form:', error);
    res.status(500).json({ success: false, message: 'Server error while sending message.', error: error.message });
  }
});

export default router;
