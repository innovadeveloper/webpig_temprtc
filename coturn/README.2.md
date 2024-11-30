### Instrucciones
- Construir la imagen docker
- Correr con docker-compose
- Acceder al shell del contenedor e interactuar con la cli
```shell
docker exec -it coturn-coturn-1 bash

> test@test-VirtualBox:~$ docker exec -it coturn-coturn-1 bash
root@test-VirtualBox:/# nc localhost 5766
TURN Server
Coturn-4.5.2 'dan Eider'

Type '?' for help
Enter password:
qwerty
    > ps

        1) id=001000000000000038, user <kbaltazar>:
        realm: 148.102.73.5
        started 57 secs ago
        expiring in 543 secs
        client protocol UDP, relay protocol UDP
        client addr 192.168.1.130:60998, server addr 0.0.0.0:3478
        relay addr 192.168.1.5:14938
        fingerprints enforced: OFF
        mobile: OFF
        usage: rp=4, rb=260, sp=3, sb=316
        rate: r=0, s=0, total=0 (bytes per sec)

        2) id=001000000000000039, user <kbaltazar>:
        realm: 148.102.73.5
        started 13 secs ago
        expiring in 587 secs
        client protocol UDP, relay protocol UDP
        client addr 192.168.1.130:55689, server addr 0.0.0.0:3478
        relay addr 192.168.1.5:11816
        fingerprints enforced: OFF
        mobile: OFF
        usage: rp=4, rb=260, sp=3, sb=316
        rate: r=0, s=0, total=0 (bytes per sec)  
```