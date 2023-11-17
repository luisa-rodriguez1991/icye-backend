const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const nodemailer = require('nodemailer');
app.use(cors({
  origin: '*'
}));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

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
        
        <!-- Start container for logo -->
        <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
          <tbody>
            <tr>
              <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">
    
                <!-- Your logo is here -->
                <img style="width: 180px; max-width: 180px; text-align: center; color: #ffffff;" alt="Logo" src="https://www.icyecolombia.com/assets/img/icye_logo.png" align="center" width="180">
    
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End container for logo -->
    
        <!-- Hero image -->
        <img style="width: 600px; max-width: 600px; text-align: center;" alt="Hero image" src="https://www.icyecolombia.com/assets/img/portada_bg.jpg" align="center" width="600" >
        <!-- Hero image -->
    
        <!-- Start single column section -->
        <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
            <tbody>
              <tr>
                <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">

                ${newsletter ? (`
                <h1 style="font-size: 22px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 700; text-decoration: none; color: #011F7F;">
                  
                Bienevenido a ICYE Colombia Newsletter
                
                </h1>

                <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                                
                 Gracias por inscribirte a nuestro Newsletter
                </p> 

                `) : (`
                    <tr>
                        <h1 style="font-size: 22px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 700; text-decoration: none; color: #011F7F;">
                            Hola!, ${data.firstname} ${data.lastname}
                        </h1>
                        ${data.programm ? (`
                            <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                                Gracias por tu interes en nuestro programa 
                            </p> 
                            <p style="font-size: 16px; line-height: 20px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                                ${data.programm}
                            </p>    
                        `) : (`
                            <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                                Gracias por tu interes en nosotros, estaremos pronto en contacto.
                            </p>
                        `)}  
                    </tr>
                `)}
    
                 
                  <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                  Si tienes preguntas puedes contactarnos por via telefonica 
                   
                   </p>

                   <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                   
                    <a target="_blank" style="text-decoration: underline; color: #000000;" href="tel:+57 310 7346918  Telefono"> +57 310 7346918</a>
                    </p>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End single column section -->
          
         
    
          <!-- Start footer -->
          <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #DFE3EF;" width="600">
            <tbody>
              <tr>
                <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
    
                  <!-- Your inverted logo is here -->
                  <img style="width: 180px; max-width: 180px; text-align: center; color: #ffffff;" alt="Logo" src="https://www.icyecolombia.com/assets/img/icye_logo.png" align="center" width="180" >
    
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
                    LEGAL NAME TODO
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
        
        <!-- Start container for logo -->
        <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
          <tbody>
            <tr>
              <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">
    
                <!-- Your logo is here -->
                <img style="width: 180px; max-width: 180px; text-align: center; color: #ffffff;" alt="Logo" src="https://www.icyecolombia.com/assets/img/icye_logo.png" align="center" width="180">
    
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End container for logo -->
    
        <!-- Hero image -->
        <img style="width: 600px; max-width: 600px; text-align: center;" alt="Hero image" src="https://www.icyecolombia.com/assets/img/portada_bg.jpg" align="center" width="600" >
        <!-- Hero image -->
    
        <!-- Start single column section -->
        <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
            <tbody>
              <tr>
                <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">


                ${newsletter ? (`

              
                <h1 style="font-size: 22px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 700; text-decoration: none; color: #011F7F;">
                    Hola!, nuevo usuario para el Newsletter                     
                </h1>
                <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                    Email: ${data.email}
                </p>                                      
         

                    
                `) : (`
                
                


                <h1 style="font-size: 22px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 700; text-decoration: none; color: #011F7F;">
                  
                  ${data.programm ? ("Hola!, tenemos un nuevo interesado.") : ("Hola!, nuevo contacto.")}
                  
                  </h1>

                  
    
                  <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                  
                 Nombre: ${data.firstname} ${data.lastname}
                  </p> 
                  
                  ${data.programm  !== undefined ? (`
                        <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            Programa: ${data.programm}
                        </p>
                    `):""}
                   
                   <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                  
                  Telefono: ${data.phone}
                   </p>

                   <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                  
                   Email: ${data.email}
                    </p>

                    ${data.message !== undefined ? (`
                        <p style="font-size: 16px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                            Mensaje: ${data.message}
                        </p>
                    `):""}
                `)}



    
                  
    
                 
    
              
    
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End single column section -->
          
         
    
          <!-- Start footer -->
          <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #DFE3EF;" width="600">
            <tbody>
              <tr>
                <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
    
                  <!-- Your inverted logo is here -->
                  <img style="width: 180px; max-width: 180px; text-align: center; color: #ffffff;" alt="Logo" src="https://www.icyecolombia.com/assets/img/icye_logo.png" align="center" width="180" >
    
                  <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #011F7F;">
                  Carrera 15 No. 36-40 Bogotá D.C Direccion
                  </p>
    
                  <p style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #011F7F;">
                    <a target="_blank" style="text-decoration: underline; color: #011F7F;" href="icyecol@icyecolombia.com">
                    icyecol@icyecolombia.com Pagina web

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
                    LEGAL NAME TODO
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

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'lrodriguezm1991@gmail.com',
        pass:'mhun vhhm nybq dysr'
      }
  
});
  
app.post('/contact', (req, res) => {

    const mailOptionsUser = {
        from: 'lrodriguezm1991@gmail.com',
        to: JSON.stringify(req.body.email),
        subject: 'Thanks for your Interest in ICYE',
        html: templateUserConfirmation(req.body, false)
      };
      

      const mailOptionsICYE = {
        from: 'lrodriguezm1991@gmail.com',
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


app.post('/form', (req, res) => {

    const mailOptionsUser = {
        from: 'lrodriguezm1991@gmail.com',
        to: JSON.stringify(req.body.email),
        subject: 'Hola, Gracias por tu inscripcion al programa'+ req.body.programm,
        html: templateUserConfirmation(req.body, false)
      };
      

      const mailOptionsICYE = {
        from: 'lrodriguezm1991@gmail.com',
        to: 'lrodriguezm1991@gmail.com',
        subject: 'Hola, alguien solicito unirse al programa'+ req.body.programm,
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
        subject: 'Gracias por inscribirte a nuestro Newsletter',
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






