const { Post } = require('../models')

const postdata = [
    {
    title: "morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
    post_url: "http://dummyimage.com/159x100.png/ff4444/ffffff",
    user_id: 1
  }, {
    title: "in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet",
    post_url: "http://dummyimage.com/200x100.png/ff4444/ffffff",
    user_id: 2
  }, {
    title: "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
    post_url: "http://dummyimage.com/244x100.png/ff4444/ffffff",
    user_id: 3
  }, {
    title: "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi",
    post_url: "http://dummyimage.com/206x100.png/dddddd/000000",
    user_id: 4
  }, {
    title: "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
    post_url: "http://dummyimage.com/114x100.png/cc0000/ffffff",
    user_id: 5
  }, {
    title: "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio",
    post_url: "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
    user_id: 6
  }, {
    title: "enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
    post_url: "http://dummyimage.com/145x100.png/ff4444/ffffff",
    user_id: 7
  }, {
    title: "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
    post_url: "http://dummyimage.com/120x100.png/ff4444/ffffff",
    user_id: 8
  }, {
    title: "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
    post_url: "http://dummyimage.com/150x100.png/dddddd/000000",
    user_id: 9
  }, {
    title: "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero",
    post_url: "http://dummyimage.com/237x100.png/dddddd/000000",
    user_id: 10
  }
]

const seedPosts = () => Post.bulkCreate(postdata)

module.exports = seedPosts