import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavigationComponent, CardComponent]
})
export class AppComponent {
  title = 'angular1';

  @Input() data = [
    {
      picture: "https://s13emagst.akamaized.net/products/32056/32055937/images/res_f962db1683d5765255af10cc5bf4225d.jpg?width=450&height=450&hash=F339346494839F11BA1B8206A22A4A15",
      title: "Vin Rosu de Tohani",
      price: "37,99"
    },
    {
      picture: "https://s13emagst.akamaized.net/products/29837/29836494/images/res_6c091e1ca96623277d503b92f23441f3.jpg?width=450&height=450&hash=F30FA0FE46475A032B756D9E14FBCE21",
      title: "Coniac Martell",
      price: "148,98"
    },
    {
      picture: "https://s13emagst.akamaized.net/products/18934/18933646/images/res_ba0c1abd664ae2b7c1f46aa444756985.jpg?width=450&height=450&hash=868900BD009E44E16E7300379FEE6DEF",
      title: "Vin Cabernet Sauvignon",
      price: "221,01"
    }]

}
