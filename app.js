const tests = {
  cliente: [
    {
      pregunta: "¿Qué lenguaje da interactividad a una web?",
      opciones: ["HTML", "CSS", "JavaScript", "SQL"],
      correcta: 2
    }
  ],

  servidor: [
    {
      pregunta: "¿Dónde se ejecuta el backend?",
      opciones: ["En el navegador", "En el servidor", "En CSS", "En HTML"],
      correcta: 1
    }
  ],

  despliegue: [
    {
      pregunta: "¿Qué funcionalidad ofrece Read the Docs para proyectos de software?",
      opciones: [
        "Control de acceso avanzado",
        "Versionado y despliegue automático de documentación",
        "Integración con bases de datos externas"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué tipo de registro DNS asocia un nombre de dominio con una dirección IP?",
      opciones: [
        "Registro TXT",
        "Registro MX",
        "Registro A"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué archivo contiene las listas de control de acceso (ACL) en OpenLDAP?",
      opciones: [
        "ldap.conf",
        "slapd.conf",
        "slapd.access.conf"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué tipo de conexión FTP evita problemas con cortafuegos?",
      opciones: [
        "Modo pasivo",
        "Modo activo",
        "Modo binario"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué método ejecuta una sentencia preparada?",
      opciones: [
        "run()",
        "query()",
        "execute()"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué comando fuerza una reconexión del servicio FTP?",
      opciones: [
        "systemctl restart vsftpd",
        "service vsftpd reload",
        "ftp localhost"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué opción en vsftpd.conf permite conexiones locales?",
      opciones: [
        "local_enable=YES",
        "user_config_dir",
        "anon_enable=YES"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué es el DNS en el contexto de redes informáticas?",
      opciones: [
        "Un estándar para conexiones inalámbricas",
        "Un sistema para traducir direcciones IP a nombres de dominio",
        "Un protocolo para enviar correos electrónicos"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué estructura lógica utiliza el DNS para organizar dominios?",
      opciones: [
        "Árbol jerárquico",
        "Base de datos plana",
        "Lista lineal"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué opción en vsftpd.conf restringe a usuarios a sus directorios?",
      opciones: [
        "ftp_username=ftp",
        "anon_enable=YES",
        "chroot_local_user=YES"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué herramienta facilita la migración de datos de /etc a un servidor LDAP?",
      opciones: [
        "ldap-migrator",
        "ldap2dns",
        "MigrationTools"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué componente en GitHub Actions define los pasos de un flujo de trabajo?",
      opciones: [
        "Jenkinsfile",
        "Archivo YAML",
        "Dockerfile"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué archivo se usa para denegar direcciones de correo anónimas?",
      opciones: [
        "banned_email_file",
        "anon_deny_file",
        "secure_email_list_enable"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué herramienta web facilita la administración remota de servidores LDAP?",
      opciones: [
        "OpenLDAP Manager",
        "LDAP Web Tools",
        "phpLDAPadmin"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué atributo en LDAP define el usuario administrador del árbol jerárquico?",
      opciones: [
        "olcDatabase",
        "olcRootDN",
        "olcSuffix"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué comprueba la función isset()?",
      opciones: [
        "Si existe el archivo",
        "Si una variable es falsa",
        "Si una variable existe y no es null"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué hace la cláusula LIMIT en SQL?",
      opciones: [
        "Limita el número de columnas",
        "Limita el número de filas devueltas",
        "Limita el número de tablas"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué función filtra un array en PHP?",
      opciones: [
        "array_filter()",
        "clean_array()",
        "filter_input()"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué representa el carácter '@' en un archivo de zona DNS?",
      opciones: [
        "El servidor principal del DNS.",
        "Una dirección IP específica.",
        "El dominio raíz de la zona."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué función tiene el archivo .gitignore en un repositorio Git?",
      opciones: [
        "Generar documentación automática.",
        "Bloquear commits no autorizados.",
        "Excluir archivos específicos del seguimiento."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué protocolo es considerado más seguro que FTP tradicional?",
      opciones: [
        "SFTP.",
        "HTTP.",
        "SMTP."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué métrica comúnmente monitorea SonarQube para medir la calidad del código?",
      opciones: [
        "Cobertura de código.",
        "Consumo de recursos.",
        "Tiempo de respuesta."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué archivo en /etc contiene configuraciones específicas de usuarios?",
      opciones: [
        "vsftpd_user_conf.",
        "vsftpd.conf.",
        "userlist_file."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué función redirige a otra página?",
      opciones: [
        "redirect()",
        "header()",
        "move()"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué ventaja principal tiene usar GitBook para documentación colaborativa?",
      opciones: [
        "Integración nativa con Jenkins.",
        "Sincronización con GitHub y estructura visualmente atractiva.",
        "Soporte avanzado para Python."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué opción en vsftpd.conf establece el directorio raíz para usuarios?",
      opciones: [
        "anon_root.",
        "chroot_list_file.",
        "local_root."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué ventaja ofrece la modularización en la configuración de servidores DNS?",
      opciones: [
        "Facilita la gestión de grandes redes.",
        "Mejora la compatibilidad con clientes antiguos.",
        "Aumenta la velocidad de las consultas DNS."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué comando verifica el estado del servicio vsftpd?",
      opciones: [
        "ftp localhost.",
        "systemctl status vsftpd.",
        "tail -f vsftpd.log."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué archivo se edita para definir registros específicos de una zona DNS?",
      opciones: [
        "db.empresa.local.",
        "resolv.conf.",
        "named.conf.options."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué servidor DNS recibe y resuelve directamente consultas de los clientes?",
      opciones: [
        "Servidor raíz.",
        "Servidor autoritativo.",
        "Resolver DNS."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué significa el atributo olcRootDN en OpenLDAP?",
      opciones: [
        "Define el DN del usuario administrador.",
        "Especifica el directorio de almacenamiento de datos.",
        "Indica el esquema utilizado por la base de datos."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué comando se utiliza para inicializar un repositorio en Git?",
      opciones: [
        "git new.",
        "git init.",
        "git start."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué comando en Git descarga y fusiona cambios de un repositorio remoto?",
      opciones: [
        "git pull.",
        "git merge.",
        "git push."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué es una clave primaria?",
      opciones: [
        "Una contraseña",
        "Un índice de búsqueda",
        "Un valor único por tabla"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué significa 'anon_max_rate' en vsftpd.conf?",
      opciones: [
        "Velocidad máxima para todos los usuarios.",
        "Velocidad máxima para usuarios anónimos.",
        "Velocidad máxima para usuarios locales."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué parámetro en un archivo SOA define el tiempo para actualizar un servidor secundario?",
      opciones: [
        "Retry.",
        "Expire.",
        "Refresh."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué opción habilita la subida de ficheros para usuarios anónimos?",
      opciones: [
        "write_enable=YES.",
        "anon_upload_enable=YES.",
        "secure_chroot_dir."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué opción se configura para limitar la velocidad de transferencia de usuarios locales?",
      opciones: [
        "max_per_ip.",
        "anon_max_rate.",
        "local_max_rate."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué opción habilita la escritura en el archivo vsftpd.conf?",
      opciones: [
        "anon_enable=YES.",
        "ssl_enable=YES.",
        "write_enable=YES."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué comando de Git se utiliza para reorganizar el historial de commits y mantenerlo lineal?",
      opciones: [
        "git rebase.",
        "git stash.",
        "git cherry-pick."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué método obtiene una sola columna de una fila?",
      opciones: [
        "fetchColumn()",
        "fetchRow()",
        "fetchOne()"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué parámetro en la configuración de OpenLDAP define el DN de la entrada raíz?",
      opciones: [
        "rootdn.",
        "directory.",
        "suffix."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué componente principal se modifica para definir el dominio raíz en un servidor DNS?",
      opciones: [
        "Archivo resolv.conf.",
        "Archivo named.conf.local.",
        "Archivo db.local."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué sistema de control de versiones se utiliza comúnmente para proyectos colaborativos?",
      opciones: [
        "Mercurial.",
        "SVN.",
        "Git."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué comando se utiliza para verificar errores en un archivo de zona DNS en Bind?",
      opciones: [
        "named-checkzone.",
        "dns-checker.",
        "named-checkconf."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué parámetro define el número máximo de clientes conectados?",
      opciones: [
        "max_clients.",
        "anon_max_rate.",
        "max_per_ip."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Cómo se activa el modo de errores por excepción en PDO?",
      opciones: [
        "ATTR_ERRMODE_WARNING",
        "ATTR_ERRMODE_SILENT",
        "ATTR_ERRMODE_EXCEPTION"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué significa TTL en el contexto del DNS?",
      opciones: [
        "Tiempo que un cliente espera por una respuesta.",
        "Tiempo que un registro permanece en la caché.",
        "Tiempo que tarda un servidor en responder."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué comando instala vsftpd en sistemas basados en Debian?",
      opciones: [
        "rpm -i vsftpd.",
        "apt-get install vsftpd.",
        "yum install vsftpd."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué función inicia una sesión en PHP?",
      opciones: [
        "session_start()",
        "session_open()",
        "start_session()"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué protocolo es responsable de la resolución de nombres en una red?",
      opciones: [
        "HTTP.",
        "DNS.",
        "FTP."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué tipo de usuarios pueden utilizar un servidor FTP?",
      opciones: [
        "Solo locales.",
        "Locales, anónimos y virtuales.",
        "Solo anónimos."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué función principal tiene un servidor DNS?",
      opciones: [
        "Crea aplicaciones web desde el servidor.",
        "Permite conexiones seguras entre servidores.",
        "Traduce nombres de dominio en direcciones IP."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué estrategia de branching es ideal para equipos que utilizan Git?",
      opciones: [
        "Sin ramas específicas.",
        "Branching básico.",
        "GitHub Flow."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué método se usa para preparar una consulta SQL en PDO?",
      opciones: [
        "bind()",
        "execute()",
        "prepare()"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué opción en vsftpd.conf habilita conexiones cifradas?",
      opciones: [
        "ssl_enable=YES.",
        "write_enable=YES.",
        "local_enable=YES."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Cuál es el archivo que contiene opciones avanzadas para xinetd en vsftpd?",
      opciones: [
        "/etc/xinetd.conf.",
        "/etc/vsftpd.conf.",
        "EXAMPLE/INTERNET_SITE/README."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué herramienta permite monitorizar métricas de calidad del software con visualización interactiva?",
      opciones: [
        "Grafana.",
        "Jenkins.",
        "Prometheus."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué modo de obtención da acceso como propiedades de objeto?",
      opciones: [
        "FETCH_OBJ",
        "FETCH_ASSOC",
        "FETCH_CLASS"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué función se usa para encriptar contraseñas en PHP?",
      opciones: [
        "password_hash()",
        "crypt()",
        "encode()"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué puerto utiliza SFTP por defecto?",
      opciones: [
        "21.",
        "22.",
        "23."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué archivo se edita para configurar vsftpd?",
      opciones: [
        "/var/log/vsftpd.",
        "/home/ftp.",
        "/etc/vsftpd.conf."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué comando en Linux permite generar contraseñas cifradas para OpenLDAP?",
      opciones: [
        "passwd.",
        "slappasswd.",
        "ldapadd."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué tipo de consulta realiza un cliente DNS para obtener una dirección IP?",
      opciones: [
        "Consulta recursiva.",
        "Consulta iterativa.",
        "Consulta inversa."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué archivo es clave para configurar un flujo de trabajo en GitHub Actions?",
      opciones: [
        ".github/workflows/ci.yml.",
        "workflow.yml.",
        "actions-config.json."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué parámetro en vsftpd.conf fuerza la validación de certificados SSL de clientes?",
      opciones: [
        "require_cert.",
        "validate_cert.",
        "implicit_ssl."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué puerto por defecto utiliza SFTP en sistemas basados en vsftpd?",
      opciones: [
        "22.",
        "21.",
        "20."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué archivo en un repositorio Git contiene configuraciones específicas del repositorio?",
      opciones: [
        "settings.yaml.",
        "config.json.",
        ".gitignore."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué modo de obtención devuelve los resultados como array asociativo?",
      opciones: [
        "PDO::FETCH_NUM",
        "PDO::FETCH_ASSOC",
        "PDO::FETCH_OBJ"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué opción de configuración en OpenLDAP permite sincronizar datos con otro servidor?",
      opciones: [
        "mirrormode.",
        "replica-sync.",
        "syncrepl."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué herramienta se utiliza para verificar errores en un archivo de configuración de Bind?",
      opciones: [
        "dns-checker.",
        "named-checkzone.",
        "named-checkconf."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué función tiene el archivo named.conf.options en Bind?",
      opciones: [
        "Almacenar registros de recursos.",
        "Configurar parámetros básicos como forwarders y listen-on.",
        "Crear zonas DNS."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué permite configurar el parámetro 'forwarders' en un servidor DNS?",
      opciones: [
        "Restringir el acceso al servidor DNS.",
        "Delegar consultas externas a servidores específicos.",
        "Almacenar registros de recursos."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué comando se utiliza para añadir un usuario anónimo para FTP?",
      opciones: [
        "sudo mkdir /usr/share/empty.",
        "sudo useradd ftp.",
        "sudo useradd nobody."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué protocolo utiliza vsftpd para conexiones cifradas?",
      opciones: [
        "SSL/TLS.",
        "HTTP.",
        "SMTP."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué comando se utiliza para configurar el nombre de usuario en Git?",
      opciones: [
        "git user.name.",
        "git config --global user.name.",
        "git setup --user."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué herramienta gráfica permite configurar servidores FTP?",
      opciones: [
        "FileZilla.",
        "WinSCP.",
        "Ambas son correctas."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué archivo almacena la configuración principal del servidor DNS Bind?",
      opciones: [
        "/etc/bind/named.options.",
        "/etc/bind/named.conf.options.",
        "/etc/bind/db.local."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué significa el parámetro TTL en DNS?",
      opciones: [
        "Tiempo de respuesta del servidor.",
        "Tiempo de expiración de la caché.",
        "Tiempo de vida de un registro."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué comando muestra los logs en tiempo real?",
      opciones: [
        "systemctl logs vsftpd.",
        "ls /var/log/vsftpd.",
        "tail -f /var/log/vsftpd.log."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué instrucción se usa para recuperar datos de una base de datos?",
      opciones: [
        "INSERT",
        "SELECT",
        "DELETE"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué archivo es clave en la configuración inicial de un servidor OpenLDAP?",
      opciones: [
        "slapd.conf.",
        "ldap.conf.",
        "bind9.conf."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué protocolo es utilizado para centralizar la autenticación en servidores de directorios?",
      opciones: [
        "LDAP.",
        "FTP.",
        "HTTP."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué plataforma ofrece funcionalidad de edición colaborativa en Markdown?",
      opciones: [
        "Jira.",
        "Prometheus.",
        "HackMD."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué archivo es clave para configurar un proyecto en Docusaurus?",
      opciones: [
        "docusaurus.config.js.",
        "config.xml.",
        "settings.json."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué función se usa para sanear datos de entrada?",
      opciones: [
        "header()",
        "htmlentities()",
        "echo()"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué comando de Git se utiliza para seleccionar y aplicar un commit específico de otra rama?",
      opciones: [
        "git merge.",
        "git cherry-pick.",
        "git rebase."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué ventaja tiene utilizar índices en OpenLDAP?",
      opciones: [
        "Reducir el tamaño de la base de datos.",
        "Simplificar la configuración inicial.",
        "Facilitar búsquedas rápidas y eficientes."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué tipo de usuario permite acceso FTP sin credenciales?",
      opciones: [
        "Virtual.",
        "Anónimo.",
        "Local."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué puerto por defecto utiliza FTP para el control de conexión?",
      opciones: [
        "80.",
        "21.",
        "22."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es el puerto por defecto de MySQL?",
      opciones: [
        "1433",
        "3306",
        "8080"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué módulo permite utilizar un servidor LDAP como backend para autenticación?",
      opciones: [
        "ldap-backend.",
        "pam_ldap.",
        "auth_ldap."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué cláusula se utiliza para filtrar filas en SQL?",
      opciones: [
        "ORDER BY",
        "WHERE",
        "JOIN"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué contiene la superglobal $_POST?",
      opciones: [
        "Datos enviados por POST",
        "Información del servidor",
        "Parámetros de la URL"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué archivo almacena la lista de usuarios denegados en vsftpd?",
      opciones: [
        "/etc/vsftpd.chroot_list.",
        "/etc/vsftpd.user_list.",
        "/etc/vsftpd.banned_emails."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué herramienta se utiliza para gestionar flujos de trabajo de CI/CD en GitHub?",
      opciones: [
        "GitHub Flow.",
        "Jenkins.",
        "GitHub Actions."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué hace la función die() en PHP?",
      opciones: [
        "Reinicia el navegador",
        "Cierra la sesión",
        "Finaliza la ejecución del script"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Para qué sirve bindParam() en PDO?",
      opciones: [
        "Obtener todos los resultados",
        "Enlazar un valor a un parámetro",
        "Ejecutar una consulta"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué funcionalidad ofrece 'git stash' en el flujo de trabajo de Git?",
      opciones: [
        "Crear un nuevo branch a partir de los cambios actuales.",
        "Guardar temporalmente cambios no confirmados.",
        "Fusionar ramas automáticamente."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué ventaja tiene el uso de Git Hooks en un repositorio?",
      opciones: [
        "Automatiza tareas como pruebas antes de los commits.",
        "Mejora la visibilidad del repositorio.",
        "Incrementa la capacidad de almacenamiento."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué implica habilitar la opción chroot_local_user=YES en vsftpd.conf?",
      opciones: [
        "Permite que los usuarios locales accedan a todos los directorios.",
        "Enjaula a los usuarios locales en sus directorios personales.",
        "Deshabilita los accesos anónimos al servidor."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué significa DSN en el contexto de PDO?",
      opciones: [
        "Dirección del Servidor de Nombres",
        "Documento de Sistema de Nombres",
        "Nombre de Fuente de Datos"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué herramienta desarrollada por Facebook facilita la creación de documentación estática?",
      opciones: [
        "Docusaurus.",
        "GitBook.",
        "Read the Docs."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué instrucción elimina una tabla?",
      opciones: [
        "REMOVE",
        "DELETE",
        "DROP TABLE"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Para qué sirve una clave foránea?",
      opciones: [
        "Para indexar columnas",
        "Para cifrar datos",
        "Para relacionar tablas"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Para qué se usa un JOIN en SQL?",
      opciones: [
        "Combinar datos de varias tablas",
        "Eliminar registros",
        "Crear índices"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué palabra clave elimina duplicados en SELECT?",
      opciones: [
        "UNIQUE",
        "NO_DUPLICATE",
        "DISTINCT"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué instrucción SQL se usa para insertar datos?",
      opciones: [
        "SELECT",
        "INSERT INTO",
        "PUT"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué archivo se utiliza comúnmente para documentar proyectos en GitHub?",
      opciones: [
        "INDEX.html.",
        "DOCS.rst.",
        "README.md."
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué función se utiliza en PHP para conectar a una base de datos MySQL usando PDO?",
      opciones: [
        "mysql_open()",
        "mysqli_connect()",
        "new PDO()"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué funcionalidad permite la integración de GitHub Actions con proyectos?",
      opciones: [
        "Diseñar documentación avanzada.",
        "Automatizar tareas de CI/CD.",
        "Crear interfaces visuales."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué instrucción actualiza datos existentes?",
      opciones: [
        "ALTER",
        "SET",
        "UPDATE"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué lenguaje de marcado es usado para la documentación técnica en GitHub?",
      opciones: [
        "HTML.",
        "Markdown.",
        "XML."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué permite el bloque try-catch con PDO?",
      opciones: [
        "Formatear texto",
        "Manejar errores de conexión",
        "Ejecutar funciones"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué herramienta facilita la monitorización de métricas de rendimiento en aplicaciones?",
      opciones: [
        "Prometheus.",
        "Grafana.",
        "SonarQube."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué tipo de ataque se previene usando sentencias preparadas?",
      opciones: [
        "XSS",
        "CSRF",
        "Inyección SQL"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué significan las siglas CRUD?",
      opciones: [
        "Crear, Leer, Actualizar, Borrar",
        "Código, Revisión, Uso, Desarrollo",
        "Conectar, Revisar, Usar, Descargar"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué función devuelve el último ID insertado en PDO?",
      opciones: [
        "lastInsertId()",
        "fetchInsertId()",
        "getLastId()"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué lenguaje de marcado es ampliamente utilizado para documentación técnica en GitHub?",
      opciones: [
        "HTML.",
        "Markdown.",
        "AsciiDoc."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué devuelve fetchAll() en PDO?",
      opciones: [
        "Un solo registro",
        "El número de filas",
        "Todos los registros como array"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué herramienta permite ejecutar análisis de calidad del código en un pipeline de CI/CD?",
      opciones: [
        "SonarQube.",
        "Jenkins.",
        "Prometheus."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué hace el operador LIKE en SQL?",
      opciones: [
        "Compara fechas",
        "Busca valores exactos",
        "Busca coincidencias por patrón"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué herramienta permite gestionar documentación con versiones en varios idiomas?",
      opciones: [
        "Read the Docs.",
        "HackMD.",
        "Confluence."
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué comando se utiliza para instalar MkDocs en un entorno Python?",
      opciones: [
        "mkdocs new docs.",
        "pip install mkdocs.",
        "pip install docs."
      ],
      correcta: 1
    },
    {
      pregunta: "¿Para qué sirve try-catch en PHP?",
      opciones: [
        "Ejecutar consultas",
        "Manejar excepciones",
        "Crear clases"
      ],
      correcta: 1
    }
  ],
  interfaces: [],
  ingles: [],
  hlc: [
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "La moneda digital solo existe en l\u00ednea y se almacena en billeteras digitales lo que se convierte en una gran desventaja",
        "La moneda digital solo existe en l\u00ednea y se almacena en billeteras digitales",
        "La moneda digital nunca obtiene su valor del mercado"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 permite una billetera criptogr\u00e1fica?",
      opciones: [
        "Enviar y recibir solo Bitcoins",
        "Enviar y recibir criptomonedas",
        "Enviar y recibir Bitcoins y ocasionalmente, Ethereum"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 son las monedas digitales de un banco central?",
      opciones: [
        "Es una moneda digital emitida por un banco central que no guardan similitud con las monedas fiduciarias",
        "Es una moneda digital emitida por un banco central similares a las monedas fiduciarias porque su regulaci\u00f3n corresponde a los bancos centrales que se pueden usar para realizar pagos entre pares sin pasar por una instituci\u00f3n financiera",
        "Es una moneda digital emitida por un banco central similares a las monedas fiduciarias, aunque su regulaci\u00f3n no corresponde a los bancos centrales"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfPara qu\u00e9 se suelen utilizar las criptomonedas?",
      opciones: [
        "Su uso exclusivo es para inversiones",
        "Para inversiones, enviar o recibir pagos electr\u00f3nicos y comprar activos criptogr\u00e1ficos",
        "Su uso es exclusivo para enviar o recibir pagos electr\u00f3nicos"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1les son las caracter\u00edsticas de las carteras en l\u00ednea?",
      opciones: [
        "Sus claves se guardan exclusivamente en papel",
        "Sus claves se almacenan en una aplicaci\u00f3n u otro software y est\u00e1n protegidas por cifrado de dos pasos",
        "Sus claves se almacenan en un dispositivo de memoria USB que se guarda en un lugar seguro y solo se conecta a una computadora cuando desea usar su criptograf\u00eda"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es Ledger?",
      opciones: [
        "Es una billetera criptogr\u00e1fica de aplicaci\u00f3n m\u00f3vil",
        "Es una billetera criptogr\u00e1fica de hardware similar a un USB",
        "Es una billetera criptogr\u00e1fica de papel"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "Las monedas digitales de un banco central (CBDD) se encuentran en las primeras etapas de desarrollo y muchos bancos centrales est\u00e1n explorando la posibilidad de emitirlas en el futuro",
        "Las monedas digitales de un banco central (CBDC) se encuentran en las primeras etapas de desarrollo y muchos bancos centrales est\u00e1n explorando la posibilidad de emitirlas en el futuro",
        "Las monedas digitales de un banco central (CBDD) se encuentran totalmente desarrolladas y todos los bancos centrales ya han explorado la posibilidad de emitirlas en el futuro"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 significar\u00eda, si as\u00ed fuese, que una moneda digital tiene m\u00e1s eficiencia que una que no sea digital?",
      opciones: [
        "Significar\u00eda que una moneda digital agilizar\u00eda el proceso de pago lo que se traduce en mayor eficiencia puesto que no hay necesidad de conciliar diferentes monedas al realizar pagos internacionales",
        "Significar\u00eda que una moneda digital agilizar\u00eda el proceso de pago lo que se traduce en mayor eficiencia puesto que no hay necesidad de conciliar diferentes monedas al realizar pagos nacionales",
        "Significar\u00eda que una moneda digital tendr\u00eda tarifas de transacci\u00f3n m\u00e1s bajas que las tarifas de transacci\u00f3n que tienen las monedas fiduciarias"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es Pragma?",
      opciones: [
        "Es una moneda digital que no se puede usar para realizar pagos entre pares sin pasar por una instituci\u00f3n financiera",
        "Es una secci\u00f3n principal de Solidity que le dice qu\u00e9 versiones del compilador son v\u00e1lidas para compilar un archivo",
        "Es una secci\u00f3n secundaria de Solidity que le dice qu\u00e9 versiones del compilador son v\u00e1lidas para compilar un archivo"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 hace la funci\u00f3n balanceOf()?",
      opciones: [
        "Transferir una cantidad previamente aprobada de una direcci\u00f3n a otra",
        "Devolver el n\u00famero de tokens que posee una direcci\u00f3n espec\u00edfica",
        "Suprimir el n\u00famero de tokens que posee una direcci\u00f3n espec\u00edfica"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 se consigue con Truffle?",
      opciones: [
        "Organizar las actividades de desarrollo en proyectos pero no permite trabajar en varios proyectos con diferentes requisitos de configuraci\u00f3n",
        "Organizar las actividades de desarrollo en proyectos lo que permite trabajar en varios proyectos con diferentes requisitos de configuraci\u00f3n donde cada proyecto necesita su propia carpeta",
        "Organizar las actividades de desarrollo en proyectos pero solo permite trabajar en varios proyectos sin diferentes requisitos de configuraci\u00f3n"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es view?",
      opciones: [
        "Es un modificador de acceso, introducido en Solidity 0.4.14, que reemplaz\u00f3 a constant e informa al compilador que la funci\u00f3n no modificar\u00e1 ninguna variable de estado",
        "Es un modificador de acceso, introducido en Solidity 0.4.17, que reemplaz\u00f3 a constant e informa al compilador que la funci\u00f3n no modificar\u00e1 ninguna variable de estado",
        "Es un modificador de acceso, introducido en Solidity 0.4.17, que reemplaz\u00f3 a pure e informa al compilador que la funci\u00f3n no modificar\u00e1 ninguna variable de estado"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "Los desarrolladores deben usar comentarios para documentar el c\u00f3digo y es un paso principal que le da un aspecto profesional al c\u00f3digo",
        "Los desarrolladores deben usar comentarios para documentar el c\u00f3digo y es un paso adicional que le da un aspecto profesional al c\u00f3digo",
        "Las monedas digitales de un banco central (CBDD) se encuentran totalmente desarrolladas y todos los bancos centrales ya han explorado la posibilidad de emitirlas en el futuro"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es una interfaz?",
      opciones: [
        "Es como un contrato inteligente que contiene un sinf\u00edn de c\u00f3digos ejecutables",
        "Es como un contrato inteligente que no contiene ning\u00fan c\u00f3digo ejecutable",
        "Es como un contrato inteligente que contiene un c\u00f3digo ejecutable"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es Solidity?",
      opciones: [
        "Es un lenguaje orientado a objetos de alto nivel influenciado por C ++, JavaScript y Python pero no est\u00e1 dise\u00f1ado para integrarse con la m\u00e1quina virtual Ethereum",
        "Es un lenguaje orientado a objetos de alto nivel influenciado por C ++, JavaScript y Python dise\u00f1ado para integrarse con la m\u00e1quina virtual Ethereum",
        "Es un lenguaje orientado a objetos de alto nivel influenciado, exclusivamente, por JavaScript dise\u00f1ado para integrarse con la m\u00e1quina virtual Ethereum"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es la Fundaci\u00f3n Ethereum?",
      opciones: [
        "Una organizaci\u00f3n con \u00e1nimo de lucro que promueve y apoya la plataforma Ethereum",
        "Una organizaci\u00f3n sin fines de lucro que promueve y apoya la plataforma Ethereum",
        "Una herramienta de an\u00e1lisis de c\u00f3digo para Ethereum"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es el objetivo real de Hyperledger?:",
      opciones: [
        "Ahorro de datos de usuario internamente",
        "Dise\u00f1ar tecnolog\u00edas que aprovechen la estructura de Blockchain, intentando separar la moneda y aprovechando la forma de trabajar de la cadena de bloques en otros escenarios",
        "Crear una combinaci\u00f3n de las tecnolog\u00edas criptogr\u00e1ficas y de seguridad sin separar la moneda"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfEn qu\u00e9 a\u00f1o naci\u00f3 el proyecto Hyperledger?:",
      opciones: [
        "En el a\u00f1o 2014",
        "En el a\u00f1o 2015",
        "En el a\u00f1o 2017"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfPara qu\u00e9 sirve la herramienta Hyperledger Cello?:",
      opciones: [
        "La herramienta Hyperledger Cello no existe",
        "Para crear soluciones de contabilidad distribuida en una arquitectura modular",
        "Para crear soluciones de contabilidad distribuida en una arquitectura modular que no ofrece confidencialidad bajo ninguna circunstancia"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 son los contratos inteligentes en cadena?:",
      opciones: [
        "El \u00fanico tipo de contrato inteligente que existe",
        "Son los que despliegan la l\u00f3gica de negocios como una transacci\u00f3n comprometida a la cadena de bloques donde el c\u00f3digo que define la l\u00f3gica de negocios se convierte en parte del libro mayor",
        "Son los que instalan la l\u00f3gica de negocios en los validadores en la red antes de que se lance la red"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?:",
      opciones: [
        "Las redes peer-to-peer son un tipo especial de sistemas distribuidos que consisten en computadoras colectivas cuyos recursos computacionales est\u00e9n disponibles para todos los miembros de la red sin tener ning\u00fan punto central de coordinaci\u00f3n",
        "Todos los proyectos de Hyperledger proporcionan API ricas y f\u00e1ciles de usar que admiten la interoperabilidad con otros sistemas",
        "Todos los proyectos de Hyperledger proporcionan API ricas y f\u00e1ciles de usar que no admiten la interoperabilidad con otros sistemas"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?:",
      opciones: [
        "Hyperledger opera bajo una licencia Creative Commons Attribution 4.0 Internacional para el c\u00f3digo y una licencia Apache 2.0 para el contenido",
        "Hyperledger opera bajo una licencia Apache 2.0 para el c\u00f3digo y una licencia Creative Commons Attribution 4.0 Internacional para el contenido",
        "Hyperledger opera bajo una licencia Apache 2.0 para el contenido y una licencia Creative Commons Attribution 4.0 Internacional para el c\u00f3digo"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?:",
      opciones: [
        "En una transacci\u00f3n de Hyperledger Fabric los nodos de ordenaci\u00f3n (servicio) solo se comunican con los nodos de pares",
        "En una transacci\u00f3n de Hyperledger Fabric los nodos de ordenaci\u00f3n (servicio) se comunican con los nodos de confirmaci\u00f3n y de pares",
        "En una transacci\u00f3n de Hyperledger Fabric los nodos de confirmaci\u00f3n (servicio) se comunican con los nodos de ordenaci\u00f3n y de pares"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es un beneficio de Hyperledger como organizaci\u00f3n de invernadero para el desarrollo de blockchain de c\u00f3digo abierto?:",
      opciones: [
        "Destruir los datos reunidos en unidades llamadas bloques",
        "La mejora de la productividad a trav\u00e9s de la especializaci\u00f3n",
        "La distribuci\u00f3n"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es una caracter\u00edstica de Hyperledger Composer?:",
      opciones: [
        "Que es una herramienta de c\u00f3digo mixto",
        "Que es una herramienta de c\u00f3digo abierto",
        "Que es una herramienta de c\u00f3digo cerrado"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es Caliper?:",
      opciones: [
        "Es un marco de blockchain dise\u00f1ado para ser incorporado en la econom\u00eda dom\u00e9stica",
        "Es un proyecto de incubaci\u00f3n de Hyperledger que trata de resolver el d\u00e9ficit de una soluci\u00f3n est\u00e1ndar de benchmark para aplicaciones de blockchain",
        "Caliper no existe"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1les son caracter\u00edsticas de Cello?:",
      opciones: [
        "La administraci\u00f3n de m\u00faltiples blockchains, exclusivamente",
        "La administraci\u00f3n de m\u00faltiples blockchains y la respuesta casi instant\u00e1nea, entre otras",
        "Solo tiene la caracter\u00edstica de la respuesta casi instant\u00e1nea"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n incorrecta?:",
      opciones: [
        "Hyperledger Composer es una herramienta modular con componentes preconstruidos para construir redes de negocios de blockchain",
        "Hyperledger Composer es una herramienta modular sin componentes preconstruidos que no construye redes de negocios de blockchain",
        "Hyperledger Composer admite caracter\u00edsticas de plug-in que mejoran la experiencia de depuraci\u00f3n"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es Cello?:",
      opciones: [
        "Es una aplicaci\u00f3n manual para la implementaci\u00f3n y administraci\u00f3n de blockchains en forma de plug-and-play",
        "Es una aplicaci\u00f3n automatizada para la implementaci\u00f3n y administraci\u00f3n de blockchains en forma de plug-and-play, especialmente para las empresas que buscan integrar tecnolog\u00edas de libro mayor distribuido",
        "Es una aplicaci\u00f3n que proporciona API ricas y f\u00e1ciles de usar que no admiten la interoperabilidad con otros sistemas"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?:",
      opciones: [
        "Hyperledger Explorer es una herramienta de aplicaci\u00f3n web de f\u00e1cil uso utilizada para ver o invocar solo transacciones",
        "Hyperledger Explorer es una herramienta de aplicaci\u00f3n web de f\u00e1cil uso utilizada para ver o invocar transacciones, billeteras digitales y otra informaci\u00f3n almacenada en una implementaci\u00f3n de blockchain de Hyperledger",
        "En una transacci\u00f3n de Hyperledger Fabric los nodos de confirmaci\u00f3n (servicio) se comunican con los nodos de ordenaci\u00f3n y de pares"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfEn qu\u00e9 a\u00f1o se lanz\u00f3 Hyperledger Quilt?:",
      opciones: [
        "En 2022",
        "En 2017",
        "En 2018"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?:",
      opciones: [
        "Hyperledger Composer est\u00e1 dise\u00f1ado para apoyar aplicaciones de blockchain sin hacerlas compatibles con otras herramientas de Hyperledger",
        "Hyperledger Composer est\u00e1 dise\u00f1ado para apoyar aplicaciones de blockchain para hacerlas compatibles con otras herramientas de Hyperledger",
        "Hyperledger Composer es una plataforma de blockchain-as-a-service de c\u00f3digo abierto para empresas que puede ejecutar contratos inteligentes personalizados que admite una variedad de algoritmos de consenso"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1ntos dispositivos conectados a internet se espera que haya en 2025?:",
      opciones: [
        "5 mil millones",
        "22 mil millones",
        "40 mil millones"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1ntos casos reconoce de uso existentes y emergentes de blockchain para el medio ambiente el Foro Econ\u00f3mico Mundial?:",
      opciones: [
        "Solo 10 casos",
        "M\u00e1s de 65 casos",
        "No reconoce ning\u00fan caso"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?:",
      opciones: [
        "La principal desventaja de los activos digitales es la capacidad de fraccionar cada activo",
        "Una de las principales ventajas de los activos digitales es la capacidad de fraccionar cada activo",
        "La moneda f\u00edsica no puede venir en forma digital"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 sector puede beneficiarse de la implementaci\u00f3n de soluciones Ethereum en la gesti\u00f3n de la energ\u00eda?:",
      opciones: [
        "Ning\u00fan sector",
        "El sector energ\u00e9tico",
        "El sector del entretenimeinto"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 significan las siglas PI?:",
      opciones: [
        "Bitcoin",
        "Propiedad Intelectual",
        "Propiedad Interesante"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 se consigue con la rastreabilidad de medicamentos?:",
      opciones: [
        "Se consiqgue que la gesti\u00f3n de la cadena de suministro de valores financieros se vuelve m\u00e1s segura y responsable con la transparencia, inmutabilidad e interoperabilidad introducidas por Enterprise Ethereum",
        "Se consigue que la gesti\u00f3n de la cadena de suministro de medicamentos se vuelve m\u00e1s segura y responsable con la transparencia, inmutabilidad e interoperabilidad introducidas por Enterprise Ethereum",
        "No se consigue nada"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 permite Enterprise Ethereum en el \u00e1mbito del entretenimiento?:",
      opciones: [
        "Enterprise Ethereum no puede aplicarse en el \u00e1mbito del entretenimiento",
        "Permite a los artistas y creadores digitalizar los metadatos de su contenido \u00fanico y gestionar y almacenar los derechos de Propiedad Intelectual en un registro inmutable con sello de tiempo",
        "Permite a los artistas y creadores digitalizar los metadatos de su contenido \u00fanico y gestionar y almacenar los derechos de Propiedad Interesada en un registro mutable con sello de tiempo"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es el crowdfunding descentralizado?:",
      opciones: [
        "Es una moneda digital emitida por un banco central que no guardan similitud con las monedas fiduciarias",
        "Es un modelo de negocio que recauda capital de manera m\u00e1s eficiente y crea una mejor distribuci\u00f3n de derechos de participaci\u00f3n y gobierno",
        "Es un modelo de negocio que recauda capital de manera nada eficiente"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 significa DEuro?",
      opciones: [
        "Euro transversal",
        "Euro Digital",
        "El concepto DEuro no existe"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es blockchain?",
      opciones: [
        "Es un libro mayor digital distribuido que registra todas las transacciones realizadas con moneda digital y cuyas principales caracter\u00edsticas es que es seguro, transparente y centralizado",
        "Es un libro mayor digital distribuido que registra todas las transacciones realizadas con moneda digital y cuyas principales caracter\u00edsticas es que es seguro, transparente y descentralizado",
        "Es un gr\u00e1fico c\u00edclico dirigido que genera, pero no analiza un gran conjunto de datos"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es TestNet?",
      opciones: [
        "La \u00fanica rede asociada con Bitcoin",
        "Una de las redes asociadas con Bitcoin donde hay una criptomoneda id\u00e9ntica a bitcoin pero con su propio tipo de direcciones y con su propio registro contable o blockchain",
        "Una de las redes asociadas con Bitcoin donde hay una criptomoneda diferente a bitcoin con su propio tipo de direcciones y con su propio registro contable o blockchain"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es una caracter\u00edstica de las monedas digitales de un banco central?",
      opciones: [
        "Son monedad que, aun siendo digitales, no se pueden usar para realizar pagos entre pares sin pasar por una instituci\u00f3n financiera",
        "Son monedas donde un banco central controla su movimiento, aunque ninguna instituci\u00f3n financiera no necesita controlar el movimiento de las mismas",
        "Son monedas que ning\u00fan banco central controla el movimiento de las mismas, aunque ninguna instituci\u00f3n financiera no necesita controlar el movimiento de las mismas"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "Blockchain es la infraestructura sobre la que se construyen exclusivamente bitcoin",
        "Blockchain es la infraestructura sobre la que se construyen bitcoin y otras criptomonedas",
        "Blockchain es una criptomoneda"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 significar\u00eda, si se diese, el concepto de falta de regulaci\u00f3n en las criptomonedas?",
      opciones: [
        "La falta de regulaci\u00f3n no se da en las criptomonedas",
        "Significar\u00eda que, si se experimenta alg\u00fan fraude o robo de pago, es posible que no tenga ning\u00fan recurso al no estar reguladas por ning\u00fan gobierno o instituci\u00f3n financiera",
        "Significar\u00eda que s\u00f3lo pueden bajar mucho en valor en un corto per\u00edodo de tiempo"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "La moneda f\u00edsica no est\u00e1 vinculada o regulada por ning\u00fan gobierno o instituci\u00f3n financiera",
        "La moneda f\u00edsica est\u00e1 vinculada o regulada por instituciones financieras",
        "La moneda f\u00edsica no puede venir en forma digital"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 son las criptomonedas?",
      opciones: [
        "Son activos digitales que utilizan la criptograf\u00eda para asegurar sus transacciones y controlar la creaci\u00f3n de nuevas unidades que est\u00e1n descentralizadas y son locales por lo que cualquiera puede comprarlas y venderlas dependiendo de su ubicaci\u00f3n",
        "Son activos digitales que utilizan la criptograf\u00eda para asegurar sus transacciones y controlar la creaci\u00f3n de nuevas unidades que est\u00e1n descentralizadas y son globales por lo que cualquiera puede comprarlas y venderlas independientemente de su ubicaci\u00f3n",
        "Son activos digitales que utilizan la criptograf\u00eda para asegurar sus transacciones y controlar la creaci\u00f3n de nuevas unidades que est\u00e1n centralizadas y son globales por lo que cualquiera puede comprarlas y venderlas independientemente de su ubicaci\u00f3n"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "Las dApps de Ethereum no se centran en proporcionar alguna funcionalidad que interact\u00faa con los datos almacenados en el entorno de la cadena de bloques",
        "Las dApps de Ethereum se centran en proporcionar alguna funcionalidad que interact\u00faa con los datos almacenados en el entorno de la cadena de bloques",
        "La interfaz de l\u00ednea de comandos no tiene ninguna ventaja"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es la importaci\u00f3n?",
      opciones: [
        "Lo que define un archivo externo que contiene el c\u00f3digo que necesita un contrato inteligente y es una secci\u00f3n obligatoria",
        "Lo que define un archivo externo que contiene el c\u00f3digo que necesita un contrato inteligente y es una secci\u00f3n opcional",
        "Lo que define un archivo interno que contiene el c\u00f3digo que necesita un contrato inteligente y es una secci\u00f3n opcional"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCual es la afirmaci\u00f3n correctat?",
      opciones: [
        "Los tokens ERC-20 son el \u00fanico tipo de tokens en Ethereum",
        "Los tokens ERC-20 no son el \u00fanico tipo de tokens en Ethereum puesto que otro est\u00e1ndar de tokens que parece que podr\u00eda desafiar la popularidad de ERC-20 es ERC-223",
        "Los tokens ERC-220 son el \u00fanico tipo de tokens en Ethereum"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 hace la declaraci\u00f3n if-else?",
      opciones: [
        "Ejecutar un grupo de instrucciones si una condici\u00f3n es false y, opcionalmente, ejecuta otro conjunto de instrucciones si la condici\u00f3n es true (else)",
        "Ejecutar un grupo de instrucciones si una condici\u00f3n es true y, opcionalmente, ejecuta otro conjunto de instrucciones si la condici\u00f3n es false (else)",
        "La declaraci\u00f3n if-else no existe"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "Las variables locales en las funciones son almacenadas en memory por defecto de forma permanente",
        "Las variables locales en las funciones son almacenadas en memory por defecto de forma temporal",
        "El lenguaje Solidity tiene una palabra clave para la pila pero no tiene las palabras clave memory y storage"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n incorrecta?",
      opciones: [
        "La funci\u00f3n de la EVM en la cadena de bloques Ethereum es mantener el estado de la cadena de bloques",
        "La funci\u00f3n de la EVM en la cadena de bloques Ethereum no es mantener el estado de la cadena de bloques",
        "La funci\u00f3n de la EVM en la cadena de bloques Ethereum no es ejecutar el c\u00f3digo de bytes de los contratos inteligentes"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1ntos lugares define Solidity para guardar datos?",
      opciones: [
        "Cuatro",
        "Tres",
        "Cinco"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "La moneda digital solo existe en l\u00ednea y se almacena en billeteras digitales lo que se convierte en una gran desventaja",
        "Los contratos inteligentes se almacenan en la cadena de bloques, lo que significa que heredan ciertas propiedades y dos propiedades son destacables: la inmutabilidad y la distribuci\u00f3n global",
        "Los contratos inteligentes se almacenan en la cadena de bloques, lo que significa que heredan solo la propiedad de la distribuci\u00f3n global"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es la puerta de entrada en Hyperledger Burrow?:",
      opciones: [
        "Es un componente que proporciona la especificaci\u00f3n de interfaz para conectar el motor de consenso y el motor de aplicaci\u00f3n",
        "Es un componente que proporciona interfaces program\u00e1ticas para integraciones de sistemas e interfaces de usuario",
        "Es un componente que proporciona interfaces program\u00e1ticas que no integra sistemas e interfaces de usuario"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es una herramienta con la que cuenta Hyperledger?:",
      opciones: [
        "Grindr",
        "Grid",
        "Indiana"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es Hyperledger Iroha?:",
      opciones: [
        "Es una plataforma de blockchain dise\u00f1ada para ser f\u00e1cilmente integrable en diversos usos empresariales que no requieren tecnolog\u00eda de registro distribuido",
        "Es una plataforma de blockchain dise\u00f1ada para ser f\u00e1cilmente integrable en diversos usos empresariales que requieren tecnolog\u00eda de registro distribuido",
        "Es una plataforma de blockchain dise\u00f1ada solo para proporcionar valores hash solo para determinados datos r\u00e1pidamente"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?:",
      opciones: [
        "Hyperledger Sawtooth es una plataforma de blockchain peer-to-peer de c\u00f3digo abierto para empresas que puede ejecutar contratos inteligentes personalizados que no admite variedad de algoritmos de consenso",
        "Hyperledger Sawtooth es una plataforma de blockchain-as-a-service de c\u00f3digo abierto para empresas que puede ejecutar contratos inteligentes personalizados que admite una variedad de algoritmos de consenso",
        "Hyperledger Iroha es una plataforma de blockchain-as-a-service de c\u00f3digo abierto para empresas que puede ejecutar contratos inteligentes personalizados que admite una variedad de algoritmos de consenso"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1les son las caracter\u00edsticas de Hyperledger Indy?:",
      opciones: [
        "Solo tiene la caracter\u00edstica de la autosoberan\u00eda",
        "La autosoberan\u00eda, la privacidad y las reclamaciones verificables",
        "La privacidad y las reclamaciones verificables, exclusivamente"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?:",
      opciones: [
        "Una transacci\u00f3n es el acto de transferir la propiedad de un propietario al mismo propietario, basado en datos que describe la transferencia prevista donde se contiene toda la informaci\u00f3n necesaria para ejecutar la transferencia de la propiedad",
        "Respaldar en una transacci\u00f3n significa verificar que obedece a un contrato inteligente",
        "En una transacci\u00f3n de Hyperledger Fabric, la simulaci\u00f3n y la validaci\u00f3n/confirmaci\u00f3n de bloques son dependientes"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfC\u00f3mo se puede instalar Hypreledger Burrow en un ordenador?",
      opciones: [
        "Exclusivamente descargando directamente el binario correspondiente",
        "Descargando el repositorio completo construyendo un binario a partir de \u00e9ste utilizando un compilador Go o descargando directamente el binario correspondiente",
        "Descargando el repositorio completo construyendo un binario a partir de \u00e9ste utilizando un compilador Apple o descargando directamente el binario correspondiente"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 conseguimos con el comando burrow spec -f 1 -p 3 > genesis-spec.json?",
      opciones: [
        "Crear una cuenta con todos los permisos y un n\u00famero ilimitado de cuentas participantes",
        "Crear una cuenta con todos los permisos y tres cuentas participantes",
        "Crear una cuenta con permisos limitados y tres cuentas participantes"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es el consumo de recuros?",
      opciones: [
        "Lo que permite que los desarrolladores experimenten con un \u00fanico tipo de componente",
        "Es un indicador de rendimiento",
        "Es una criptomoneda"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1ndo comenz\u00f3 el desarrollo de Hyperledger Composer?",
      opciones: [
        "En 2020",
        "En 2015",
        "En 2009"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 facilita Hyperledger Composer?",
      opciones: [
        "La confianza en la interpretaci\u00f3n o los intentos de ejecuci\u00f3n de una sola entidad",
        "Facilita la gesti\u00f3n compartida de c\u00f3digo a trav\u00e9s de proyectos para todas las partes interesadas en el desarrollo y despliegue, en lugar de confiar en la interpretaci\u00f3n o los intentos de ejecuci\u00f3n de una sola entidad",
        "No aporta ninguna facilidad"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 soporta Caliper?",
      opciones: [
        "Soporta Composer e Iroha, exclusivamente",
        "Soporta Fabric, Sawtooth, Iroha, Burrow y Composer",
        "Solo soporta Composer"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 es Hyperledger Composer?",
      opciones: [
        "Es una transacci\u00f3n donde se transfiere la propiedad de un propietario al mismo propietario",
        "Es un marco para la construcci\u00f3n de redes comerciales de blockchain",
        "Es un marco para la construcci\u00f3n de redes de trueque de blockchain"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es uno de los objetivos principales de Caliper?",
      opciones: [
        "Caliper no tiene objetivos principales",
        "Proporcionar resultados de rendimiento que puedan ser utilizados por otros proyectos de Hyperledger",
        "Crear una combinaci\u00f3n de las tecnolog\u00edas criptogr\u00e1ficas y de seguridad sin separar la moneda"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "Caliper fue desarrollado inicialmente por Apple y propuesto a Hyperledger a principios de 2018, aceptado y colocado en incubaci\u00f3n el 15 de marzo de 2018",
        "Caliper fue desarrollado inicialmente por Huawei y propuesto a Hyperledger a principios de 2018, aceptado y colocado en incubaci\u00f3n el 15 de marzo de 2018",
        "Caliper fue desarrollado inicialmente por Huawei y propuesto a Hyperledger a finales de 2018"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQui\u00e9n proporcion\u00f3 una visi\u00f3n general de Caliper en la conferencia Consensus en mayo de 2019?",
      opciones: [
        "Nick Gates",
        "Nick Lincoln",
        "Bill Gates"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es uno de los principales impulsores del riesgo?",
      opciones: [
        "Los menores costos de transacci\u00f3n",
        "La falta de liquidez",
        "No hay impulsores del riesgo"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 ventaja tiene la validaci\u00f3n de la educaci\u00f3n y cualificaciones profesionales?",
      opciones: [
        "Enviar y recibir criptomonedas",
        "Mantener los datos de logros acad\u00e9micos y profesionales en una billetera de identidad encriptada permite a los individuos controlar el acceso a sus datos",
        "No existe ventaja"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1les son los principales beneficios de la blockchain en el sector energ\u00e9tico?",
      opciones: [
        "Solo la reducci\u00f3n de costos",
        "La reducci\u00f3n de costos, la sostenibilidad ambiental y la mayor transparencia para las partes interesadas sin comprometer la privacidad",
        "La reducci\u00f3n de costos, la sostenibilidad ambiental y la nula transparencia para las partes interesadas ya que se compromete la privacidad"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfA qu\u00e9 se refieren las ventas y el comercio?",
      opciones: [
        "Solo a la compra de valores y otros instrumentos financieros",
        "A la compra y venta de valores y otros instrumentos financieros",
        "Solo a la venta de valores y otros instrumentos financieros"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1l es la afirmaci\u00f3n correcta?",
      opciones: [
        "En t\u00e9rminos generales, hay solo dos categor\u00edas de participantes en los mercados de capitales para quienes las soluciones basadas en blockchain ofrecen beneficios claros, como por ejemplo, los emisores",
        "En t\u00e9rminos generales, hay cuatro categor\u00edas de participantes en los mercados de capitales para quienes las soluciones basadas en blockchain ofrecen beneficios claros, como por ejemplo, los emisores",
        "La moneda f\u00edsica no est\u00e1 vinculada o regulada por ning\u00fan gobierno o instituci\u00f3n financiera"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfCu\u00e1les son los principales casos de uso de Blockchain en la gesti\u00f3n de identidad?",
      opciones: [
        "Solo la identidad auto soberana",
        "La portabilidad de datos y la identidad auto soberana",
        "Solo la portabilidad de datos"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfLas siglas para el concepto Conozca a su Cliente son?",
      opciones: [
        "CAC",
        "KYC",
        "KCY"
      ],
      correcta: 1
    },
    {
      pregunta: "\u00bfQu\u00e9 ventaja tiene un gobierno basado en blockchain?",
      opciones: [
        "El aumento de procesos intensivos en trabajo",
        "La reducci\u00f3n del potencial de corrupci\u00f3n y abuso",
        "No existen ventajas"
      ],
      correcta: 1
    },
    {
      pregunta: "Las billeteras criptográficas, ¿almacenan su criptografía?",
      opciones: [
        "Sí, almacenan la criptografía utilizada para proteger las claves y transacciones",
        "No, solo almacenan claves públicas/privadas y no la criptografía en sí",
        "Solo almacenan la contraseña de acceso"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Cuáles son tipos de monedas digitales?",
      opciones: [
        "Monedas digitales de bancos centrales, criptomonedas y monedas virtuales",
        "Monedas físicas, monedas digitales y monedas fiduciarias",
        "Solo criptomonedas y monedas digitales de bancos centrales"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué tipo de carteras criptográficas existen?",
      opciones: [
        "Carteras en caliente y en frío",
        "Carteras de papel y de hardware solamente",
        "Carteras en nube y carteras de archivos"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué es la minería de bitcoin?",
      opciones: [
        "El proceso de validar transacciones y crear nuevos bloques usando cálculo criptográfico",
        "Una aplicación para almacenar bitcoin",
        "Un servicio de intercambio de criptomonedas"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué es Ethereum?",
      opciones: [
        "Una plataforma blockchain que permite contratos inteligentes y token nativo",
        "Una criptomoneda que no tiene contrato inteligente",
        "Una red de pago centralizada"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué significa la inmutabilidad en los contratos inteligentes?",
      opciones: [
        "Que las reglas codificadas no cambian una vez desplegadas en la cadena",
        "Que cualquier usuario puede cambiar el contrato en cualquier momento",
        "Que el contrato se elimina automáticamente en cada bloque"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué debe incluir un documento de especificación de software?",
      opciones: [
        "Requisitos funcionales, no funcionales y criterios de aceptación",
        "Solo los nombres de los desarrolladores",
        "Solo el código fuente"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué proyecto anunció Hyperledger a finales de 2018?:",
      opciones: [
        "Hyperledger Caliper",
        "Hyperledger Fabric",
        "Hyperledger Composer"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué es el motor de consenso en Hyperledger Burrow?:",
      opciones: [
        "El componente que decide el orden y validación de transacciones",
        "La herramienta de creación de usuarios",
        "Un módulo de almacenamiento de claves"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué proporciona Cello?:",
      opciones: [
        "Automatización de despliegue y gestión de redes blockchain",
        "Solo almacenamiento en frío para criptomonedas",
        "Una interfaz de usuario para explorar tokens"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Cómo pueden ser divididos los activos digitales?",
      opciones: [
        "Solo se dividen en unidades completas",
        "Pueden ser divididos en fracciones o unidades más pequeñas",
        "No pueden dividirse"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué establece el artículo 20 del Reglamento General de Protección de Datos de la Unión Europea?:",
      opciones: [
        "La obligación de notificar brechas de seguridad",
        "El derecho a la portabilidad de los datos personales",
        "La eliminación obligatoria de todos los datos en cinco años"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Cuáles son características de los datos generados en línea?:",
      opciones: [
        "Pueden ser voluminosos, variados y requieren controles de privacidad",
        "Siempre son privados y no pueden compartirse",
        "No son útiles para análisis"
      ],
      correcta: 1
    }
  ]
};

let preguntas = [];
let preguntaActual = 0;
let respuestasUsuario = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function agregarPreguntas(asignatura, nuevasPreguntas) {
  const existentes = new Set(tests[asignatura].map(p => p.pregunta.trim().toLowerCase()));
  const agregadas = nuevasPreguntas.filter(p => !existentes.has(p.pregunta.trim().toLowerCase()));
  if (agregadas.length > 0) {
    tests[asignatura].push(...agregadas);
  }
  return agregadas.length;
}

function cargarAsignatura(asignatura) {

  preguntas = shuffleArray([...tests[asignatura]]);
  preguntaActual = 0;
  respuestasUsuario = [];

  document.getElementById("menu").classList.add("oculto");
  document.getElementById("test").classList.remove("oculto");
  document.getElementById("listaPreguntasCard").classList.remove("oculto");
  document.getElementById("estadisticas").classList.add("oculto");
  document.getElementById("resumenFinal").classList.add("oculto");
  document.getElementById("navegacionPreguntas").classList.remove("oculto");

  document.getElementById("tituloAsignatura").innerText = asignatura;

  mostrarPregunta();
  actualizarListaPreguntas();

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = "";
    searchInput.oninput = filtrarPreguntas;
  }

  filtrarPreguntas();
}

function mostrarPregunta() {

  const pregunta = preguntas[preguntaActual];

  document.getElementById("contador").innerText =
    `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;

  document.getElementById("pregunta").innerText =
    pregunta.pregunta;

  const opcionesDiv = document.getElementById("opciones");

  opcionesDiv.innerHTML = "";

  pregunta.opciones.forEach((opcion, index) => {

    const boton = document.createElement("button");

    boton.innerText = opcion;

    boton.onclick = () => seleccionarRespuesta(index, boton);

    opcionesDiv.appendChild(boton);
  });

  document.getElementById("resumenFinal").classList.add("oculto");
  document.getElementById("navegacionPreguntas").classList.remove("oculto");

  // limpiar y ocultar feedback al mostrar nueva pregunta
  const feedbackEl = document.getElementById('feedback');
  if (feedbackEl) {
    feedbackEl.classList.add('oculto');
    feedbackEl.innerText = '';
  }
}

function actualizarListaPreguntas() {
  const lista = document.getElementById("listaPreguntas");
  lista.innerHTML = preguntas.map((pregunta, index) => {
    const opciones = pregunta.opciones.map((opcion, i) =>
      `<div class="item-option ${i === pregunta.correcta ? 'correcta-item' : ''}">${opcion}</div>`
    ).join("");

    return `
      <div class="pregunta-item">
        <div class="item-title">${index + 1}. ${pregunta.pregunta}</div>
        ${opciones}
      </div>
    `;
  }).join("");
}

function filtrarPreguntas() {
  const filtro = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".pregunta-item");

  items.forEach(item => {
    const texto = item.innerText.toLowerCase();
    item.style.display = texto.includes(filtro) ? "block" : "none";
  });
}

function obtenerEstadisticas(final = false) {
  let aciertos = 0;
  let fallos = 0;
  let respondidas = 0;

  preguntas.forEach((pregunta, index) => {
    const respuesta = respuestasUsuario[index];

    if (respuesta === undefined) {
      if (final) {
        fallos++;
      }
    } else {
      respondidas++;
      if (respuesta === pregunta.correcta) {
        aciertos++;
      } else {
        fallos++;
      }
    }
  });

  const total = final ? preguntas.length : respondidas;
  const porcentaje = total > 0 ? Math.round((aciertos / total) * 100) : 0;

  return { aciertos, fallos, porcentaje, total };
}

function corregir() {
  const stats = obtenerEstadisticas(false);

  document.getElementById("aciertos").innerText = stats.aciertos;
  document.getElementById("fallos").innerText = stats.fallos;
  document.getElementById("porcentaje").innerText = `${stats.porcentaje}%`;
  document.getElementById("total").innerText = stats.total;
  document.getElementById("estadisticas").classList.remove("oculto");
}

function reiniciarEstadisticas() {
  respuestasUsuario = [];
  document.getElementById("aciertos").innerText = 0;
  document.getElementById("fallos").innerText = 0;
  document.getElementById("porcentaje").innerText = `0%`;
  document.getElementById("total").innerText = preguntas.length;
  document.getElementById("resumenFinal").classList.add("oculto");
  document.getElementById("estadisticas").classList.add("oculto");
  document.getElementById("navegacionPreguntas").classList.remove("oculto");
  mostrarPregunta();
}

function reiniciarPregunta() {
  // permite volver a contestar la pregunta actual
  respuestasUsuario[preguntaActual] = undefined;
  const botones = document.querySelectorAll('#opciones button');
  botones.forEach(btn => btn.classList.remove('correcta', 'incorrecta'));
  const feedback = document.getElementById('feedback');
  if (feedback) {
    feedback.classList.add('oculto');
    feedback.innerText = '';
  }
}

function mostrarResumenFinal() {
  const stats = obtenerEstadisticas(true);

  document.getElementById("aciertos").innerText = stats.aciertos;
  document.getElementById("fallos").innerText = stats.fallos;
  document.getElementById("porcentaje").innerText = `${stats.porcentaje}%`;
  document.getElementById("total").innerText = stats.total;

  document.getElementById("resumenAciertos").innerText = stats.aciertos;
  document.getElementById("resumenFallos").innerText = stats.fallos;
  document.getElementById("resumenPorcentaje").innerText = `${stats.porcentaje}%`;
  document.getElementById("resumenTotal").innerText = stats.total;

  document.getElementById("estadisticas").classList.remove("oculto");
  document.getElementById("resumenFinal").classList.remove("oculto");
  document.getElementById("navegacionPreguntas").classList.add("oculto");
  document.getElementById("listaPreguntasCard").classList.add("oculto");
}

function reiniciarTest() {
  preguntaActual = 0;
  respuestasUsuario = [];
  document.getElementById("resumenFinal").classList.add("oculto");
  document.getElementById("estadisticas").classList.add("oculto");
  document.getElementById("navegacionPreguntas").classList.remove("oculto");
  document.getElementById("listaPreguntasCard").classList.remove("oculto");
  mostrarPregunta();
}

function seleccionarRespuesta(index, boton) {

  const correcta = preguntas[preguntaActual].correcta;

  respuestasUsuario[preguntaActual] = index;

  const botones =
    document.querySelectorAll("#opciones button");

  botones.forEach(btn => {
    btn.classList.remove("correcta", "incorrecta");
  });

  if (index === correcta) {
    boton.classList.add("correcta");
  } else {
    boton.classList.add("incorrecta");
    botones[correcta].classList.add("correcta");
  }

  // mostrar feedback inmediato debajo de las opciones
  const feedback = document.getElementById('feedback');
  if (feedback) {
    const correctaTxt = preguntas[preguntaActual].opciones[correcta];
    if (index === correcta) {
      feedback.innerText = '✔ Respuesta correcta.';
      feedback.style.background = 'rgba(230, 255, 240, 0.95)';
      feedback.classList.remove('oculto');
    } else {
      feedback.innerText = `✖ Respuesta incorrecta. La respuesta correcta es: ${correctaTxt}`;
      feedback.style.background = 'rgba(255, 236, 236, 0.98)';
      feedback.classList.remove('oculto');
    }
  }
}

function siguientePregunta() {

  if (preguntaActual < preguntas.length - 1) {
    preguntaActual++;
    mostrarPregunta();
    corregir();
  } else {
    mostrarResumenFinal();
  }
}

function anteriorPregunta() {

  if (preguntaActual > 0) {
    preguntaActual--;
    mostrarPregunta();
  }
}

function volverMenu() {

  document.getElementById("menu").classList.remove("oculto");
  document.getElementById("test").classList.add("oculto");
  document.getElementById("listaPreguntasCard").classList.add("oculto");
  document.getElementById("estadisticas").classList.add("oculto");
  document.getElementById("resumenFinal").classList.add("oculto");
}