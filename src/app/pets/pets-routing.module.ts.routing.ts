import { DeletePetComponent } from './delete-pet/delete-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePetComponent } from './create-pet/create-pet.component';
import { PetsComponent } from './pet/pets.component';


const routes: Routes = [
  { path:'Pets',  component:PetsComponent},
  { path:'CreatePet',component:CreatePetComponent},
  { path:'UpdatePet/:id',component:UpdatePetComponent},
  { path:'DeletePet/:id',component:DeletePetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
