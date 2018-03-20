import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenomComponent } from './prenom.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PrenomComponent', () => {
  let component: PrenomComponent;
  let fixture: ComponentFixture<PrenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], //ajouté
      declarations: [ PrenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

   it('Zone PRÉNOM invalide avec 2 caractères', () => {
     let zone = component.prenomForm.controls['lePrenom'];
     zone.setValue('a'.repeat(2));
    expect(zone.valid).toBeFalsy();
   });


   it('Zone PRÉNOM valide avec 3 caractères', () => {
    let zone = component.prenomForm.controls['lePrenom'];
    zone.setValue('a'.repeat(3));
   expect(zone.valid).toBeTruthy();
  });
});
