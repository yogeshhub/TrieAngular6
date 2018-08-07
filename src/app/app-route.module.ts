import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrieSearchComponent } from './trie-search/trie-search.component';
import { TrieBoardComponent } from './trie-board/trie-board.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/trieBoard',
    pathMatch: 'full'
  },
  {
    path: 'trieSearch',
    component: TrieSearchComponent
  },
  {
    path: 'trieBoard',
    component: TrieBoardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRouteModule { }
