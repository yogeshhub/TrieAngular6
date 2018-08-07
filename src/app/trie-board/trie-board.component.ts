import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-trie-board',
  templateUrl: './trie-board.component.html',
  styleUrls: ['./trie-board.component.css']
})
export class TrieBoardComponent implements OnInit {

  tiles = [
    {id: 1, cols: 3, rows: 1},
    {id: 2, cols: 1, rows: 2},
    {id: 3, cols: 1, rows: 1},
    {id: 4, cols: 2, rows: 1},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSearch() {
    this.router.navigate(['trieSearch']); 
  }

}
