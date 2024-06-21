import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

// DTOs
import { Cliente, Estado, Genero, Pais, PeticionCliente } from '@dtos/clientes';

// Services
import { CustomersService } from '@services/customers.service';

// Constants
import { FORMATONOMBREPERSONA } from '@utils/constants';

@Component({
  selector: 'app-clientForm',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  providers: [MessageService]
})
export class ClientFormComponent implements OnInit {
  @Input() customerToEdit!:Cliente | undefined;

  @Output() closeDialog = new EventEmitter<any>();
  @Output() reloadCustomers = new EventEmitter<any>();

  formCustomer!: FormGroup;
  loadedCountry:boolean=true;
  statesLoaded = false;
  genders:Genero[]=[
    {id:'1', nombre:'Hombre'},
    {id:'2', nombre:'Mujer'}
  ];
  country:Pais[]=[
  ];
  state:Estado[]=[]

  constructor(
    private constructorForm: FormBuilder,
    private readonly _customerService: CustomersService,
    private  messageService: MessageService
  ) {}

  ngOnInit() {
    this.initialiceForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customerToEdit']) {
      this.initialiceForm()
    }
  }

  onCountryChange(event:{ value: { id: string; nombre: string } }): void {
    this.loadedCountry=false
      this.getAllStates(event.value.id);
  }

  reloadUsers(){
    this.reloadCustomers.emit();
  }

  closeForm() {
    this.closeDialog.emit();
  }

  initialiceForm() {
    this.formCustomer = this.constructorForm.group({
      customerName: [
        '',
        [Validators.required, Validators.pattern(FORMATONOMBREPERSONA)],
      ],
      customerCountry: [
        [Validators.required, Validators.pattern(FORMATONOMBREPERSONA)],
      ],
      customerState: [
        [Validators.required, Validators.pattern(FORMATONOMBREPERSONA)],
      ],
      customerGender: [
        [Validators.required, Validators.pattern(FORMATONOMBREPERSONA)],
      ],
    });
    this.getAllCountries();
    this.searchEdition()
  }

  async searchEdition( ){
    if (this.customerToEdit) {
      this.formCustomer.get('customerName')?.setValue(this.customerToEdit.nombre);
      this.formCustomer.get('customerGender')?.setValue(this.genders.find((genero)=>{return this.customerToEdit?.genero === genero.nombre }))
      this.formCustomer.get('customerCountry')?.setValue(this.country.find((pais)=>{return this.customerToEdit?.pais === pais.nombre }));
       this.getAllStates(this.formCustomer.get('customerCountry')?.value.id)
    }
    else{
      
    }
  }

   async getAllCountries(){
    this._customerService.getCountries().subscribe({
     next: (response:any)=>{
       this.country=response
     },
     error:(err) => {
      this.messageService.add({ key: 'requestFormInfo', severity: 'error', summary: 'Error al realizar la solicitud', detail: err });
     },
     })
   }
 
   async getAllStates(id:string){
     this._customerService.getStates(id).subscribe({
      next: (response:any)=>{
        this.state=response
      },
      error:(err) => {
        this.messageService.add({ key: 'requestFormInfo', severity: 'error', summary: 'Error al realizar la solicitud', detail: err });
      },
      complete:()=> {
        if (this.customerToEdit) {
          this.formCustomer.get('customerState')?.setValue(this.state.find((estado)=>{return this.customerToEdit?.estado === estado.nombre }));
        }
      },
      })
    }

    confirmForm(){
      if (this.customerToEdit){
        this.editUser()
      }
      else{this.saveNewUser()}
    }

    saveNewUser(){
      const {customerName, customerCountry, customerState, customerGender} = this.formCustomer.value;
      const userFormat:PeticionCliente={
        nombre: customerName,
        genero: customerGender.nombre,
        pais: customerCountry.nombre,
        estado: customerState.nombre,
        avatarSRC: 'assets/layout/images/people/olivya-riyhe.png'
      }
      this._customerService.newUser(userFormat).subscribe({
        next: (response:any)=>{
          this.messageService.add({ key: 'requestFormInfo', severity: 'info', summary: 'Usuario creado' });
          setTimeout(() => {
            this.reloadUsers()
            this.closeForm()
            this.messageService.clear();
          }, 4000);
        },
        error:(err) => {
          this.messageService.add({ key: 'requestFormInfo', severity: 'error', summary: 'Error al realizar la solicitud', detail: err });
        },
      })
    }

  editUser(){
    const { customerName, customerCountry, customerState, customerGender } =
      this.formCustomer.value;
    let idEdit=''
    const userFormat: PeticionCliente = {
      nombre: customerName,
      genero: customerGender.nombre,
      pais: customerCountry.nombre,
      estado: customerState.nombre,
      avatarSRC: this.customerToEdit?.avatarSRC || 'assets/layout/images/people/olivya-riyhe.png',
    };
    this.customerToEdit? idEdit=this.customerToEdit.id : idEdit='';
    this._customerService.editUser(userFormat,idEdit).subscribe({
      next: (response: any) => {
        this.messageService.add({ key: 'requestFormInfo', severity: 'info', summary: 'Usuario editado'});
        setTimeout(() => {
          this.reloadUsers()
          this.closeForm()
          this.messageService.clear();
        }, 4000);
        
      },
      error: (err) => {
        this.messageService.add({ key: 'requestFormInfo', severity: 'error', summary: 'Error al realizar la solicitud', detail: err });
      },
    });

  }
}
