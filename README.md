
# Capacitor Challenge

Challenge en capacitor 

El objetivo será integrar al menos 3 plugins de Capacitor sobre la aplicación. Los casos de
uso son totalmente libres, pero se debe reflejar la funcionalidad en las plataformas Web y
Android. Algunos ejemplos de uso pueden ser:
* Presentar alertas a través de Capacitor Toast
* Usar Capacitor Geolocation para capturar las coordenadas durante el login.
* Usar Capacitor Share para compartir la imagen de un héroe.
* Actualizar la imagen de un héroe con una foto de galería (Filesystem) o de la cámara
(Camera)

# Soluciones

 1. Añadido Toast, valida en que plataforma se encuentra y muestra un snackbar en la web y un toast en mobile android en 'NewPageComponent'
 2. Añadido paquete de geolocalizacion en 'LoginPageComponent', valida permisos, e imprime en consola las coordendas
 3. Añadido paquete Share para compartir informacion del Heroes en 'HeroPageComponent'
 4. Añadido paquete de camara para cargar una foto del heroe desde la galeria desde android en 'NewPageComponent', simplemente es visual no actualiza el api ya que no habia un servicio para ello

# Obtener los archivos para publicación de la plataforma Web
* El compilado se encuentra en este directorio carpeta web/dist

# Obtener el archivo apk para la plataforma Android
* El apk se encuentra en la carpeta apk de este directorio

# (Opcional) Convertir el proyecto base Angular en un proyecto base Ionic
* La rama feature/add_ionic tiene la implentacion en base al proyecto con las soluciones antes mencionadas
* Adicional se implementa un ion button en el login para pruebas
