import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../services/screen-size.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  isMobile: boolean = false;
  private subscription!: Subscription;

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit() {
    this.subscription = this.screenSizeService.getIsMobileObservable()
      .subscribe(isMobile => this.isMobile = isMobile);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
