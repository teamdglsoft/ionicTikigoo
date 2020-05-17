import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';

import { PedidoProvider, ProductosProvider, SucursalesProvider, UsuarioProvider, GaleriaProvider,
  RegisterUserProvider, SeccionesProvider}  from "../providers/index.services";
//paginas
import { EventosPage, OrdenesPage, OrdenesDetallePage, PedidoPage, SucursalDetallePage,
  SucursalesPage, MenuPage, TabsPage, HomePage, GaleriaPage, UserRegisterPage, SucursalModPedidoPage, OrdenarPage}  from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrdenesPage,
    OrdenesDetallePage,
    PedidoPage,
    SucursalDetallePage,
    SucursalesPage,
    MenuPage,
    TabsPage,
    GaleriaPage,
    UserRegisterPage,
    SucursalModPedidoPage,
    EventosPage,
    OrdenarPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrdenesPage,
    OrdenesDetallePage,
    PedidoPage,
    SucursalDetallePage,
    SucursalesPage,
    MenuPage,
    TabsPage,
    GaleriaPage,
    UserRegisterPage,
    SucursalModPedidoPage,
    EventosPage,
    OrdenarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PedidoProvider,
    ProductosProvider,
    UsuarioProvider,
    SucursalesProvider,
    SeccionesProvider,
    GaleriaProvider,
    RegisterUserProvider
  ]
})
export class AppModule {}
