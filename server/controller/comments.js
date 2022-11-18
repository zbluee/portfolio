import {} from "dotenv/config";
import { StatusCodes } from "http-status-codes";
import axios from "axios";

const sendComments = async (req, res) => {
  const { name, email, message } = req.body;
  const ip = req.ip || req.socket.remoteAddress;
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: `<strong>New Message Recived</strong>\n\n <strong>Name</strong> : ${name}\n <strong>Email</strong> : ${email} \n <strong>Message</strong> : ${message}\n <strong>Ip</strong> : ${ip}`,
        parse_mode: "HTML",
      }
    );
    res.status(StatusCodes.CREATED).json({
      success: true,
      msg: "Your message has been successfully sent",
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      msg: "An error occured while sending your message, please try again",
    });
  }
};

const getComments = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, data: "Get All Comments" });
};

const getComment = async (req, res ) => {
  res.status(StatusCodes.OK).json({success : true, data : "Get a single comment"})
}

export { sendComments, getComments, getComment };
