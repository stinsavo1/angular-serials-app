import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { reducers } from '.';
import { SerialsEffects } from './effects/serials.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ SerialsEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  exports: [StoreModule]
})
export class StorageModule { }
