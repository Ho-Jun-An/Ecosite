
function sendNewsletter()
{
    import createTransport from 'nodemailer';
    import sendMail from 'nodemailer';

    var transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'ecositenewsletter@gmail.com',
            pass: '(8F*Ep8rh94$'
        }
    });

    var mailOptions = {
        from: 'ecositenewsletter@gmail.com',
        to: 's10194072@connect.np.edu.sg',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
