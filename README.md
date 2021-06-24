# Trabajo Práctico 5

## Testing de seguridad

Las pruebas de seguridad intentan verificar que una implementación protege los datos y mantiene la funcionalidad según lo previsto, revelando fallas del sistema bajo prueba. 

### Tipos de pruebas

Dentro de los tipos de pruebas a realizar se pueden enumerar:

- Prueba de interfaz: tiene como objetivo las interfaces que interactúan con usuarios o dispositivos externos, dado que pueden existir vulnerabilidades importantes en una aplicación si sus mecanismos de validación de entradas no existen o no funcionan de manera adecuada.
- Pruebas de transporte: se enfocan en problemas de uso indebido y fallas de diseño en protocolos de comunicación y esquemas criptográficos débiles. 
- Pruebas del sistema: examinan el firmware, los sistemas operativos y del sistema en busca de fallas de implementación, configuraciones inseguras del sistema y otros tipos de vulnerabilidades.

## Caso de uso

- [Selenium](selenium/README.md): Ejemplo de test usando `Selenium` para verificar el funcionamiento de navigabilidad de la pantalla de ingreso al ingresar con distintas opciones usuario y clave *(Se controla por URL pero se puede analizar de controlar por mensaje mostrado en los casos de error)*.
- [tcpdump](tcpdump/README.md): Ejemplo de control de tráfico usando `tcpdump` para ver de detectar mensajes sensibles con el objetivo de obtener usuario y clave para ingresar al sistema.
- [npm-check](npm-check/README.md): Ejemplo de uso de `npm-check` que comprueba si hay dependencias de terceros desactualizadas, incorrectas y no utilizadas.
- [npm-audit](npm-audit/README.md): Ejemplo de uso de `npm audit` que comprueba si las dependencias de terceros están actualizadas y son seguras.
- [jsinspect](jsinspect/README.md): Detecta código JavaScript copiado pegado y estructuralmente similar.
- [DeepSource](deepsource/README.md): Ejemplo de uso de `Deepsource` una herramienta de revisión de código automatizada que permite monitorear un proyecto ubicado en Github, Gitlab o Bitbucket.
- [Test API](apitest/README.md): Ejemplo de test sobre la API de conexión al proyecto final.







