![Bsalelogo](https://res.cloudinary.com/programandoandopf/image/upload/v1665882913/PF/download_lxqv6a.png)

# BSALE TEST - BACK END

## Enunciado

La idea general de esta API Rest es poder interactuar con una base de datos, proporcionada en esta ocasión en MySQL. Y obtener información de los productos y categorías para un modelo de un e-commerce.

## Contenido

Back-End controlador de productos de un ecommerce y categorías de productos.
El proyecto esta realizado en:

- [Node.js](https://nodejs.org/es/)
- [Express.js](https://expressjs.com/es/)
- [MySQL](https://www.mysql.com)
- [Sequelize](https://sequelize.org)

**ESTE ES UN SERVIDOR NO VISUAL**

## Programas necesarios

Para poder utilizar el proyecto en localhost en necesario clonarlo y tener algunos programas necesarios:

- [Nodejs](https://nodejs.org/es/download/) v16.16.0 o Superior.
- IDE de desarrollo de tu comodidad Ej. [VS Code](https://code.visualstudio.com/download)
- [PostMan](https://www.postman.com/downloads/) para puebas de APIS. (Opcional)
- [Git](https://git-scm.com/downloads) para poder gestionar las versiones.

## Como Clonar

Comando para clonar:

```bash
cd existing_folder
git clone https://github.com/Danzsv/Bsale_BACK.git
```

## Intalación

Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:

```bash
npm install
```

### Run en LocalHost:

Crear un archivo `.env` (lo usaremos para declarar las variables de entorno) , y declarar las siguientes variables en el archivo `.env` para ejecutar correctamente el servidor

```env
PORT = 3001
MYSQL_DATABASE = bsale_test
MYSQL_USER= bsale_test
MYSQL_PASSWORD= bsale_test
MYSQL_HOST= mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
```

Con las variables de entorno listas, ejecutamos el siguiente comando:

```bash
npm run dev
```

Si hicimos correctamente los pasos anteriores, en nuestra consola deberíamos ver los siguientes mensajes:

```bash
App Ready on port: 3001
Executing (default): SELECT 1+1 AS result
MYSQL SUCCESSFUL CONNECTION
```

# API

## Obtener Lista de Productos

### Request

`GET /api/products`

```bash
http://localhost:3001/api/products
```

### Response

En este ejemplo obtenemos una lista de productos, en forma de un array con varios objetos, que vendrían a ser los productos solicitados. Y que podemos observar que estos a su vez tienen propiedades. En donde cabe diferenciar que la propiedad `product_name`, y la propiedad `product_id`, corresponden al producto, y en cambio las propiedades `id`, y `name` pertenecen a la categoría.

```bash
[
  {
    "id": 1,
    "name": "bebida energetica",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1,
    "product_id": 5,
    "product_name": "ENERGETICA MR BIG"
  },
  {
    "id": 1,
    "name": "bebida energetica",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    "price": 1490,
    "discount": 0,
    "category": 1,
    "product_id": 6,
    "product_name": "ENERGETICA RED BULL"
  },
  {
    "id": 1,
    "name": "bebida energetica",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
    "price": 1290,
    "discount": 0,
    "category": 1,
    "product_id": 7,
    "product_name": "ENERGETICA SCORE"
  }
]
```

- `name`: nombre de la categoría correspondiente al producto
- `url_image`: url de la imagen del producto, subida a un servicio en la nube
- `price`: precio del producto
- `discount`: porcentaje de descuento del producto
- `category` : id de la categoría correspondiente al producto
- `product_id`: id del producto
- `product_name`: nombre del producto

## Obtener productos por nombre

### Request

`GET /api/products?name="value"`

```bash
http://localhost:3001/api/products?name="value"
```

### Response

En este ejemplo obtenemos una lista de productos que coincidan con valor ingresemos en "name=value", en este ejemplo el valor de `value` es `fanta`.

```bash
[
  {
    "id": 4,
    "name": "bebida",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/fanta_2lt5236.jpg",
    "price": 1500,
    "discount": 0,
    "category": 4,
    "product_id": 52,
    "product_name": "Fanta"
  }
]
```

- `name`: nombre de la categoría correspondiente al producto
- `url_image`: url de la imagen del producto, subida a un servicio en la nube
- `price`: precio del producto
- `discount`: porcentaje de descuento del producto
- `category` : id de la categoría correspondiente al producto
- `product_id`: id del producto
- `product_name`: nombre del producto

## Obtener productos por categoría

### Request

`GET /api/products?category="value"`

```bash
http://localhost:3001/api/products?category="value"
```

### Response

En esta ocasión podremos obtener los productos deseados por categoría, donde me traera únicamente los productos que coincidan con valor ingresemos en "category=value", en este ejemplo el valor de `value` es `snack`.

```bash
[
  {
    "id": 5,
    "name": "snack",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg",
    "price": 600,
    "discount": 0,
    "category": 5,
    "product_id": 47,
    "product_name": "Maní salado"
  },
  {
    "id": 5,
    "name": "snack",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
    "price": 500,
    "discount": 0,
    "category": 5,
    "product_id": 53,
    "product_name": "Mani Sin Sal"
  },
  {
    "id": 5,
    "name": "snack",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
    "price": 1490,
    "discount": 0,
    "category": 5,
    "product_id": 54,
    "product_name": "Papas Fritas Lisas Bolsa Grande"
  }
]
```

- `name`: nombre de la categoría correspondiente al producto
- `url_image`: url de la imagen del producto, subida a un servicio en la nube
- `price`: precio del producto
- `discount`: porcentaje de descuento del producto
- `category` : id de la categoría correspondiente al producto
- `product_id`: id del producto
- `product_name`: nombre del producto

## Obtener productos por páginas

### Request

`GET /api/products?page="value"`

```bash
http://localhost:3001/api/products?page="value"
```

### Response

Tambiém podremos ordenar los productos deseados por páginas, donde me traera únicamente los productos de la página correspondiente donde "page=value", en este ejemplo el valor de `value` es `3`.

```bash
[
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral409215.jpg",
    "price": 4990,
    "discount": 20,
    "category": 2,
    "product_id": 20,
    "product_name": "PISCO MISTRAL 40º "
  },
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr359305.jpg",
    "price": 4590,
    "discount": 20,
    "category": 2,
    "product_id": 21,
    "product_name": "PISCO TRES ERRES 35º"
  },
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr409319.jpg",
    "price": 4990,
    "discount": 20,
    "category": 2,
    "product_id": 22,
    "product_name": "PISCO TRES ERRES 40º"
  },
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/358978.jpg",
    "price": 4990,
    "discount": 0,
    "category": 2,
    "product_id": 87,
    "product_name": "PISCO MISTRAL 35°"
  },
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/grannobel9104.jpg",
    "price": 19900,
    "discount": 0,
    "category": 2,
    "product_id": 88,
    "product_name": "PISCO MISTRAL GRAN NOBEL 40°"
  },
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/409346.jpg",
    "price": 4990,
    "discount": 0,
    "category": 2,
    "product_id": 89,
    "product_name": "PISCO MISTRAL 40°"
  },
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/469463.jpg",
    "price": 7890,
    "discount": 0,
    "category": 2,
    "product_id": 90,
    "product_name": "PISCO MISTRAL 46°"
  },
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobel409551.jpg",
    "price": 19990,
    "discount": 0,
    "category": 2,
    "product_id": 91,
    "product_name": "PISCO MISTRAL NOBEL 40°"
  },
  {
    "id": 2,
    "name": "pisco",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobelanejado9639.jpg",
    "price": 15990,
    "discount": 15,
    "category": 2,
    "product_id": 92,
    "product_name": "PISCO MISTRAL NOBEL 46"
  },
  {
    "id": 3,
    "name": "ron",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
    "price": 4990,
    "discount": 0,
    "category": 3,
    "product_id": 23,
    "product_name": "RON BACARDI AÑEJO"
  }
]
```

- `name`: nombre de la categoría correspondiente al producto
- `url_image`: url de la imagen del producto, subida a un servicio en la nube
- `price`: precio del producto
- `discount`: porcentaje de descuento del producto
- `category` : id de la categoría correspondiente al producto
- `product_id`: id del producto
- `product_name`: nombre del producto

## Obtener listado de categorías

### Request

`GET /api/categories`

```bash
http://localhost:3001/api/categories"
```

### Response

Aquí podremos obtener una lista de todas las categorías, representado en un array de objetos con todas las categorías`.

```bash
[
  {
    "id": 1,
    "name": "bebida energetica"
  },
  {
    "id": 2,
    "name": "pisco"
  },
  {
    "id": 3,
    "name": "ron"
  },
  {
    "id": 4,
    "name": "bebida"
  },
  {
    "id": 5,
    "name": "snack"
  },
  {
    "id": 6,
    "name": "cerveza"
  },
  {
    "id": 7,
    "name": "vodka"
  }
]
```

- `id` : id de la categoría
- `name`: nombre de la categoría
