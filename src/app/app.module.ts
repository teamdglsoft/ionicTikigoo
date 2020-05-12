import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
//import { PedidoProvider } from '../providers/pedido/pedido';
//import { ProductosProvider } from '../providers/productos/productos';
//import { UsuarioProvider } from '../providers/usuario/usuario';
//import { SucursalesProvider } from '../providers/sucursales/sucursales';

import { PedidoProvider, ProductosProvider, SucursalesProvider, UsuarioProvider, GaleriaProvider, RegisterUserProvider, SeccionesProvider}  from "../providers/index.services";
//paginas
import { LoginPage, OrdenesPage, OrdenesDetallePage, PedidoPage, SucursalDetallePage, SucursalesPage, MenuPage, TabsPage, HomePage, GaleriaPage, UserRegisterPage, SucursalModPedidoPage}  from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PedidoPage,
    SucursalDetallePage,
    SucursalesPage,
    MenuPage,
    TabsPage,
    GaleriaPage,
    UserRegisterPage,
    SucursalModPedidoPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PedidoPage,
    SucursalDetallePage,
    SucursalesPage,
    MenuPage,
    TabsPage,
    GaleriaPage,
    UserRegisterPage,
    SucursalModPedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
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
