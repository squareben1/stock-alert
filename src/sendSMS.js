require("dotenv").config();

var AWS = require("aws-sdk");
var SNS = new AWS.SNS();

sendSMS = async (message = "Test SMS") => {
  var params = {
    PhoneNumber: `${process.env.MOBILE_NUMBER}`,
    Message: message,
  };

  return new Promise(function (resolve, reject) {
    console.log("sendSMS.Promise");
    SNS.publish(params, function (err, data) {
      console.log("SMS MessageID is " + data.MessageId);
      if (err) {
        console.log("Error in sendSMS: ", err);
        reject(err);
      } else {
        console.log("Success in sendSMS:", data);
        resolve(data);
      }
    });
  });
};

module.exports = sendSMS;
