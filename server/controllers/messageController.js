const Message = require("../models/Message");

exports.getRoomMessages = async (req, res) => {
  const messages = await Message.find({ room: req.params.roomId })
    .populate("sender")
    .populate("username")
    .sort({ createdAt: 1 });

  res.status(200).json(messages);
};
