import { ContactFormData } from "@/interfaces/ContactForm.interface";

export const contactEmailProductTemplate = ({
  name,
  lastName,
  phone,
  company,
  subject,
  message,
  email,
  product,
}: ContactFormData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin:0; padding:0; background-color:#fff; font-family: Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f3ef; padding:20px 0;">
    <tr>
      <td align="center">

        <!-- Contenedor principal -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#613924; padding:20px; text-align:center;">
              <img src="https://res.cloudinary.com/diqdogfwl/image/upload/v1773284199/banner-white_nx7oh1.png" 
                   alt="Ultrapan" 
                   style="max-width:180px; display:block; margin:0 auto;" />
            </td>
          </tr>

          <!-- BODY -->
            <tr>
              <td style="padding: 40px 30px; color: #333333">
                <h2 style="margin-top: 0; color: #6b3e26; text-align: center">
                  Han solicitado información adicional de: ${product}
                </h2>

                <p
                  style="margin-bottom: 8px; color: #6b3e26; text-align: center"
                >
                  Realizar el seguimiento de la persona con los siguientes datos: 
                </p>

                <table
                  width="100%"
                  cellpadding="8"
                  cellspacing="0"
                  border="0"
                  style="font-size: 14px; line-height: 1.6"
                >
                  <tr>
                    <td style="font-weight: bold; width: 150px">Nombre:</td>
                    <td>${name}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold">Apellido:</td>
                    <td>${lastName}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold">Correo:</td>
                    <td>${email}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold">Teléfono:</td>
                    <td>${phone}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold">Empresa:</td>
                    <td>${company}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold">Asunto:</td>
                    <td>${subject}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; vertical-align: top">
                      Mensaje:
                    </td>
                    <td
                      style="
                        background-color: #f9f9f9;
                        padding: 15px;
                        border-radius: 4px;
                      "
                    >
                      ${message}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          <!-- FOOTER -->
            <tr>
              <td
                style="
                  background-color: #613924;
                  padding: 25px;
                  text-align: center;
                  color: #ffffff;
                  font-size: 12px;
                "
              >
                <img
                  style="width: 180px; height: 50px"
                  src="https://res.cloudinary.com/diqdogfwl/image/upload/v1773284113/logo_d6d9ma.png"
                  alt="logo-enziquim"
                />
                <p style="margin: 0 0 8px 0">
                  ©${new Date().getFullYear()} Enzimas y Productos Químicos S.A. de C.V.
                </p>
              </td>
            </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
