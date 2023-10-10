import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostsEffects } from './post.effects';
import { postsReducer } from './post.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('post', postsReducer),
        EffectsModule.forFeature([PostsEffects])
    ]
})
export class PostStoreModule {}