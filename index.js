/*
    https://fcm.googleapis.com/v1/{parent=projects/*}/messages:send
    AAAAy1oZce8:APA91bE_l4CujTSaK87j5wqkB2sYee68EwP5KwNrPkFjyeLnlxG1ye0WUP5OMmPU0R0OPE2U0F0bzKmEeIaQ_Jlc-AmoVXkPq_UjMEalaHj5FaDP_gnRqlTZENnnQrErIPsMGepb1VLxbfKSo0B4FeLQxJop4sJMzw
*/


var admin = require('firebase-admin');

var serviceAccount = require('./weplay-16222-firebase-adminsdk-xzg1h-5742d52773.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://weplay-16222.firebaseio.com'
});


registrationToken = 'crkFEho9Rak:APA91bEOeOncO6nBrSNdykzVOoCNSJ5_n1TKtNzGGQ4AWD9R1Ijp1R5k5bGXuYndndMSR6cdVOigb5bOvG9NkD6O4Hb-1Y4igq-ajz4Eo6ra01tWDrVQrlXtTCNypVd0jA-8NbaMmCrS891y25I4VvF9dUZhE_Xijw';

var message = {
    data: {
      score: '850',
      time: '2:45'
    },
    token: registrationToken
  };

admin.messaging().send(message)
.then((response) => {
    console.log('Successfully sent message:', response);
})
.catch((error) => {
    console.log('Error sending message:', error);
});
  
