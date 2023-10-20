import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostsEffects } from './post.effects';
import { postListReducer   } from './post.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('post', postListReducer ),
        EffectsModule.forFeature([PostsEffects])
    ]
})
export class PostStoreModule {}