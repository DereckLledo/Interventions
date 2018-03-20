import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AngularFontAwesomeModule], //ajouté
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
     expect(component).toBeTruthy();
    });

   it ('Zone PRÉNOM invalide avec 2 caractères', () => {
    let zone = component.problemeForm.controls['lePrenom'];
    zone.setValue('a'.repeat(2));
    expect(zone.valid).toBeFalsy();
   });

   it ('Zone PRÉNOM valide avec 3 caractères', () => {
     let errors = {};
     let zone = component.problemeForm.get('lePrenom');
     zone.setValue('a'.repeat(3));
     errors = zone.errors || {};
     expect(errors['minlength']).toBeFalsy();
   })

   it ('Zone PRÉNOM valide avec 200 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['lePrenom'];
    zone.setValue('a'.repeat(200));
    errors = zone.errors || {};
    expect(errors['minlength']).toBeFalsy();

   })
  
});
