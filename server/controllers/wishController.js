const wishes = [
  {
    name: "Senegal",
    image:
      "https://cdn.pixabay.com/photo/2017/05/22/11/43/canoe-2333892_960_720.jpg"
  },
  {
    name: "Bali",
    image: "https://live.staticflickr.com/1618/23868445344_7bcd947154_b.jpg"
  }
];

const getWishes = (req, res) => {
  res.json(wishes);
};

const deleteWish = (req, res) => {
  const index = wishes.findIndex(wish => wish.name === req.params.name);
  wishes.splice(index, 1);
  res.json(wishes);
};

const addWish = (req, res) => {
  wishes.push(req.body);
  res.json(wishes);
};

module.exports = {
  getWishes,
  deleteWish,
  addWish
};
