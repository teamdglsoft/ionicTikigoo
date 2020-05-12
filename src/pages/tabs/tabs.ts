import { Component } from '@angular/core';

import { HomePage, MenuPage, SucursalesPage, GaleriaPage, PedidoPage }  from "../index.paginas";
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = MenuPage;
  tab2 = SucursalesPage;
  tab3 = HomePage;
  tab4 = PedidoPage;
  tab5 = GaleriaPage;

}
