const nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({
    // enter your email service provider name
    service:"hotmail", 
    auth:{
        // enter your email id and password
        user:"**********@hotmail.com",
        pass:"**********"
    }
});

const options={
    // your email address
    from:"**********@hotmail.com",
    // receiver's email address
    to:"**********@gmail.com",
    subject:"Mail a friend assignment using nodemailer",
    text:"This mail is sent using Nodemailer"
};

transporter.sendMail(options,function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Email sent");
    console.log("Sender: "+options.from);
    console.log("Receiver: "+options.to);
})