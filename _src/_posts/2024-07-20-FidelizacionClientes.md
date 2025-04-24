---
layout: project
title: "Shiny"
id: FIDELIZACION
tags: ["R", "Shiny", "Customer Loyalty", "Banking"]
date: 2024-07-20
description: "Aplicación en R y Shiny para monitorizar la fidelización de clientes en el sector bancario mediante dashboards, segmentación y modelos predictivos."
---

En este proyecto he desarrollado una **aplicación** utilizando **R** y **Shiny** para monitorizar la **fidelidad de clientes** en el **sector bancario**. La aplicación está estructurada en varias **pestañas**, cada una enfocada en un aspecto diferente del análisis de la lealtad del cliente.

### Overview

La pestaña **"Overview"** incluye un **dashboard** con distintos **gráficos** que permiten analizar el estado de la fidelización según variables como **país**, **edad** y **solvencia económica**.

![Overview](/assets/img/Fidelización/Fidelizacion_1.png)

### Análisis de Segmentos de Clientes

Esta sección se centra en el análisis de **segmentos de clientes**, identificados mediante un modelo de **K-means**. Los clientes se dividen en cuatro grupos:

- **Celestial Customer**
- **Esmerald Customer**
- **Purple Customer**
- **Golden Customer**

Se presentan sus características principales y gráficos que muestran el estado de fidelidad por segmento.

![Segmentos](/assets/img/Fidelización/Fidelizacion_2.png)

### Predicción de Fidelidad

En la pestaña **"Prediction"**, se utiliza un **árbol de decisión** como modelo predictivo. El usuario puede introducir distintas variables y obtener la **probabilidad de que un cliente continúe utilizando los servicios** de la empresa.

![Predicción](/assets/img/Fidelización/Fidelizacion_3.png)

### Información del Dataset

La última pestaña ofrece información detallada sobre el **dataset** empleado, lo que permite al usuario explorar los datos y comprender mejor la base del análisis.

### Recursos Adicionales

Puedes consultar el código y documentación completa en el [repositorio de GitHub](https://github.com/Cristina-MG/APP_FIDELIZACION_CLIENTES)
