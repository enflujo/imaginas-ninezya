import {
  actualizarUrl,
  añoSeleccionado,
  color,
  datosIndicadorDep,
  lugaresSeleccionados,
  nivel,
  revisarDepartamentos,
} from '@/utilidades/cerebro';
import MapaDetalle from './MapaDetalle';
import type { DatosAño } from '@/tipos';
import type { Categoria } from '@/tiposCompartidos/compartidos';
import { convertirEscala } from '@enflujo/alquimia';

export default class CategoriasRadiales extends MapaDetalle {
  centro: { x: number; y: number };
  pasoAngulo: number;
  marcas: { textos: SVGTextElement[]; lineas: SVGLineElement[] };
  poligonosReferencia: SVGPolygonElement[];
  marcasReferencia: SVGTextElement[];
  araña: SVGPolygonElement;
  numeroReferencias: number;

  constructor(categorias: Categoria[]) {
    super();
    this.tipo = 'categorias';
    this.categorias = categorias;
    this.pasoAngulo = (Math.PI * 2) / categorias.length;
    this.marcas = { textos: [], lineas: [] };
    this.poligonosReferencia = [];
    this.marcasReferencia = [];
    this.numeroReferencias = 5;
  }

  /**
   * Crea los botones de las categorías.
   * @param categoria Los datos de la categoría
   */
  crearMarca(categoria: Categoria) {
    const informacion = document.getElementById('informacion');
    const textoMarca = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const linea = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    linea.setAttribute('class', 'lineaMarca');
    textoMarca.setAttribute('class', 'textoMarca');
    textoMarca.setAttribute('x', '0');
    textoMarca.setAttribute('y', '0');
    textoMarca.setAttribute('text-anchor', 'middle');
    textoMarca.innerHTML = categoria[0];

    textoMarca.onmouseenter = () => {
      informacion.innerHTML = categoria[1];
      informacion.classList.add('visible');
    };

    textoMarca.onmouseleave = () => {
      informacion.classList.remove('visible');
    };

    textoMarca.onmousemove = (evento) => {
      const x = evento.clientX;
      const y = evento.clientY;
      Object.assign(informacion.style, {
        top: `${y}px`,
        left: `${x}px`,
      });
    };

    this.marcas.lineas.push(linea);
    this.marcas.textos.push(textoMarca);
    this.svg.appendChild(textoMarca);
    this.svg.appendChild(linea);
  }

  crearReferenciaEscala(i: number) {
    const poligono = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

    poligono.setAttribute('class', 'poliReferencia');
    poligono.setAttribute('fill', 'none');

    if (i > 0) {
      const marcaEscala = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      marcaEscala.setAttribute('class', 'marcaEscala');
      marcaEscala.setAttribute('text-anchor', 'middle');
      marcaEscala.innerHTML = `${i * (100 / this.numeroReferencias)}`;

      this.marcasReferencia.push(marcaEscala);
      this.svg.appendChild(marcaEscala);
    }

    this.poligonosReferencia.push(poligono);
    this.svg.appendChild(poligono);
  }

  async crearMapa(): Promise<void> {
    this.contenedor = document.createElement('div');
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    this.contenedor.appendChild(this.svg);
    this.contenedor.className = 'contenedorMapita';

    for (let i = 0; i <= this.numeroReferencias; i++) {
      this.crearReferenciaEscala(i);
    }

    this.categorias.forEach((categoria, i) => {
      this.crearMarca(categoria);
    });

    this.araña = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    this.araña.setAttribute('class', 'araña');

    this.svg.appendChild(this.araña);
    this.appendChild(this.contenedor);
  }

  escalarRadiales(): void {
    const pasoAngulo = this.pasoAngulo;
    this.centro = { x: +this.svg.getAttribute('width') / 2 - 12, y: +this.svg.getAttribute('height') / 2 - 12 };
    const ajusteAngulo = Math.PI / 2;

    // Este mueve toda la gráfica al centro del SVG.
    const ajusteGrafica = `transform:translate(${this.centro.x + 8}px,${this.centro.y + 12}px)`;
    const pasoRadio = {
      x: this.centro.x / this.numeroReferencias,
      y: this.centro.y / this.numeroReferencias,
    };

    this.araña.setAttribute('style', ajusteGrafica);

    for (let i = 0; i < this.categorias.length; i++) {
      const angulo = pasoAngulo * i - ajusteAngulo;
      const x1 = Math.cos(angulo) * this.centro.x;
      const y1 = Math.sin(angulo) * this.centro.y;
      const x2 = Math.cos(angulo) * this.centro.x;
      const y2 = Math.sin(angulo) * this.centro.y;
      const textoMarca = this.marcas.textos[i];
      const lineaMarca = this.marcas.lineas[i];

      textoMarca.setAttribute('x', `${x1}`);
      textoMarca.setAttribute('y', `${y1 - 5}`);
      textoMarca.setAttribute('style', ajusteGrafica);
      lineaMarca.setAttribute('x1', `0`);
      lineaMarca.setAttribute('y1', `0`);
      lineaMarca.setAttribute('x2', `${x2}`);
      lineaMarca.setAttribute('y2', `${y2}`);
      lineaMarca.setAttribute('style', ajusteGrafica);
    }

    for (let j = 0; j <= this.numeroReferencias; j++) {
      let puntos: string[] = [];
      const rX = pasoRadio.x * j;
      const rY = pasoRadio.y * j;

      this.categorias.forEach((_, n) => {
        const angulo = pasoAngulo * n - ajusteAngulo;
        const x = Math.cos(angulo) * rX;
        const y = Math.sin(angulo) * rY;
        puntos.push(`${x},${y}`);
      });

      if (j > 0) {
        const marca = this.marcasReferencia[j - 1];
        const x = Math.cos(-ajusteAngulo) * rX;
        const y = Math.sin(-ajusteAngulo) * rY;
        marca.setAttribute('x', `${x}`);
        marca.setAttribute('y', `${y + 5}`);
        marca.setAttribute('style', ajusteGrafica);
      }

      const poligono = this.poligonosReferencia[j];
      poligono.setAttribute('points', puntos.join(' '));
      poligono.setAttribute('style', ajusteGrafica);
    }
  }

  async pintarMapa(): Promise<void> {
    if (!this.categorias.length) return;
    const año = añoSeleccionado.get();
    const datosDepartamentos = (await datosIndicadorDep(año)) as DatosAño;
    const datos = datosDepartamentos.find((departamento) => departamento[0] === this.id);
    const pasoAngulo = this.pasoAngulo;
    const ajusteAngulo = Math.PI / 2;
    const radio = (valor: number) => {
      return {
        x: convertirEscala(valor, 0, 100, 0, this.centro.x),
        y: convertirEscala(valor, 0, 100, 0, this.centro.y),
      };
    };

    if (datos && datos.length) {
      const puntos: string[] = [];

      for (let i = 0; i < 8; i++) {
        const pos = i + 1;
        const llave = `c${pos}`;
        const existe = datos[1][llave];
        const valor = existe ? existe : 0;
        const angulo = pasoAngulo * (pos - 1) - ajusteAngulo;
        const radios = radio(valor);
        const x = Math.cos(angulo) * radios.x;
        const y = Math.sin(angulo) * radios.y;

        puntos.push(`${x},${y}`);
      }

      this.araña.setAttribute('points', puntos.join(' '));
      Object.assign(this.araña.style, {
        fill: color(datos[1]),
      });
    }
  }
}

customElements.define('enflujo-radiales', CategoriasRadiales);
