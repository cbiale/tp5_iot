# tcpdump

## Captura de pantalla

Se muestra una captura de pantalla parcial de la ejecución de `tcpdump`:

![](./imagenes/imagen_parcial.png)


## Pasos 

Se va a realizar una captura de paquetes con tcpdump, para ello se obtienen las interfaces:

```
$ sudo tcpdump -D
1.docker_gwbridge [Up, Running]
2.vethea0fdcc [Up, Running]
3.wlp2s0 [Up, Running]
4.veth6b6e6e0 [Up, Running]
5.veth46398a2 [Up, Running]
6.veth98fc9c6 [Up, Running]
7.vethd6045e9 [Up, Running]
8.veth7ac151d [Up, Running]
9.veth12de929 [Up, Running]
10.lo [Up, Running, Loopback]
11.any (Pseudo-device that captures on all interfaces) [Up, Running]
12.virbr0 [Up]
13.docker0 [Up]
14.bluetooth-monitor (Bluetooth Linux Monitor) [none]
15.nflog (Linux netfilter log (NFLOG) interface) [none]
16.nfqueue (Linux netfilter queue (NFQUEUE) interface) [none]
17.bluetooth0 (Bluetooth adapter number 0) [none]
18.virbr0-nic [none]
```

Si especifica para capturar la interfaz docker_gwbridge, en el puerto 3001 donde se encuentra escuchando el backend y se solicita que se guarden los resultados en el archivo `prueba_tcpdump.pcap`:

```
$ sudo tcpdump --interface docker_gwbridge -w prueba_tcpdump.pcap -nn port 3001
tcpdump: listening on docker_gwbridge, link-type EN10MB (Ethernet), capture size 262144 bytes
^C19 packets captured
19 packets received by filter
0 packets dropped by kernel
```

Mientras se ejecuta se prueba de ingresar al sistema con los datos de un usuario existente, luego de ello se cancela la captura con `Ctrl-C`. El proceso muestra que se capturaron 19 paquetes, para ver el contenido en formato ASCII se ejecuta:

```
$ tcpdump  -A -r prueba_tcpdump.pcap
reading from file prueba_tcpdump.pcap, link-type EN10MB (Ethernet)
14:40:11.452732 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [S], seq 870273313, win 65495, options [mss 65495,sackOK,TS val 2060532843 ecr 0,nop,wscale 7], length 0
E..<..@.@.@.............3.Q!........X\.........
z.<k........
14:40:11.452830 IP 172.21.0.2.3001 > localhost.38340: Flags [S.], seq 1193891712, ack 870273314, win 64308, options [mss 1410,sackOK,TS val 121302359 ecr 2060532843,nop,wscale 7], length 0
E..<..@.?...............G)W.3.Q"...4+G.........
.:.Wz.<k....
14:40:11.452856 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [.], ack 1193891713, win 512, options [nop,nop,TS val 2060532843 ecr 121302359], length 0
E..4..@.@.@.............3.Q"G)W.....XT.....
z.<k.:.W
14:40:11.453322 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [P.], seq 0:428, ack 1, win 512, options [nop,nop,TS val 2060532844 ecr 121302359], length 428
E.....@.@.?.............3.Q"G)W.....Z......
z.<l.:.WOPTIONS /api/v1/ingresar/ HTTP/1.1
Host: localhost:3001
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0
Accept: */*
Accept-Language: es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type
Referer: http://localhost:5000/ingresar
Origin: http://localhost:5000
Connection: keep-alive


14:40:11.453381 IP 172.21.0.2.3001 > localhost.38340: Flags [.], ack 429, win 501, options [nop,nop,TS val 121302360 ecr 2060532844], length 0
E..4..@.?...............G)W.3.R.....+?.....
.:.Xz.<l
14:40:11.454307 IP 172.21.0.2.3001 > localhost.38340: Flags [P.], seq 1:315, ack 429, win 501, options [nop,nop,TS val 121302361 ecr 2060532844], length 314
E..n..@.?...............G)W.3.R.....,y.....
.:.Yz.<lHTTP/1.1 204 No Content
vary: Origin, Access-Control-Request-Headers
access-control-allow-origin: *
access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
access-control-allow-headers: content-type
content-length: 0
Date: Thu, 17 Jun 2021 17:40:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5


14:40:11.454333 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [.], ack 315, win 510, options [nop,nop,TS val 2060532845 ecr 121302361], length 0
E..4..@.@.@.............3.R.G)X.....XT.....
z.<m.:.Y
14:40:11.454771 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [P.], seq 428:899, ack 315, win 512, options [nop,nop,TS val 2060532845 ecr 121302361], length 471
E.....@.@.>.............3.R.G)X.....Z+.....
z.<m.:.YPOST /api/v1/ingresar/ HTTP/1.1
Host: localhost:3001
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0
Accept: application/json, text/plain, */*
Accept-Language: es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Content-Type: application/json;charset=utf-8
Content-Length: 33
Origin: http://localhost:5000
Connection: keep-alive
Referer: http://localhost:5000/ingresar

{"id":"admin","password":"admin"}
14:40:11.454824 IP 172.21.0.2.3001 > localhost.38340: Flags [.], ack 900, win 501, options [nop,nop,TS val 121302361 ecr 2060532845], length 0
E..4..@.?...............G)X.3.T.....+?.....
.:.Yz.<m
14:40:11.495046 IP 172.21.0.2.3001 > localhost.38340: Flags [P.], seq 315:702, ack 900, win 501, options [nop,nop,TS val 121302401 ecr 2060532845], length 387
E.....@.?..z............G)X.3.T.....,......
.:..z.<mHTTP/1.1 200 OK
vary: Origin
access-control-allow-origin: *
content-type: application/json; charset=utf-8
content-length: 170
Date: Thu, 17 Jun 2021 17:40:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"estado":"ok","administrador":true,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjIzOTUxNjExfQ.JCMVjWP2Otno2na1ToSo0vsdlFBh1_R34fxeOdCsDpw"}
14:40:11.495088 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [.], ack 702, win 509, options [nop,nop,TS val 2060532886 ecr 121302401], length 0
E..4..@.@.@.............3.T.G)Z>....XT.....
z.<..:..
14:40:11.583566 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [P.], seq 899:1332, ack 702, win 512, options [nop,nop,TS val 2060532974 ecr 121302401], length 433
E.....@.@.?.............3.T.G)Z>....Z......
z.<..:..OPTIONS /api/v1/dispositivos HTTP/1.1
Host: localhost:3001
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0
Accept: */*
Accept-Language: es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Access-Control-Request-Method: GET
Access-Control-Request-Headers: authorization
Referer: http://localhost:5000/admin/mapa
Origin: http://localhost:5000
Connection: keep-alive


14:40:11.583658 IP 172.21.0.2.3001 > localhost.38340: Flags [.], ack 1333, win 501, options [nop,nop,TS val 121302490 ecr 2060532974], length 0
E..4..@.?...............G)Z>3.VV....+?.....
.:..z.<.
14:40:11.584354 IP 172.21.0.2.3001 > localhost.38340: Flags [P.], seq 702:1017, ack 1333, win 501, options [nop,nop,TS val 121302491 ecr 2060532974], length 315
E..o..@.?...............G)Z>3.VV....,z.....
.:..z.<.HTTP/1.1 204 No Content
vary: Origin, Access-Control-Request-Headers
access-control-allow-origin: *
access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
access-control-allow-headers: authorization
content-length: 0
Date: Thu, 17 Jun 2021 17:40:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5


14:40:11.584382 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [.], ack 1017, win 510, options [nop,nop,TS val 2060532975 ecr 121302491], length 0
E..4..@.@.@.............3.VVG)[y....XT.....
z.<..:..
14:40:11.585220 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [P.], seq 1332:1855, ack 1017, win 512, options [nop,nop,TS val 2060532976 ecr 121302491], length 523
E..?..@.@.>.............3.VVG)[y....Z_.....
z.<..:..GET /api/v1/dispositivos HTTP/1.1
Host: localhost:3001
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0
Accept: application/json, text/plain, */*
Accept-Language: es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjIzOTUxNjExfQ.JCMVjWP2Otno2na1ToSo0vsdlFBh1_R34fxeOdCsDpw
Origin: http://localhost:5000
Connection: keep-alive
Referer: http://localhost:5000/admin/mapa


14:40:11.585327 IP 172.21.0.2.3001 > localhost.38340: Flags [.], ack 1856, win 501, options [nop,nop,TS val 121302492 ecr 2060532976], length 0
E..4..@.?...............G)[y3.Xa....+?.....
.:..z.<.
14:40:11.600422 IP 172.21.0.2.3001 > localhost.38340: Flags [P.], seq 1017:1587, ack 1856, win 501, options [nop,nop,TS val 121302507 ecr 2060532976], length 570
E..n..@.?...............G)[y3.Xa....-y.....
.:..z.<.HTTP/1.1 200 OK
vary: Origin
access-control-allow-origin: *
content-type: application/json; charset=utf-8
content-length: 353
Date: Thu, 17 Jun 2021 17:40:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"_id":"9892d644b7b377b407b57366af0002ff","_rev":"14-87f33210775fe45e235c481962b17f93","denominacion":"Dispositivo 1","latitud":-27.9133,"longitud":-55.8249,"tiempo":5,"sensores":["temperatura-ambiente","humedad-suelo","humedad-ambiente"],"actuadores":["bomba-de-agua"],"reglas":["9892d644b7b377b407b57366af000df7","9892d644b7b377b407b57366af001b67"]}]
14:40:11.600462 IP cbiale-Lenovo-IdeaPad-S340-15API.38340 > 172.21.0.2.3001: Flags [.], ack 1587, win 508, options [nop,nop,TS val 2060532991 ecr 121302507], length 0
E..4..@.@.@.............3.XaG)].....XT.....
z.<..:..
```

Procedemos a ver el detalle del contenido en cuanto a mensajes:

En esta parte se puede ver la solicitud POST a la ruta `/api/v1/ingresar/` de `localhost:3001` desde `http://localhost:5000/ingresar` con los datos: `{"id":"admin","password":"admin"}`:

```
POST /api/v1/ingresar/ HTTP/1.1
Host: localhost:3001
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0
Accept: application/json, text/plain, */*
Accept-Language: es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Content-Type: application/json;charset=utf-8
Content-Length: 33
Origin: http://localhost:5000
Connection: keep-alive
Referer: http://localhost:5000/ingresar

{"id":"admin","password":"admin"}
```

La respuesta del servidor se puede ver en:

```
HTTP/1.1 200 OK
vary: Origin
access-control-allow-origin: *
content-type: application/json; charset=utf-8
content-length: 170
Date: Thu, 17 Jun 2021 17:40:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"estado":"ok","administrador":true,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjIzOTUxNjExfQ.JCMVjWP2Otno2na1ToSo0vsdlFBh1_R34fxeOdCsDpw"}
```

Aquí se puede ver el token JWT enviado por el servidor. Luego se ve la solicitud que se realiza una vez ingresado al sistema:

```
GET /api/v1/dispositivos HTTP/1.1
Host: localhost:3001
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0
Accept: application/json, text/plain, */*
Accept-Language: es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjIzOTUxNjExfQ.JCMVjWP2Otno2na1ToSo0vsdlFBh1_R34fxeOdCsDpw
Origin: http://localhost:5000
Connection: keep-alive
Referer: http://localhost:5000/admin/mapa
```

Con la respuesta del servidor correspondiente, que es un listado de los dispositivos definidos en el sistema:

```
HTTP/1.1 200 OK
vary: Origin
access-control-allow-origin: *
content-type: application/json; charset=utf-8
content-length: 353
Date: Thu, 17 Jun 2021 17:40:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"_id":"9892d644b7b377b407b57366af0002ff","_rev":"14-87f33210775fe45e235c481962b17f93","denominacion":"Dispositivo 1","latitud":-27.9133,"longitud":-55.8249,"tiempo":5,"sensores":["temperatura-ambiente","humedad-suelo","humedad-ambiente"],"actuadores":["bomba-de-agua"],"reglas":["9892d644b7b377b407b57366af000df7","9892d644b7b377b407b57366af001b67"]}]
```

**Conclusión**: el contenido de los mensajes es visible desde el exterior, se debe cambiar el esquema de seguridad pasando en primer lugar a usar el protocolo https en lugar de http.
