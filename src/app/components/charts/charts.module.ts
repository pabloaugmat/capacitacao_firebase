import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { DadosService } from './dados.service';

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule],
  exports: [ChartsComponent],
  providers: [DadosService],
})
export class DashboardModule {}
