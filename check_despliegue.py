import re

with open('app.js', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'despliegue\s*:\s*\[([\s\S]*?)\],\s*interfaces', text)
if not m:
    raise SystemExit('Could not find despliegue block in app.js')
block = m.group(1)
existing = re.findall(r'pregunta\s*:\s*"([^"]+)"', block)

user = [
    {"id": 1, "pregunta": "¿Qué protocolo utiliza vsftpd para conexiones cifradas?", "opciones": ["SMTP.", "SSL/TLS.", "HTTP."], "respuesta_correcta": "SSL/TLS."},
    {"id": 2, "pregunta": "¿Qué protocolo es utilizado para centralizar la autenticación en servidores de directorios?", "opciones": ["FTP.", "LDAP.", "HTTP."], "respuesta_correcta": "LDAP."},
    {"id": 3, "pregunta": "¿Qué comando fuerza una reconexión del servicio FTP?", "opciones": ["service vsftpd reload.", "systemctl restart vsftpd.", "ftp localhost."], "respuesta_correcta": "systemctl restart vsftpd."},
    {"id": 4, "pregunta": "¿Qué comprueba la función isset()?", "opciones": ["Si una variable es falsa", "Si existe el archivo", "Si una variable existe y no es null"], "respuesta_correcta": "Si una variable existe y no es null"},
    {"id": 5, "pregunta": "¿Qué funcionalidad ofrece Read the Docs para proyectos de software?", "opciones": ["Control de acceso avanzado.", "Integración con bases de datos externas.", "Versionado y despliegue automático de documentación."], "respuesta_correcta": "Versionado y despliegue automático de documentación."},
    {"id": 6, "pregunta": "¿Qué hace la función die() en PHP?", "opciones": ["Cierra la sesión", "Finaliza la ejecución del script", "Reinicia el navegador"], "respuesta_correcta": "Finaliza la ejecución del script"},
    {"id": 7, "pregunta": "¿Qué implica habilitar la opción chroot_local_user=YES en vsftpd.conf?", "opciones": ["Deshabilita los accesos anónimos al servidor.", "Enjaula a los usuarios locales en sus directorios personales.", "Permite que los usuarios locales accedan a todos los directorios."], "respuesta_correcta": "Enjaula a los usuarios locales en sus directorios personales."},
    {"id": 8, "pregunta": "¿Qué opción en vsftpd.conf restringe a usuarios a sus directorios?", "opciones": ["chroot_local_user=YES.", "ftp_username=ftp.", "anon_enable=YES."], "respuesta_correcta": "chroot_local_user=YES."},
    {"id": 9, "pregunta": "¿Qué cláusula se utiliza para filtrar filas en SQL?", "opciones": ["JOIN", "ORDER BY", "WHERE"], "respuesta_correcta": "WHERE"},
    {"id": 10, "pregunta": "¿Qué significa 'anon_max_rate' en vsftpd.conf?", "opciones": ["Velocidad máxima para usuarios locales.", "Velocidad máxima para usuarios anónimos.", "Velocidad máxima para todos los usuarios."], "respuesta_correcta": "Velocidad máxima para usuarios anónimos."},
    {"id": 11, "pregunta": "¿Qué significa el atributo olcRootDN en OpenLDAP?", "opciones": ["Define el DN del usuario administrador.", "Especifica el directorio de almacenamiento de datos.", "Indica el esquema utilizado por la base de datos."], "respuesta_correcta": "Define el DN del usuario administrador."},
    {"id": 12, "pregunta": "¿Qué opción en vsftpd.conf habilita conexiones cifradas?", "opciones": ["ssl_enable=YES.", "write_enable=YES.", "local_enable=YES."], "respuesta_correcta": "ssl_enable=YES."},
    {"id": 13, "pregunta": "¿Qué archivo es clave para configurar un flujo de trabajo en GitHub Actions?", "opciones": ["actions-config.json.", "workflow.yml.", ".github/workflows/ci.yml."], "respuesta_correcta": ".github/workflows/ci.yml."},
    {"id": 14, "pregunta": "¿Qué archivo se usa para denegar direcciones de correo anónimas?", "opciones": ["secure_email_list_enable.", "banned_email_file.", "anon_deny_file."], "respuesta_correcta": "banned_email_file."},
    {"id": 15, "pregunta": "¿Qué funcionalidad permite la integración de GitHub Actions con proyectos?", "opciones": ["Automatizar tareas de CI/CD.", "Diseñar documentación avanzada.", "Crear interfaces visuales."], "respuesta_correcta": "Automatizar tareas de CI/CD."},
    {"id": 16, "pregunta": "¿Qué servidor DNS recibe y resuelve directamente consultas de los clientes?", "opciones": ["Servidor raíz.", "Resolver DNS.", "Servidor autoritativo."], "respuesta_correcta": "Resolver DNS."},
    {"id": 17, "pregunta": "¿Qué módulo permite utilizar un servidor LDAP como backend para autenticación?", "opciones": ["ldap-backend.", "auth_ldap.", "pam_ldap."], "respuesta_correcta": "pam_ldap."},
    {"id": 18, "pregunta": "¿Qué tipo de ataque se previene usando sentencias preparadas?", "opciones": ["Inyección SQL", "CSRF", "XSS"], "respuesta_correcta": "Inyección SQL"},
    {"id": 19, "pregunta": "¿Qué sistema de control de versiones se utiliza comúnmente para proyectos colaborativos?", "opciones": ["SVN.", "Mercurial.", "Git."], "respuesta_correcta": "Git."},
    {"id": 20, "pregunta": "¿Qué función se utiliza en PHP para conectar a una base de datos MySQL usando PDO?", "opciones": ["mysql_open()", "new PDO()", "mysqli_connect()"], "respuesta_correcta": "new PDO()"},
    {"id": 21, "pregunta": "¿Qué puerto utiliza SFTP por defecto?", "opciones": ["23.", "22.", "21."], "respuesta_correcta": "22."},
    {"id": 22, "pregunta": "¿Qué es el DNS en el contexto de redes informáticas?", "opciones": ["Un sistema para traducir direcciones IP a nombres de dominio.", "Un protocolo para enviar correos electrónicos.", "Un estándar para conexiones inalámbricas."], "respuesta_correcta": "Un sistema para traducir direcciones IP a nombres de dominio."},
    {"id": 23, "pregunta": "¿Qué instrucción actualiza datos existentes?", "opciones": ["ALTER", "SET", "UPDATE"], "respuesta_correcta": "UPDATE"},
    {"id": 24, "pregunta": "¿Qué herramienta se utiliza para gestionar flujos de trabajo de CI/CD en GitHub?", "opciones": ["GitHub Actions.", "Jenkins.", "GitHub Flow."], "respuesta_correcta": "GitHub Actions."},
    {"id": 25, "pregunta": "¿Qué archivo en /etc contiene configuraciones específicas de usuarios?", "opciones": ["vsftpd_user_conf.", "vsftpd.conf.", "userlist_file."], "respuesta_correcta": "vsftpd_user_conf."},
    {"id": 26, "pregunta": "¿Cuál es el archivo que contiene opciones avanzadas para xinetd en vsftpd?", "opciones": ["/etc/vsftpd.conf.", "/etc/xinetd.conf.", "EXAMPLE/INTERNET_SITE/README."], "respuesta_correcta": "EXAMPLE/INTERNET_SITE/README."},
    {"id": 27, "pregunta": "¿Qué método se usa para preparar una consulta SQL en PDO?", "opciones": ["prepare()", "bind()", "execute()"], "respuesta_correcta": "prepare()"},
    {"id": 28, "pregunta": "¿Qué atributo en LDAP define el usuario administrador del árbol jerárquico?", "opciones": ["olcDatabase.", "auth_ldap.", "pam_ldap."], "respuesta_correcta": "pam_ldap."},
    {"id": 29, "pregunta": "¿Qué protocolo es responsable de la resolución de nombres en una red?", "opciones": ["DNS.", "HTTP.", "FTP."], "respuesta_correcta": "DNS."},
    {"id": 30, "pregunta": "¿Qué puerto por defecto utiliza SFTP en sistemas basados en vsftpd?", "opciones": ["20.", "22.", "21."], "respuesta_correcta": "22."},
    {"id": 31, "pregunta": "¿Qué archivo almacena la configuración principal del servidor DNS Bind?", "opciones": ["/etc/bind/db.local.", "/etc/bind/named.options.", "/etc/bind/named.conf.options."], "respuesta_correcta": "/etc/bind/named.conf.options."},
    {"id": 32, "pregunta": "¿Qué herramienta facilita la migración de datos de /etc a un servidor LDAP?", "opciones": ["MigrationTools.", "ldap-migrator.", "ldap2dns."], "respuesta_correcta": "MigrationTools."},
    {"id": 33, "pregunta": "¿Qué herramienta gráfica permite configurar servidores FTP?", "opciones": ["Ambas son correctas.", "WinSCP.", "FileZilla."], "respuesta_correcta": "Ambas son correctas."},
    {"id": 34, "pregunta": "¿Qué puerto por defecto utiliza FTP para el control de conexión?", "opciones": ["80.", "21.", "22."], "respuesta_correcta": "21."},
    {"id": 35, "pregunta": "¿Qué comando se utiliza para verificar errores en un archivo de zona DNS en Bind?", "opciones": ["dns-checker.", "named-checkzone.", "named-checkconf."], "respuesta_correcta": "named-checkzone."},
    {"id": 36, "pregunta": "¿Qué herramienta web facilita la administración remota de servidores LDAP?", "opciones": ["LDAP Web Tools.", "phpLDAPadmin.", "OpenLDAP Manager."], "respuesta_correcta": "phpLDAPadmin."},
    {"id": 37, "pregunta": "¿Qué significa el parámetro TTL en DNS?", "opciones": ["Tiempo de vida de un registro.", "Tiempo de respuesta del servidor.", "Tiempo de expiración de la caché."], "respuesta_correcta": "Tiempo de vida de un registro."},
    {"id": 38, "pregunta": "¿Qué archivo es clave en la configuración inicial de un servidor OpenLDAP?", "opciones": ["bind9.conf.", "ldap.conf.", "slapd.conf."], "respuesta_correcta": "slapd.conf."},
    {"id": 39, "pregunta": "¿Qué función redirige a otra página?", "opciones": ["header()", "redirect()", "move()"], "respuesta_correcta": "header()"},
    {"id": 40, "pregunta": "¿Qué opción de configuración en OpenLDAP permite sincronizar datos con otro servidor?", "opciones": ["mirrormode.", "replica-sync.", "syncrepl."], "respuesta_correcta": "syncrepl."}
]
missing = [item for item in user if item['pregunta'] not in existing]
print(len(missing))
for item in missing:
    print(item['pregunta'])
