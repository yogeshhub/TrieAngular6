import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private routes: Router) {}

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    
  }
}
