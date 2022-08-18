
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompartilhadoModule } from '../compartilhado/compartilhado/compartilhado.module';
import { MaterialCssModule } from '../compartilhado/material-css/material-css.module';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { PetsComponent } from './pet/pets.component';
import { PetsRoutingModule } from './pets-routing.module.ts.routing';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { DeletePetComponent } from './delete-pet/delete-pet.component';


@NgModule({
  declarations: [
    PetsComponent,
    CreatePetComponent,
    UpdatePetComponent,
    DeletePetComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MaterialCssModule,
    CompartilhadoModule,
    FormsModule
  ],
  exports:[
    PetsComponent,
    CreatePetComponent,
    UpdatePetComponent,
    DeletePetComponent
  ]
})

export class PetsModule { }
