import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArquiteturaAngularPage } from './arquitetura-angular.page';

describe('ArquiteturaAngularPage', () => {
  let component: ArquiteturaAngularPage;
  let fixture: ComponentFixture<ArquiteturaAngularPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquiteturaAngularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArquiteturaAngularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
