import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'PwdCrusher-front';

  ngOnInit(): void {
      console.log("Hello from OnInit");
  }

  ngOnDestroy(): void {
      console.log("Hello from OnDestroy");
  }
}
