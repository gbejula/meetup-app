import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MOngoClient.connect(
      'mongodb+srv://gbenga:gbenga123@cluster0.m48q7.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();
  }
}

export default handler;
