import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoSymbolsComponent } from './crypto-symbols/crypto-symbols.component';
import { StockSymbolsComponent } from './stock-symbols/stock-symbols.component';

const routes: Routes = [
  { path: 'crypto_symbols', component: CryptoSymbolsComponent, pathMatch: 'full' },
  { path: 'stock_symbols', component: StockSymbolsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
