import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { CryptoSymbolsComponent } from './crypto-symbols/crypto-symbols.component';
import { StockSymbolsComponent } from './stock-symbols/stock-symbols.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared-ui/shared-ui.module';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [CryptoSymbolsComponent, StockSymbolsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    DataTablesModule,
    ModalModule.forRoot(),
  ]
})
export class SettingsModule { }
