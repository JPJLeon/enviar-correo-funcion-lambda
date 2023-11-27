# enviar-correo-funcion-lambda
Código de ejemplo para enviar un correo por medio de AWS.

El archivo principal es el index. El archivo de test realiza una prueba llamando al archivo index con datos de prueba.

En el archivo index, "Source" debe ser un correo que sea una identidad verificada en AWS. 

Para hacer uso de este código en su propia función lambda debe clonar el repositorio y ejecutar un "npm install" para instalar la librería "aws-sdk", de lo contrario la función no podrá ser ejecutada.
