import { Component } from '@angular/core';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router,
        ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'last-shelter-ui';
  redirectMap = new Map();
  outletMap = new Map();
  constructor( private loadingBar: SlimLoadingBarService, private router: Router, private route: ActivatedRoute ) {
  	this.initializeRedirectMap();
  	router.events
            .pipe(
            	filter(
                    ( event: NavigationEvent ) => {
                         return( event instanceof NavigationStart );
                     }
                )
            ).subscribe(
                ( event: NavigationStart ) => {
                    console.log("######### navigation id: ", event.id );
                    console.log("######### route: ", event.url );
                    console.log("######### trigger: ", event.navigationTrigger );
                    console.log("######### outlet: ", route.outlet );
                    console.log("######### Checking and redirecting ...");
                    if(this.redirectMap.has(event.url))
                    {
                    	console.log("############ Redirect Found.");
                    	console.log("############ Redirect URL:" + this.redirectMap.get(event.url));
                    	console.log("############ Redirect Outlet:" + this.outletMap.get(event.url));
                    	route.outlet = this.outletMap.get(event.url);
                    	route.url = this.redirectMap.get(event.url);
                    }
                    else
                    {
						console.log("############ Redirect Not Found.");
                    }
                    console.log( "######### End redirecting ...");
                    console.groupEnd();
                }
            );

            this.router.events.subscribe((event: Event) => {
              this.navigationInterceptor(event);
            });
    }

    private initializeRedirectMap()
    {
    	this.redirectMap.set('/(sub-menu:glb/hero/manage)','glb/hero/manage');
    	this.outletMap.set('/(sub-menu:glb/hero/manage)', 'content');
    }

    private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
}
