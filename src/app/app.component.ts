import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  titulo: string = '';
  nombre: string = '';

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private tituloSitio: Title,
    private meta: Meta) {
      this.router.events.subscribe(
        (event: any) => {
          if (event instanceof ActivationEnd) {
            if (event.snapshot.firstChild === null) {
              const { snapshot } = event;
              const data: any = snapshot.data;
              this.titulo = `Logotipo | ${data.titulo}`;
              this.nombre = data.nombre;

              const metaTag = {
                name: this.nombre,
                content: this.titulo,
              };

              this.tituloSitio.setTitle(this.titulo);
              this.meta.updateTag(metaTag);
            }
          }
        }
      );
    }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}