const Room = require("../models/Room");

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    if (!rooms) return res.status(404).json({ message: "Room not found" });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRoom = async (req, res) => {
  const { name } = req.body;
  try {
    const room = await Room.create({ name });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
