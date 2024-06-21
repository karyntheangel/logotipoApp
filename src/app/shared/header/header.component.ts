import { Component, Input, OnInit } from '@angular/core';

// PrimeNG API elements
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() home: boolean=true;

  menuItems!: MenuItem[] | undefined;
  
  menuItemsHome: MenuItem[]=[
  { label: 'Home'},
  { 
    label:'Products', 
    items: [
      {label: 'lorem ipsum'},
      {label: 'lorem ipsum'}
    ]
  },
  { 
    label:'Resources', 
    items: [
      {label: 'lorem ipsum'},
      {label: 'lorem ipsum'}
    ]
  },
  { label: 'Pircing'},
  { label:'Log in', styleClass:'block md:hidden'},
  { label:'Sign up', styleClass:'block md:hidden bg-primary specialLink'}
  ];

  menuItemsDashboard=[
    { label: 'Home'},
    { label: 'Dashboard'},
    { label: 'Projects'},
    { label: 'Tasks'},
    { label: 'Reporting'},
    { label: 'Users'},
    {styleClass:'md:hidden h-15rem pointer-events-none'},
    { label:'Support', icon:'pi pi-cog text-2xl', styleClass:'block md:hidden'},
    { label:'Setings', icon:'pi pi-globe text-2xl', styleClass:'block md:hidden'},
    { label:`Ali Chumasco  ali@chumacero.com`, icon:'lgt-custom-icon', styleClass:'block text-color-secondary md:hidden mt-2',id:'profilleSetings'},
    {icon:'pi pi-sign-out text-2xl', styleClass:'pr-3 md:hidden', id:'profilleLogout'}
    ]

  ngOnInit() {
    this.home? this.menuItems = this.menuItemsHome : this.menuItems= this.menuItemsDashboard;
  }



}
