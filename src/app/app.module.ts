import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';

import { PedidoProvider, ProductosProvider, SucursalesProvider, GaleriaProvider, DeviceProvider,
  RegisterUserProvider, SeccionesProvider}  from "../providers/index.services";
//paginas
import {
  AdomicilioPage,
  PedidoPage,
  SucursalDetallePage,
  ProductoPage,
  SucursalesPage,
  MenuPage,
  TabsPage,
  HomePage,
  GaleriaPage,
  UserRegisterPage,
  OrdenarPage,
  MenuSucursalesPage,
  EventosPage
}  from "../pages/index.paginas";


@NgModule({
  declarations: [
    PedidoPage,
    MyApp,
    SucursalDetallePage,
    SucursalesPage,
    HomePage,
    MenuPage,
    TabsPage,
    GaleriaPage,
    UserRegisterPage,
    OrdenarPage,
    MenuSucursalesPage,
    EventosPage,
    ProductoPage,
    AdomicilioPage
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
    PedidoPage,
    SucursalDetallePage,
    SucursalesPage,
    MenuPage,
    TabsPage,
    GaleriaPage,
    UserRegisterPage,
    OrdenarPage,
    MenuSucursalesPage,
    ProductoPage,
    AdomicilioPage,
    EventosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PedidoProvider,
    ProductosProvider,
    SucursalesProvider,
    SeccionesProvider,
    GaleriaProvider,
    RegisterUserProvider,
    DeviceProvider
  ]
})
export class AppModule {}
