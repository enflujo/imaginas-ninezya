# Aplicaciones para tablero de Niñez YA

![Estilo Código](https://github.com/enflujo/imagina-ninezya/actions/workflows/estilo-codigo.yml/badge.svg)
![Despliegue](https://github.com/enflujo/imagina-ninezya/actions/workflows/despliegue.yml/badge.svg)
![Tamaño](https://img.shields.io/github/repo-size/enflujo/imagina-ninezya?color=%235757f7&label=Tama%C3%B1o%20repo&logo=open-access&logoColor=white)
![Licencia](https://img.shields.io/github/license/enflujo/imagina-ninezya?label=Licencia&logo=open-source-initiative&logoColor=white)

El **SIYA (Sistema de Indicadores de los YA)** tiene como objetivo central entregar indicadores relevantes, actualizados y de alta calidad a quienes tienen el poder y la responsabilidad de lograr el desarrollo pleno de niñas, niños y adolescentes: sociedad civil, funcionarios públicos, candidatos, mandatarios, legisladores, entre otros.

![](aplicaciones/www/estaticos/imagenes/SEO_general.webp)

## Aplicaciones

Este repositorio contiene dos aplicaciones que componen el proyecto:

- **Procesador**: Transforma y procesa las fuentes de datos `.xlsx` y exporta archivos `.json` para ser utilizados en el tablero.
- **www**: El sitio del tablero.

## Apropiación o desarrollo

### Instalación

En su computador debe tener instalado:

- [NodeJS](https://nodejs.org/en/download 'Instrucciones para descargar NodeJS')
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable 'Instrucciones para instalar Yarn')

Primero instalar las dependencias con:

```bash
yarn
```

### Iniciar tablero en servidor local

```bash
yarn dev
```
