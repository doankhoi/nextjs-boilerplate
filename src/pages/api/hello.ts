import { NextApiHandler } from "next";

const Hello: NextApiHandler = (req, res) => {
  res.status(200).json({
    message: "Hello message",
  });
};

export default Hello;
