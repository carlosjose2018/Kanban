import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContainerComponent } from './pages/container/container.component'

//Components
import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: ContainerComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
