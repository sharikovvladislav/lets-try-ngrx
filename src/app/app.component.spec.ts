/* tslint:disable: max-line-length */
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import {
  BrowserTransferStateModule
} from '../modules/transfer-state/browser-transfer-state.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';
import { routes } from './app.routing';
import { StoreDevToolsModule } from './features/store-devtools.module';

import 'rxjs/add/operator/takeUntil';

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserTransferStateModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes),
        StoreDevToolsModule
        ],
      providers: [],
      declarations: [AppComponent, DashboardComponent, NotFound404Component]
    });
  });

  describe('should contain texts' ,  () => {
    let fixture;

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
    });
    it('should contain app text', async(() => {
      expect(fixture.nativeElement).toContainText('Angular Starter App');
    }));
    it('should contain My Component', async(() => {
      expect(fixture.nativeElement).toContainText('My Component');
    }));
  });

});
