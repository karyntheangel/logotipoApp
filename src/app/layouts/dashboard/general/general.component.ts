import { Component, OnInit } from '@angular/core';

// DToS
import { Cliente, Estado, Genero, Pais } from '@dtos/clientes';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  orderListTablet = ['filtebar', 'tags', 'search', 'newbutton'];
  orderListMobile = ['search', 'filterbar', 'newbutton', 'tags'];
  templates: string[] = [
    'filterbarTemplate',
    'tagsTemplate',
    'searchTemplate',
    'newbuttonTemplate',
  ];
  selectedGender!:Genero;
  selectedCountry!:Pais;
  selectedState!:Estado;
  showFilters:boolean=false;
  clienteSeleccionado!: Cliente;
  mockClientes: Cliente[] = [
    {
      id: '1',
      nombre: 'Carlos Martinez',
      genero: 'Hombre',
      pais: 'Mexico',
      estado: 'México',
      avatarSRC: 'assets/layout/images/people/carlos-martinez.png',
    },
    {
      id: '2',
      nombre: 'Augusto Roberts',
      genero: 'Mujer',
      pais: 'Argentina',
      estado: 'Bariloche',
      avatarSRC: 'assets/layout/images/people/augusto-sg.jpg',
    },
    {
      id: '3',
      nombre: 'Camila Hernandez',
      genero: 'Mujer',
      pais: 'México',
      estado: 'Puebla',
      avatarSRC: 'assets/layout/images/people/camila-hernandez.jpg',
    },
  ];
  genders:Genero[]=[
    {id:'1', nombre:'Hombre'},
    {id:'2', nombre:'Mujer'}
  ];
  country:Pais[]=[
    {id:'1', nombre:'México'},
    {id:'2', nombre:'Argentina'},
    {id:'3', nombre:'Chile'}
  ];
  state:Estado[]=[
    {id:'1', nombre:'México'},
    {id:'2', nombre:'Puebla'},
    {id:'3', nombre:'florida'},
    {id:'3', nombre:'Bariloche'}
  ]

  ngOnInit(): void {}

  genderClass(gender: string): string {
    if (gender == 'Hombre') {
      return 'bg-green-100 text-green-400';
    } else {
      return 'bg-purple-100 text-purple-400';
    }
  }

  filterShow() {
    this.showFilters = !this.showFilters;
    console.log(this.showFilters);
  }

}
