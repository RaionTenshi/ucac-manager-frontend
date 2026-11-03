import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CctlStudent } from './cctl-student';

describe('CctlStudent', () => {
  let component: CctlStudent;
  let fixture: ComponentFixture<CctlStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CctlStudent],
    }).compileComponents();

    fixture = TestBed.createComponent(CctlStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
