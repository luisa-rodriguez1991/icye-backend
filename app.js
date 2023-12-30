const express = require('express')
var cors = require('cors')
const app = express()
const nodemailer = require('nodemailer');
app.use(cors({
  origin: '*'
}));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user:'icyecol@icyecolombia.com',
      pass:'yxed mnqw svfe zvso'
    }

});

const templateUserConfirmation = (data, newsletter)=> {
    return `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    
        <!-- Your title goes here -->
        <title>Newsletter</title>
        <!-- End title -->
    
        <!-- Start stylesheet -->
        <style type="text/css">
          a,a[href],a:hover, a:link, a:visited {
            /* This is the link colour */
            text-decoration: none!important;
            color: #0000EE;
          }
          .link {
            text-decoration: underline!important;
          }
          p, p:visited {
            /* Fallback paragraph style */
            font-size:15px;
            line-height:24px;
            font-family:'Helvetica', Arial, sans-serif;
            font-weight:300;
            text-decoration:none;
            color: #000000;
          }
          h1 {
            /* Fallback heading style */
            font-size:22px;
            line-height:24px;
            font-family:'Helvetica', Arial, sans-serif;
            font-weight:normal;
            text-decoration:none;
            color: #000000;
          }
          .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
          .ExternalClass {width: 100%;}
        </style>
        <!-- End stylesheet -->
    
    </head>
    
      <!-- You can change background colour here -->
      <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
      
      <!-- Fallback force center content -->
      <div style="text-align: center;">
    
        <!-- Email not displaying correctly -->
        <table align="center" style="text-align: center; vertical-align: middle; width: 600px; max-width: 600px;" width="600">
          <tbody>
            <tr>
              <td style="width: 596px; vertical-align: middle;" width="596">
    
                <p style="font-size: 11px; line-height: 20px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #000000;">Is this email not displaying correctly? Write us <a class="link" style="text-decoration: underline;" target="_blank" href="icyecolombia.com/contact"><u>Click here</u></a></p>
    
              </td>
            </tr>
          </tbody>
        </table>

        
        <!-- Email not displaying correctly -->
        
       
        
    
        <!-- Hero image -->
        <img style="width: 600px; max-width: 600px; text-align: center;" alt="Hero image" src="https://www.icyecolombia.com/backend/mail/email.jpg" align="center" width="600" >
        <!-- Hero image -->
    
        <!-- Start single column section -->
        <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
            <tbody>
                ${newsletter ? (`
                <tr>
                    <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 0;" width="596">
                        <h1 style="font-size: 22px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 700; text-decoration: none; color: #011F7F;">
                        ${data.local==="es"?"Bienevenido a ICYE Colombia Newsletter":"Welcome to ICYE Colombia Newsletter"}
                        </h1>
                        <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                        ${data.local==="es"?"Gracias por inscribirte a nuestro Newsletter":"Thank you for subscribing to our newsletter"}
                        </p>
                    </td>
                </tr>
                `) : (`
                    <tr>
                        <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 0;" width="596">
                            <h1 style="font-size: 22px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 700; text-decoration: none; color: #011F7F;">
                            ${data.local==="es"?"Hola!, ":"Hi!, "} ${data.firstname} ${data.lastname} 
                            </h1>
                            <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            ${data.local==="es"?" Gracias por tu interes en nosotros, estaremos pronto en contacto.": "Thanks for your interest in us, we will get in touch soon"}
                            </p>
                        </td>
                    </tr>
                `)}

               

                ${data.local==="es" ? (`
                <tr>
                    <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 0px; padding-bottom: 40px;" width="596">
                        
        
                         <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            <a target="_blank" style="text-decoration: underline; color: #000000;" href="tel:+573107346918">
                                Llamanos al:  
                                +57 310 7346918
                            </a>
                         </p>  
                         <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            <a target="_blank" style="text-decoration: underline; color: #000000;" href="https://wa.link/2bk6ie">
                            Escribenos al whatsapp:  
                             +57 310 7346918
                             </a>
                         </p>
                    </td>
                </tr>`):(`
                <tr>
                    <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 0px; padding-bottom: 40px;" width="596">
                        
        
                         <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            <a target="_blank" style="text-decoration: underline; color: #000000;" href="tel:+573107346918">
                                Call us :
                                +57 310 7346918
                            </a>
                         </p>  
                         <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            <a target="_blank" style="text-decoration: underline; color: #000000;" href="https://wa.link/2bk6ie">
                             Write us on Whatsapp :
                             +57 310 7346918
                             </a>
                         </p>
                    </td>
                </tr>`)}

            </tbody>
          </table>
          <!-- End single column section -->
          
         
    
          <!-- Start footer -->
          <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #DFE3EF;" width="600">
            <tbody>
              <tr>
                <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
    
                  <!-- Your inverted logo is here -->
                  <img style="width: 180px; max-width: 180px; text-align: center; color: #ffffff;" alt="Logo" src="https://www.icyecolombia.com/backend/mail/logoCompuesto.png" align="center" width="180" >
    
                  <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #011F7F;">
                  Carrera 15 No. 36-40 Bogotá D.C
                  </p>
    
                  <p style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #011F7F;">
                    <a target="_blank" style="text-decoration: underline; color: #011F7F;" href="icyecol@icyecolombia.com">
                    icyecol@icyecolombia.com

                    </a>
                  </p>
    
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End footer -->
        
          <!-- Start unsubscribe section -->
          <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px;" width="600">
            <tbody>
              <tr>
                <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
                  
                  <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #000000;">
                    ICYE Colombia
                  </p>
    
                
    
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End unsubscribe section -->
      
      </div>
    
      </body>
    
    </html>`
}

const templateICYEConfirmation = (data, newsletter)=> {
    return `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>   
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    
        <!-- Your title goes here -->
        <title>Newsletter</title>
        <!-- End title -->
    
        <!-- Start stylesheet -->
        <style type="text/css">
          a,a[href],a:hover, a:link, a:visited {
            /* This is the link colour */
            text-decoration: none!important;
            color: #0000EE;
          }
          .link {
            text-decoration: underline!important;
          }
          p, p:visited {
            /* Fallback paragraph style */
            font-size:15px;
            line-height:24px;
            font-family:'Helvetica', Arial, sans-serif;
            font-weight:300;
            text-decoration:none;
            color: #000000;
          }
          h1 {
            /* Fallback heading style */
            font-size:22px;
            line-height:24px;
            font-family:'Helvetica', Arial, sans-serif;
            font-weight:normal;
            text-decoration:none;
            color: #000000;
          }
          .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
          .ExternalClass {width: 100%;}
        </style>
        <!-- End stylesheet -->
    
    </head>
      <!-- You can change background colour here -->
      <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
      
      <!-- Fallback force center content -->
      <div style="text-align: center;">
    
        <!-- Start container for logo -->
        <table  align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
          <tbody>
            <tr>
              <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">
                <img style="width: 180px; max-width: 180px; text-align: center; color: #ffffff;" alt="Logo" src="https://www.icyecolombia.com/backend/mail/logoSlogan.png" align="center" width="180">
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Start single column section -->
        <table align="center" style="text-align: center; margin:0 auto; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
            <tbody style="margin:0 auto;">
              <tr style="margin:0 auto;">
                <td style="width: 596px; margin:0 auto; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">
                  <h1 style="
                    font-size: 22px; 
                    line-height: 24px; 
                    font-family: 'Helvetica', Arial, sans-serif; 
                    font-weight: 700; 
                    text-decoration: none; 
                    color: #011F7F;">
                    Hola! ICYE Colombia
                </h1>
                
                 ${data.customerType && (`<p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 800; text-decoration: none; color: #919293;">
                    Tipo de solicitud: ${data.customerType}
                </p> `)}
             
                ${data.local && (`<p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                    Idioma: ${data.local}
                </p> `)} 

               
                  
                  ${data.programm===undefined?(""):(
                    `<p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                        Programa: ${data.programm}
                    </p>`
                ) }

                ${data.country===undefined?(""):(
                  `<p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                  Pais: ${data.country}
                  </p>`
              ) }
                   
                  ${data.phone && (
                    `<p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                        Telefono: ${data.phone}
                    </p>`
                )}

                   ${data.email && (
                        `<p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            Email: ${data.email}
                        </p>`
                    )}

                    ${data.message && (
                        `<p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            Mensaje: ${data.message}
                        </p>`
                    )}
                 
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      </body>
    </html>`
}

app.post('/form', (req, res) => {
  const locale = req.body.local
  const resp = locale==="es"?"Gracias por tu interes en ICYE":"Thanks for your Interest in ICYE"
    const mailOptionsUser = {
        from: 'ICYE Colombia <icyecol@icyecolombia.com>',
        to: JSON.stringify(req.body.email),
        subject:resp,
        html: templateUserConfirmation(req.body, false)
      };

      const mailOptionsICYE = {
        from: 'ICYE Colombia <icyecol@icyecolombia.com>',
        to: 'lrodriguezm1991@gmail.com',
        subject: 'Hola, nuevo contacto',
        html: templateICYEConfirmation(req.body, false)
      };



     transporter.sendMail(mailOptionsICYE, function(error, info){
       if (error) {
         console.log(error);
       } else {
            transporter.sendMail(mailOptionsUser, function(error, info){
                if (error) {
                 console.log(error);
               } else {
                 res.sendStatus(200)
               }
             });
       }
     });



})

app.post('/newsletter', (req, res) => {


    const mailOptionsUser = {
        from: 'lrodriguezm1991@gmail.com',
        to: JSON.stringify(req.body.email),
        subject:req.body.local==="es" ? "Gracias por inscribirte a nuestro Newsletter":"Thank you for subscribing to our newsletter",
        html: templateUserConfirmation(req.body, true)
      };
     


      const mailOptionsICYE = {
        from: 'lrodriguezm1991@gmail.com',
        to: 'lrodriguezm1991@gmail.com',
        subject: 'Hola, alguien solicito unirse al Newsletter',
        html: templateICYEConfirmation(req.body, true)
      };

      transporter.sendMail(mailOptionsICYE, function(error, info){
        if (error) {
          console.log(error);
        } else {
            



            transporter.sendMail(mailOptionsUser, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  res.sendStatus(200)
                }
              });






        }
      });
    
    
})

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})






