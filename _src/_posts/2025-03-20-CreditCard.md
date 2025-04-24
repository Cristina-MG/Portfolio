---
layout: project
title: "Análisis de Solicitudes de Tarjeta de Crédito"
id: CAMBIOS
tags: ["Power BI", "ITSM"]
date: 2025-03-01
description: "Dashboard en Power BI para el análisis y perfilado de solicitantes de tarjetas de crédito"
---

En este proyecto he desarrollado un **dashboard interactivo** utilizando **Power BI**, con el objetivo de analizar las **solicitudes de tarjetas de crédito** y entender los factores asociados con su **aprobación o rechazo**. El proyecto permite obtener insights relevantes para departamentos de riesgo o marketing dentro del sector bancario.

### Vista General del Dashboard
La pestaña principal **"Análisis de Solicitudes de Tarjeta de Crédito"** presenta indicadores clave como:

- Total de solicitudes recibidas.
- Porcentaje de solicitudes aprobadas y denegadas.
- Ingresos familiares medios de los solicitantes según el resultado.

Además, se visualizan **gráficos desglosados** por:

- **Ingresos familiares**: relación entre nivel de ingresos y aceptación.
- **Antigüedad laboral**: cómo influye la experiencia en la aprobación.
- **Tipo de ocupación**: diferencias según el sector profesional.

![Dashboard Principal](/assets/img/CreditCard/1.png)


### Perfil de Solicitantes Rechazados

La segunda vista se centra en **analizar el perfil de los solicitantes cuya solicitud fue denegada**. Aquí se destacan:

- Total de solicitudes rechazadas.
- Antigüedad media y nivel de ingresos.
- Distribuciones por unidad familiar, estado laboral y tipo de ocupación.
- Comparativa de rechazo entre personas desempleadas y empleadas.

![Dashboard Solicitantes Rechazados](/assets/img/CreditCard/2.png)

### Objetivo del Proyecto

Este dashboard permite a los analistas:

- Detectar patrones en los rechazos de solicitud.
- Comprender qué variables tienen más peso en la aprobación.
- Perfilar segmentos de clientes con mayor probabilidad de aprobación futura.

### Dataset y Modelado

Los datos utilizados han sido **simulados para fines educativos**, y el modelo se ha construido con medidas y segmentaciones personalizadas en Power BI, empleando **lenguaje DAX** para el cálculo de indicadores clave.
