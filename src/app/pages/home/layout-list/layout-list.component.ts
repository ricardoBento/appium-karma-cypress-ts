import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-list',
  templateUrl: './layout-list.component.html',
  styleUrls: ['./layout-list.component.scss'],
})
export class LayoutListComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}
  newsFeed() {
    this.router.navigateByUrl("news");
  }
}
