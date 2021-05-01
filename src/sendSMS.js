require("dotenv").config();

var AWS = require("aws-sdk");
var SNS = new AWS.SNS();

sendSMS = async (message = "Test SMS") => {
  var params = {
    PhoneNumber: `${process.env.MOBILE_NUMBER}`,
    Message: message,
  };

  return new Promise(function (resolve, reject) {
    console.info("sendSMS.Promise");
    SNS.publish(params, function (err, data) {
      console.info("SMS MessageID is " + data.MessageId);
      if (err) {
        console.error("Error in sendSMS: ", err);
        reject(err);
      } else {
        console.info("Success in sendSMS:", data);
        resolve(data);
      }
    });
  });
};

module.exports = sendSMS;
