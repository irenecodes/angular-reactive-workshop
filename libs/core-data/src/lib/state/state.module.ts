import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

import { reducers } from '.';
import { CustomersEffects } from './customers/customers.effects';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    // STEP 3 
    StoreModule.forRoot(reducers), //take the combined reducers and make them available 
    StoreDevtoolsModule.instrument({ maxAge: 10 }), // hooks to redux dev tools
    EffectsModule.forRoot([ //if create effects, add them here 
      CustomersEffects
    ]),
  ],
  declarations: []
})
export class StateModule { }
