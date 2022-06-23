const { Comment } = require('../models')

const commentdata = [
    {
    comment_text: "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas",
    user_id: 1,
    post_id: 1
  }, {
    comment_text: "vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
    user_id: 2,
    post_id: 2
  }, {
    comment_text: "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada",
    user_id: 3,
    post_id: 3
  }, {
    comment_text: "mauris eget massa tempor convallis nulla neque libero convallis eget",
    user_id: 4,
    post_id: 4
  }, {
    comment_text: "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
    user_id: 5,
    post_id: 5
  }, {
    comment_text: "porttitor lacus at turpis donec",
    user_id: 6,
    post_id: 6
  }, {
    comment_text: "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
    user_id: 7,
    post_id: 7
  }, {
    comment_text: "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
    user_id: 8,
    post_id: 8
  }, {
    comment_text: "nec condimentum neque sapien placerat ante nulla",
    user_id: 9,
    post_id: 9
  }, {
    comment_text: "luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",
    user_id: 10,
    post_id: 10
  }]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;