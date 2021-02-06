exports.sendReqParam = (req, res) => {
    let product = req.params.product;
    res.send(`This is the page for ${product}`);
  };