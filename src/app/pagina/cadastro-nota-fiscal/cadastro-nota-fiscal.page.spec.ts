import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroNotaFiscalPage } from './cadastro-nota-fiscal.page';

describe('CadastroNotaFiscalPage', () => {
  let component: CadastroNotaFiscalPage;
  let fixture: ComponentFixture<CadastroNotaFiscalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNotaFiscalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroNotaFiscalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
