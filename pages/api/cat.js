import axios from 'axios';

const handler = async (req, res) => {
  const { searchTerm } = req.query;
  try {
    axios.defaults.headers.common['x-api-key'] = process.env.CAT_API_KEY; // Replace this with your API Key

    const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
      params: { limit: 1, size: 'full' },
    }); // Ask for 1 Image, at full resolution

    const image = response.data[0];

    res.setHeader('Content-Type', 'image/jpg');
    res.send(image);
  } catch (err) {
    console.log(err);
  }
};

export default handler;