import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string;

  @Output() toggleSidenavEvent = new EventEmitter<string>();

  toggleSidenav() {
    this.toggleSidenavEvent.emit('toggle');
  }

  constructor() { }

  ngOnInit() {
  }

}
