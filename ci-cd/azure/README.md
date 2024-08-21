# Azure DevOps Pipelines - Ejemplos y Documentación

Este repositorio contiene una colección de ejemplos de pipelines en Azure DevOps que abordan diferentes escenarios de despliegue, incluyendo el uso de Python, Shell, Ansible, y más. A continuación, se detalla la estructura de los pipelines y se describen los componentes clave utilizados en estos ejemplos.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Componentes Principales](#componentes-principales)
  - [Steps](#steps)
  - [Stages](#stages)
  - [Jobs](#jobs)
  - [Tasks](#tasks)
  - [Variables](#variables)
  - [Conditions](#conditions)
- [Ejemplos de Pipelines](#ejemplos-de-pipelines)
  - [Pipeline Básico](#azure-pipeline_básico)
  - [Pipeline Intermedio](#azure-pipeline_intermedio)
  - [Pipeline Avanzado](#azure-pipeline_avanzado)
- [Descripción de los Steps](#descripción-de-los-steps)
- [Referencias](#referencias)

## Introducción

Este repositorio está diseñado para proporcionar ejemplos prácticos y documentación sobre cómo construir y gestionar pipelines en Azure DevOps. Cada ejemplo está pensado para cubrir un escenario diferente, desde configuraciones básicas hasta despliegues avanzados.

## Componentes Principales

### Steps

Los "steps" son las unidades básicas de trabajo dentro de un pipeline de Azure DevOps. Son las acciones específicas que realiza el pipeline, como ejecutar un script, instalar dependencias, ejecutar pruebas, etc. Algunos ejemplos comunes de steps incluyen:

- script: <br>Ejecuta comandos de shell.<br><br>
- bash: <br>Ejecuta scripts de Bash en un entorno Linux.<br><br>
- powershell: <br>Ejecuta scripts de PowerShell.<br><br>
- checkout: <br>Obtiene el código fuente del repositorio.<br><br>
- task: <br>Ejecuta una tarea predefinida de Azure Pipelines.<br><br>
- publish: Publica artefactos generados durante el pipeline.<br><br>

### Stages

Los stages son las divisiones más grandes en un pipeline, representando diferentes fases de ejecución, como "Build", "Test", "Deploy". Cada stage puede contener múltiples jobs. Los stages permiten organizar y controlar el flujo de trabajo, incluyendo la ejecución condicional y la paralelización.

### Jobs

Los jobs son grupos de steps que se ejecutan en un solo agente de forma secuencial. Los jobs pueden ejecutarse en paralelo, lo que permite dividir el trabajo en varias partes que pueden ser ejecutadas simultáneamente, dependiendo de la configuración del pipeline.

### Tasks

Las tasks son pasos específicos dentro de un job que realizan tareas particulares, como compilar código, ejecutar pruebas unitarias, o desplegar una aplicación. Azure DevOps proporciona una amplia variedad de tasks predefinidas para diferentes lenguajes y plataformas.

### Variables

Las variables en un pipeline de Azure DevOps se utilizan para almacenar valores que pueden cambiar en diferentes ejecuciones del pipeline, como configuraciones, rutas de archivos, credenciales, etc. Las variables pueden ser definidas a nivel de pipeline, stage, o job, y pueden ser sobreescritas según sea necesario.

### Conditions

Las conditions se utilizan para controlar cuándo se ejecutan ciertos stages, jobs o steps, basándose en el estado del pipeline, como si una ejecución anterior tuvo éxito o falló, si se trata de un commit en una rama específica, entre otros.
