import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.message.push(newMessage._id);
		}
		// await conversation.save()  10s
		// await newMessage.save()  20s
		// after conversation save then start message saving there fore we using parrell run these methods

		//this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		res.status(201).json(newMessage);
	} catch (error) {
		console.log('error', error.message);
		res.status(500).json({ error: error.message });
	}
};

export const getMessage = async (req, res) => {
	try {
		const { id:userToChatId } = req.params;
        const senderId = req.user._id

        const conversation  =  await Conversation.findOne({
            participants:{$all: [senderId,userToChatId]},
        }).populate("message") // NOT REFERENCE BUT ACTUAL MESSAGES 
        res.status(200).json(conversation.message);

		if(conversation) return res.status(200).json([])

		const messages = conversation.message

	} catch (error) {
		console.log('error', error.message);
		res.status(500).json({ error: error.message });
	}
};