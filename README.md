<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control y Agendamiento de Pacientes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
        }
        h1, h2, h3 {
            color: #333;
        }
        .section {
            margin-bottom: 30px;
        }
        .section-title {
            font-size: 24px;
            border-bottom: 2px solid #333;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }
        .logo {
            max-width: 200px;
            margin-bottom: 20px;
        }
        .feature {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .feature img {
            max-width: 30px;
            margin-right: 10px;
        }
        .screenshots {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .screenshot {
            max-width: 45%;
        }
        .screenshot img {
            width: 100%;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="section">
        <img src="./docs/logo.png" alt="Logo de la Aplicación" class="logo">
        <h1>Control y Agendamiento de Pacientes</h1>
    </div>

    <div class="section">
        <h2 class="section-title">Descripción</h2>
        <p>Este repositorio contiene una aplicación web para el control y agendamiento de pacientes. Facilita la gestión de citas, historias clínicas, facturas y pagos. Desarrollada con Next.js, Spring Boot y MySQL, desplegada en AWS utilizando Docker y RDS de Amazon.</p>
    </div>

    <div class="section">
        <h2 class="section-title">Características</h2>
        <div class="feature">
            <img src="./docs/login-icon.png" alt="Ícono de Login">
            <p>Sistema de Login: Autenticación segura con Spring Boot y JWT.</p>
        </div>
        <div class="feature">
            <img src="./docs/dashboard-icon.png" alt="Ícono de Dashboard">
            <p>Dashboard con Gráficas: Visualización de estadísticas clave.</p>
        </div>
        <div class="feature">
            <img src="./docs/calendar-icon.png" alt="Ícono de Calendario">
            <p>Agendamiento de Citas: Gestión eficiente de citas médicas.</p>
        </div>
        <div class="feature">
            <img src="./docs/medical-record-icon.png" alt="Ícono de Historias Clínicas">
            <p>Historias Clínicas: Registro detallado de la salud de los pacientes.</p>
        </div>
        <div class="feature">
            <img src="./docs/invoice-icon.png" alt="Ícono de Facturas">
            <p>Facturas y Pagos: Generación y seguimiento de transacciones financieras.</p>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Capturas de Pantalla</h2>
        <div class="screenshots">
            <div class="screenshot">
                <img src="./docs/login-screenshot.png" alt="Pantalla de Login">
                <p>Pantalla de Login</p>
            </div>
            <div class="screenshot">
                <img src="./docs/dashboard-screenshot.png" alt="Dashboard con Gráficas">
                <p>Dashboard con Gráficas</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Instalación y Configuración</h2>
        <h3>Clonar el Repositorio</h3>
        <pre><code>git clone https://github.com/tu-usuario/nombre-del-repositorio.git<br>cd nombre-del-repositorio</code></pre>

        <h3>Configuración de Backend</h3>
        <ol>
            <li>Configurar la base de datos MySQL en <code>src/main/resources/application.properties</code>:</li>
            <pre><code>spring.datasource.url=jdbc:mysql://localhost:3306/tu_basededatos<br>spring.datasource.username=tu_usuario<br>spring.datasource.password=tu_contraseña</code></pre>
            <li>Construir y ejecutar el backend:</li>
            <pre><code>./mvnw clean install<br>./mvnw spring-boot:run</code></pre>
        </ol>

        <h3>Configuración de Frontend</h3>
        <ol>
            <li>Instalar dependencias y ejecutar el frontend:</li>
            <pre><code>cd frontend<br>npm install<br>npm run dev</code></pre>
        </ol>

        <h3>Docker</h3>
        <ol>
            <li>Construir y ejecutar los contenedores Docker:</li>
            <pre><code>docker-compose up --build</code></pre>
        </ol>

        <h3>Despliegue en AWS</h3>
        <ol>
            <li>Crear una instancia de base de datos RDS en AWS y actualizar la configuración en <code>application.properties</code>.</li>
            <li>Desplegar los contenedores Docker en AWS utilizando Amazon ECS u otro servicio.</li>
        </ol>
    </div>

    <div class="section">
        <h2 class="section-title">Uso</h2>
        <p>Acceder a la aplicación en <a href="http://localhost:3000">http://localhost:3000</a> para comenzar a utilizar las funcionalidades de control y agendamiento de pacientes.</p>
    </div>

    <div class="section">
        <h2 class="section-title">Contribuir</h2>
        <ol>
            <li>Hacer un fork del proyecto.</li>
            <li>Crear una nueva rama (<code>git checkout -b feature/nueva-funcionalidad</code>).</li>
            <li>Hacer commit de los cambios (<code>git commit -am 'Agregar nueva funcionalidad'</code>).</li>
            <li>Hacer push a la rama (<code>git push origin feature/nueva-funcionalidad</code>).</li>
            <li>Abrir un Pull Request.</li>
        </ol>
    </div>

    <div class="section">
        <h2 class="section-title">Licencia</h2>
        <p>Este proyecto está bajo la licencia MIT. Ver el archivo <a href="LICENSE">LICENSE</a> para más detalles.</p>
    </div>

    <div class="section">
        <h2 class="section-title">Contacto</h2>
        <ul>
            <li><strong>Nombre:</strong> Paulina</li>
            <li><strong>Email:</strong> tu-email@ejemplo.com</li>
        </ul>
        <p>¡Gracias por utilizar nuestra aplicación!</p>
    </div>
</body>
</html>
