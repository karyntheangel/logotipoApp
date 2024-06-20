import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerListGroup1=[
    'Overview',
    'Features',
    'Pircing'
  ]
  footerListGroup2=[
    'Careers',
    'Help',
    'Privacy'
  ]
  footerBrandList=[
    {link:'https://www.x.com',label:'pi-twitter', rel:'Oficial X site'},
    {link:'https://www.linkedin.com',label:'pi-linkedin', rel:'Oficial Linkedin site'},
    {link:'https://www.facebook.com',label:'pi-facebook', rel:'Oficial Facebook site'},
    {link:'https://www.github.com',label:'pi-github', rel:'Oficial Github site'},
    {link:'https://www.hireline.io',label:'pi-thumbs-up-fill', rel:'Oficial hireline site'},
    {link:'https://www.google.com',label:'pi-globe', rel:'Oficial Google site'}

  ]

}
