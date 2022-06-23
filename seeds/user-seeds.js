const sequelize = require("../config/connection")
const { User, Post } = require('../models')

const userdata = [
    {
    username: "swasiela0",
    email: "imasi0@networkadvertising.org",
    password: "Q0U6AY75Taq"
  }, {
    username: "mbovis1",
    email: "rpaprotny1@arstechnica.com",
    password: "tKGxH5bu"
  }, {
    username: "tsharrier2",
    email: "tvonwelldun2@over-blog.com",
    password: "SfDlQsT"
  }, {
    username: "clepick3",
    email: "aribeiro3@craigslist.org",
    password: "1jFvx7IWELeh"
  }, {
    username: "twelton4",
    email: "agillingwater4@tmall.com",
    password: "LlJ590xoj8V"
  }, {
    username: "mlesor5",
    email: "lfeore5@hc360.com",
    password: "z4D1kIVVJTB"
  }, {
    username: "tquarmby6",
    email: "jmackilroe6@adobe.com",
    password: "BYO1haYX3FlC"
  }, {
    username: "jhedaux7",
    email: "btother7@telegraph.co.uk",
    password: "5dR14uPi"
  }, {
    username: "jcrosland8",
    email: "msinclair8@intel.com",
    password: "gbCEiTE2"
  }, {
    username: "cgellion9",
    email: "sdahler9@ucsd.edu",
    password: "NMnZ3o"
  }]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true})

module.exports = seedUsers
