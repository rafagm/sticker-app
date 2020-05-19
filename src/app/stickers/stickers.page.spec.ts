import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StickersPage } from './stickers.page';

describe('StickersPage', () => {
  let component: StickersPage;
  let fixture: ComponentFixture<StickersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StickersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
