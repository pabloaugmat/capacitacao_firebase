import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
    //canActivate: [AuthGuard]
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefasComponent,
    canActivate: [AuthGuard]
  }
];
