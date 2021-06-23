
# DeepSource

## Propósito y Enlace 

Detecta código JavaScript copiado pegado y estructuralmente similar.

Enlace: [DeepSource](https://deepsource.io/)

## Configuración y ejemplo de uso

Se debe instalar `DeepSource` en `Github`, es posible en un repositorio en particular o en todos los repositorios, en la siguiente figura se puede ver que he seleccionado solo instalar en el repositorio de mi proyecto final de la especialización:

![](imagenes/captura_seleccion_proyecto.png)

Las opciones completas en cuanto a permisos son:

![](imagenes/captura_seleccion_proyecto_todo.png)

Es posible determinar que *issues* son de mayor importancia:

![](imagenes/seleccion_opciones.png)

Generar el archivo `.deepsource.toml` que debe ubicarse en el directorio raíz del proyecto, donde la herramienta detecta inicialmente de forma automática los lenguajes utilizados:

![](imagenes/seleccion_opciones_final.png)

> No tiene como framework soportado a `Svelte`, por ende esos archivos no van a ser evaluados

Una vez realizado el análisis muestra una pantalla con el resultado:

![](imagenes/captura_resultado_control.png)

En el apartado de *issues* se puede ver un detalle de cada "problema" detectado:

![](imagenes/listado_issues.png)

Divide las *issues* en:
- Recomendada
- Anti-patrón
- Riesgo de bug

Si se hace clic en alguna de las *issues* listadas se accede a un detalle de la misma, donde se muestran las ocurrencias y una descripción del problema:

![](imagenes/issue_ocurrencia.png)

![](imagenes/issue_descripcion.png)






