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
    }
  ],
  interfaces: [],
  ingles: [],
  hlc: []
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
}

function actualizarListaPreguntas() {
  const lista = document.getElementById("listaPreguntas");
  lista.innerHTML = preguntas.map((pregunta, index) => {
    const opciones = pregunta.opciones.map(opcion =>
      `<div class="item-option">${opcion}</div>`
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

function corregir() {
  const total = preguntas.length;
  let aciertos = 0;
  let fallos = 0;

  respuestasUsuario.forEach((respuesta, index) => {
    if (respuesta !== undefined) {
      if (respuesta === preguntas[index].correcta) {
        aciertos++;
      } else {
        fallos++;
      }
    }
  });

  const porcentaje = total > 0 ? Math.round((aciertos / total) * 100) : 0;
  document.getElementById("aciertos").innerText = aciertos;
  document.getElementById("fallos").innerText = fallos;
  document.getElementById("porcentaje").innerText = `${porcentaje}%`;
  document.getElementById("total").innerText = total;
  document.getElementById("estadisticas").classList.remove("oculto");
}

function reiniciarEstadisticas() {
  respuestasUsuario = [];
  document.getElementById("estadisticas").classList.add("oculto");
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
}

function siguientePregunta() {

  if (preguntaActual < preguntas.length - 1) {
    preguntaActual++;
    mostrarPregunta();
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
}