# Módulo KC NodeJS

Este repositorio ha sido usado tanto para seguir las clases durante las dos semanas como para realizar la práctica, usando el directorio _nodepop_

## examples

Usado para ilustrar los ejemplos del profesor durante las clases

## nodeapi

Usado para practicar con express, mongodb y sus configuraciones

### requirements

- MondoDB: To start a local server execute `mongod --dbpath='/home/grusite/data/db'`
- En la carpeta /home/grusite/mongodbBin está el mongo para poder juguetear con la BBDD `./mongo`

### API Methods

#### Agents list

http://localhost:3000/apiv1/agentes

#### Parameters:

limit: numeric. Limits the number of results returned
