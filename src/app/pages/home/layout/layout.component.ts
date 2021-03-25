import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }
  ngOnInit() {}
  ourProducts() {
    this.router.navigateByUrl("our-products");
  }
  ourBrand() {
    this.router.navigateByUrl("our-brand");
  }
  newsFeed() {
    this.router.navigateByUrl("news");
  }
  ourGame() {
    this.router.navigateByUrl("game");
  }
}
