import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcvComponent } from './components/listcv/listcv.component';
import { DetailcvComponent } from './components/detailcv/detailcv.component';
import { DeletecvComponent } from './components/deletecv/deletecv.component';
import { FormmcvComponent } from './components/formmcv/formmcv.component';
import { AddcvComponent } from './components/addcv/addcv.component';
import { EditcvComponent } from './components/editcv/editcv.component';
import { EditformComponent } from './components/editform/editform.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListcvComponent },
  { path: 'add', component: AddcvComponent },
  { path: 'cv/:id', component: DetailcvComponent },
  { path: 'form', component: FormmcvComponent },
  { path: 'delete/:id', component: DeletecvComponent },
  { path: 'edit/:id', component: EditcvComponent },
  { path: 'editer/:id', component: EditformComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
