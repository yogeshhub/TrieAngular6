import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule,         
         MatCardModule,
         MatGridListModule,
         MatListModule,
         MatChipsModule,
         MatAutocompleteModule,
         MatFormFieldModule,
         MatInputModule,
         MatSnackBarModule,
         MatBottomSheetModule,
         MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TrieSearchComponent, BottomSheetComponent } from './trie-search/trie-search.component';
import { AppRouteModule } from './app-route.module';
import { TrieBoardComponent } from './trie-board/trie-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TrieSearchComponent,
    TrieBoardComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouteModule,
    FormsModule, 
    ReactiveFormsModule,
    MatToolbarModule,    
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatButtonModule
  ],
  entryComponents: [ BottomSheetComponent ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
