import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
      description: 'Leão'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
      description: 'leoa'
    },
    {
      url: 'https://img.ibxk.com.br/2020/01/30/30021141299110.jpg',
      description: 'sei la'
    },
    {
      url: 'https://pplware.sapo.pt/wp-content/uploads/2020/04/windows_10_imagem_1.jpg',
      description: 'windows'
    }

  ];
}
