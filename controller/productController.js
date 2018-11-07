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
exports.getProduct = function(req, res) {
  //'find' is an abstraction of 'find' method from mongodb
  id = req.params.productId;
  res.json({ name: 'Galletas de Mantequilla',
  productId: id,
  brand: 'Costa',
  barcode: 7802215505294 ,
  picture: 'idPicture' });
}

//PUT - Update product
exports.updateProduct = function(req, res){
  productId = req.params.productId;
  name = req.params.name;
  brand = req.params.brand;
  barcode = req.params.barcode;
  picture = req.params.picture;
  res.json({ message: 'Updated product', ProductId: productId});
}
//POST - Add Product
exports.addProduct = function(req, res) {
  console.log(req.body);
  //User model instance
  var product = new Product({
    productId: req.body.id,
    name: req.body.name,
    brand: req.body.brand,
    barcode: req.body.barcode,
    picture: req.body.picture
  })
