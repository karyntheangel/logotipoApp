import { Component, OnInit,} from '@angular/core';
import { MessageService } from 'primeng/api';

// DTOs
import { Cliente, Estado, Genero, Pais } from '@dtos/clientes';

// Services
import { CustomersService } from '@services/customers.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  template: `
    <app-child-component
      (closeDialog)=" closeDialogF()", (reloadCustomers)="reloadCustomers()"
    ></app-child-component>
  `,
  providers: [MessageService],
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
  selectedClientDelete!:Cliente
  deleteClientForm:boolean=false;
  showFilters:boolean=false;
  clienteSeleccionado!: Cliente | undefined;
  clientForm:boolean=false;
  loadedCountry:boolean=true;
  statesLoaded = false;

  mockClientes: Cliente[] = [
    {
      id: '1',
      nombre: 'Carlos Martinez',
      genero: 'Hombre',
      pais: 'Mexico',
      estado: 'México',
      avatarSRC: 'assets/layout/images/people/carlos-martinez.png',
    },
  ];
  users: Cliente[] = []
  genders:Genero[]=[
    {id:'1', nombre:'Hombre'},
    {id:'2', nombre:'Mujer'}
  ];
  country:Pais[]=[
  ];
  state:Estado[]=[]
  
  constructor(
    private readonly _customerService:CustomersService,
    private messageService:MessageService
  ){}

  async ngOnInit(): Promise<void> {
    await this.getAllUsers()
    this.getAllCountries()
  }

  onCountryChange(event:{ value: { id: string; nombre: string } }): void {
    this.loadedCountry=false
      this.getAllStates();
  }

  genderClass(gender: string): string {
    if (gender == 'Hombre' || gender == 'Masculino') {
      return 'bg-green-100 text-green-400';
    } else {
      return 'bg-purple-100 text-purple-400';
    }
  }

  filterShow() {
    this.showFilters = !this.showFilters;
  }

  openNewCustomer(){
    this.clienteSeleccionado=undefined;
    this.clientForm=true;
  }

  openDeleteCustomer(select:Cliente){
    this.selectedClientDelete = select;
    this.deleteClientForm=true;
  }

  deleteUser(user:Cliente){
    this._customerService.deleteUSer(user.id).subscribe({
      next: (response:any)=>{
        this.messageService.add({ key: 'requestInfo', severity: 'info', summary: 'Usuario Elininado'});
        setTimeout(() => {
          this.closeDeleteDialog()
        this.reloadCustomers()
          this.messageService.clear();
        }, 4000);
      },
      error:(err) => {
        this.messageService.add({ key: 'requestInfo', severity: 'error', summary: 'Error al realizar la solicitud', detail: err });
      },
    })
  }

  async getAllUsers(){
    this._customerService.getUsers().subscribe({
      next: (response:any)=>{
        this.users=response
      },
      error:(err) => {
        this.messageService.add({ key: 'requestInfo', severity: 'error', summary: 'Error al realizar la solicitud', detail: err });
      },
      complete:()=> {
        this.mockClientes=this.users
      },
      })
  }

  getAllCountries(){
   this._customerService.getCountries().subscribe({
    next: (response:any)=>{
      this.country=response
    },
    error:(err) => {
      this.messageService.add({ key: 'requestInfo', severity: 'error', summary: 'Error al realizar la solicitud', detail: err });
    },
    })
  }

  getAllStates(){
    this._customerService.getStates(this.selectedCountry.id).subscribe({
     next: (response:any)=>{
       this.state=response
     },
     error:(err) => {
      this.messageService.add({ key: 'requestInfo', severity: 'error', summary: 'Error al realizar la solicitud', detail: err });
     },
     })
     this.statesLoaded = true;
   }

   closeDialogF(){
    this.clientForm=false;
   }

   closeDeleteDialog(){
    this.deleteClientForm=false;
   }

   openEditCustomer(select:Cliente){
    this.clienteSeleccionado=select;
    this.clientForm=true
   }

   reloadCustomers(){
    this.getAllUsers()
   }

   filterGender(event:{ value: { id: string; nombre: string } }){
    let newUsersArray:Cliente[]=[]
    this.mockClientes.forEach(user => {
      if (event.value.nombre === user.genero) {
        newUsersArray.push(user)
      }
      this.mockClientes=newUsersArray
    });
   }

   filterCountry(event:{ value: { id: string; nombre: string } }){
    let newUsersArray:Cliente[]=[]
    this.mockClientes.forEach(user => {
      if (event.value.nombre === user.pais) {
        newUsersArray.push(user)
      }
      this.mockClientes=newUsersArray
    });
   }

   filterState(event:{ value: { id: string; nombre: string } }){
    let newUsersArray:Cliente[]=[]
    this.mockClientes.forEach(user => {
      if (event.value.nombre === user.estado) {
        newUsersArray.push(user)
      }
      this.mockClientes=newUsersArray
    });
   }

   generalFilter(event:Event){
    let filteredUsers: Cliente[] = [];
    const query = (event.target as HTMLInputElement)?.value ?? '';
      if(query===''){
        filteredUsers=this.users
      }else{
        filteredUsers = this.mockClientes.filter(user => 
          user.nombre.toLowerCase().includes(query.toLowerCase()));
      }
      this.mockClientes=filteredUsers;
   }


}
