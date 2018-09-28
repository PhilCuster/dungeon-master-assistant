import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  opened = false;
  title: string;
  title$: Observable<string>;

  toggle() {
    this.opened = !this.opened;
  }

  private setTitle(title: string) {
    this.title = title;
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // All this just to get the title...
    this.title$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(_ => this.route),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap((route) => route.data),
      map((data) => data.title)
    );

    this.title$.subscribe(title => this.setTitle(title));
  }

}
