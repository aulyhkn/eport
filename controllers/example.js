class ExampleController {
  index(request, response, next){
    return response.status(200).send({
      'message': 'hello world'
    });
  }
}


module.exports = new ExampleController();