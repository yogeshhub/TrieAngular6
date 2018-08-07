import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from "@angular/material";
import {MatBottomSheet, MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { Trie } from '../trie/Trie';

@Component({
  selector: 'app-trie-search',
  templateUrl: './trie-search.component.html',
  styleUrls: ['./trie-search.component.css']
})
export class TrieSearchComponent implements OnInit {
  trieSearchControl = new FormControl();
  trieInsertControl = new FormControl();
  trie: Trie;

  availableHeroes = [    
    {name: 'Wolverine', color: 'primary'},
    {name: 'Thing', color: 'accent'},
    {name: 'Kitty Pryde', color: ''},
    {name: 'Magneto', color: 'primary'},
    {name: 'Nightcrawler', color: 'accent'},
    {name: 'Juggernaut', color: ''},
    {name: 'Beast', color: 'primary'},
    {name: 'Captain America', color: 'accent'},
    {name: 'Spider Man', color: ''},
    {name: 'Puck', color: 'primary'},
    {name: 'Alex Wilder', color: 'accent'},
    {name: 'Doctor Strange', color: ''},
    {name: 'Nick Fury', color: 'primary'},
    {name: 'Nico Minoru', color: 'accent'},
    {name: 'Shaman', color: ''},
    {name: 'Hawkeye', color: 'primary'},
    {name: 'Iceman', color: 'accent'},
    {name: 'Hulk', color: 'warn'}
  ];

  constructor(private location: Location, private snackBar: MatSnackBar, private bottomSheet: MatBottomSheet) { 
    this.trie = new Trie();
  }

  ngOnInit() {
    this.availableHeroes.map((option) => {            
      this.trie.insert(option.name); 
    });    
  }

  goBack() {    
    this.location.back();
  }

  searchTrie() {    
    if(this.trieSearchControl.value !== null) {
      let word = this.trieSearchControl.value.replace(" ", "").trim().toLowerCase();
      if(word) {
        let ret = this.trie.search(word);   
        if(ret) {
          this.bottomSheet.open(BottomSheetComponent, {
            data: {name: word, isHere: true}
          })
        } else {
          this.bottomSheet.open(BottomSheetComponent, {
            data: {name: word, isHere: false}
          })
        }  
      } else {
        alert("Please enter the search word");
      }
    } else {
      alert("Please enter the search word");
    }
    
  }

  insertTrie() {        
    if(this.trieInsertControl.value !== null) {
      let word = this.trieInsertControl.value.replace(" ", "").trim().toLowerCase();
      if(word) {
        this.trie.insert(word);    
        this.availableHeroes.push({ name: word, color: ''});
        this.snackBar.open(word + " added in Trie Data structure", "Trie Heroes", { duration: 1000});
      } else {
        alert("Please enter the insert word");
      }
    } else {
      alert("Please enter the insert word");
    }
  }
}

@Component({
  selector: "bottom-sheet",
  template: `<h3 style="text-align: center" *ngIf="data.isHere">Your searched hero <mat-chip>{{data.name}}</mat-chip> is available in Trie</h3>
             <h3 style="text-align: center" *ngIf="!data.isHere">Your searched hero <button mat-raised-button color="primary">{{data.name}}</button> is not available in Trie</h3>`
})

export class BottomSheetComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
}
