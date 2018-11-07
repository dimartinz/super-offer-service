var mongoose = require('mongoose')
//var Product = mongoose.model('Product')

//POST - AddUser
/*exports.addUser = function(req, res) {
  console.log(req.body);

  //User model instance
  var user = new User({
    name: req.body.name,
    email: req.body.email
  })

  //'save' method is an abstraction of 'insert' method from mongodb
  user.save(function(err, user) {
    if(err) return res.send(400, err.message)
    res.status(200).jsonp(user)
  })
}*/

//GET - Show product id
/*exports.getOffer = function(req, res) {
  //'find' is an abstraction of 'find' method from mongodb
  id = req.params.productId;
  res.json({ productId: product_id,
  SuperId: super_id,
  OfferType: offer_id,
  OfferInput: offer_in,
  EndDate: end_date
  });
}

//PUT - Update product
exports.updateOffer = function(req, res){
  productId = product_id,
  SuperId = super_id,
  OfferType = offer_id,
  OfferInput = offer_in,
  EndDate = end_date
  res.json({ message: 'Updated Offer', ProductId: productId});
}
//POST - Add Product
exports.addOffer = function(req, res) {
  console.log(req.params);
  //User model instance
  var product = new Product({
    productId: req.params.productId,
    SuperId: req.params.super_id,
    OfferType: req.params.offer_id,
    OfferInput: req.params.offer_in,
    EndDate: req.params.end_date
  })
  res.json({ message: 'Offer Created', ProductId: productId});
}*/

exports.offer_create = function (req, res) {
  let offer = new Offer (
    {
      id: req.body.id,
      ProductId: req.body.productId,
      SuperId: req.body.superId,
      OfferType: req.body.offerType,
      OfferInput: req.body.offerInput,
      EndDate: req.body.endDate
    }
  );

  offer.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Offer Created Successfully')
  })
};

exports.offer_details = function (req, res) {
  Offer.findById(req.params.id, function (err, offer) {
    if (err) return next(err);
    res.send(offer);
  })
};

exports.offer_update = function (req, res) {
  Offer.findByIdAndUpdate(req.params.id, {$set: req.body},
  function (err, offer) {
    if (err) return next(err);
    res.send('Offer Updated Successfully');
  });
};
