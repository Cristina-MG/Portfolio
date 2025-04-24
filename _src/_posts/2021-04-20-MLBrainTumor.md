---
layout: project
title: "Detección y clasificación de tumores cerebrales con redes neuronales recurrentes "
id: TUMOR-CEREBRAL
tags: ["Machine Learning", "Deep Learning", "Salud", "CNN"]
date: 2021-04-20
description: "Proyecto de Machine Learning para la detección y clasificación de tumores cerebrales mediante resonancia magnética, utilizando CNN y Transfer Learning."
---

Este proyecto de **Machine Learning** tiene como objetivo asistir en el **diagnóstico de tumores cerebrales** mediante el análisis automático de **imágenes por resonancia magnética (MRI)**. La idea es ayudar a profesionales médicos a detectar y clasificar tumores de forma más rápida y precisa, especialmente en contextos donde hay escasez de radiólogos.

### Contexto Médico

Los **tumores cerebrales** se consideran una de las enfermedades más agresivas que pueden afectar tanto a adultos como a niños. Representan entre el 80% y el 90% de los tumores primarios del sistema nervioso central (SNC). La tasa de supervivencia a cinco años para personas con tumores cerebrales malignos ronda el 34% en hombres y el 36% en mujeres.

El diagnóstico temprano y un tratamiento preciso son claves para mejorar la esperanza de vida, y uno de los métodos más eficaces de detección es el análisis de **imágenes de resonancia magnética (MRI)**. Sin embargo, este proceso suele ser largo y requiere alta especialización.

### Solución Propuesta

Mediante el uso de algoritmos de **Deep Learning**, se ha desarrollado un modelo capaz de:

- Detectar la **presencia de un tumor cerebral**.
- Clasificar el tipo de tumor a partir de imágenes médicas.
- Reducir el tiempo de análisis y facilitar el trabajo de los radiólogos.

![Modelo ML](/assets/img/ML-TumorCerebral/ML_MODELO.jpg)

### Técnicas y Algoritmos

El modelo ha sido entrenado utilizando:

- **Redes Neuronales Convolucionales (CNN)** para el procesamiento de imágenes.
- **Transfer Learning**, utilizando modelos preentrenados para mejorar la precisión con menos datos.
- Técnicas de **preprocesamiento de imágenes**, aumento de datos (data augmentation), y validación cruzada.

### Aplicaciones del Proyecto

- Soporte al diagnóstico médico asistido por IA.
- Implementación en centros hospitalarios con escasez de especialistas.
- Reducción del tiempo necesario para emitir diagnósticos complejos.

### Código y Repositorio

Puedes consultar todo el código y los detalles técnicos en el [repositorio del proyecto en GitHub](https://github.com/Cristina-MG/Brain-Tumor-)
