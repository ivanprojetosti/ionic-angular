import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonInfiniteScrollPage } from './ion-infinite-scroll.page';

describe('IonInfiniteScrollPage', () => {
  let component: IonInfiniteScrollPage;
  let fixture: ComponentFixture<IonInfiniteScrollPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonInfiniteScrollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonInfiniteScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
