import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategorieService } from './categorie.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AngularFontAwesomeModule, HttpClientModule], //ajouté
      declarations: [ ProblemeComponent ],
      providers:[CategorieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


   it ('Zone PRÉNOM invalide avec 2 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['lePrenom'];
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['sansEspaces']).toBe(false);
   });


   it ('Zone PRÉNOM valide avec 3 caractères', () => {
     let errors = {};
     let zone = component.problemeForm.get('lePrenom');
     zone.setValue('a'.repeat(3));
     errors = zone.errors || {};
     expect(errors['sansEspaces']).toBe(true);
   })

   it ('Zone PRÉNOM valide avec 200 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['lePrenom'];
    zone.setValue('a'.repeat(200));
    errors = zone.errors || {};
    expect(errors['sansEspaces']).toBe(true);

   })

   it ('Zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let zone = component.problemeForm.controls['lePrenom'];
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['required']).toBeTruthy();

   })

   it ('Zone PRÉNOM invalide avec 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.controls['lePrenom'];
    zone.setValue('a');
    errors = zone.errors || {};
    expect(errors['sansEspaces']).toBeFalsy();
  })

  it ('Zone PRÉNOM invalide avec 50 espaces', () => {
    let errors = {};
    let zone = component.problemeForm.controls['lePrenom'];
    zone.setValue(' '.repeat(50));
    errors = zone.errors || {};
    expect(errors['sansEspaces']).toBe(false);
  })

  it ('Zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.controls['lePrenom'];
    zone.setValue('  a');
    errors = zone.errors || {};
    expect(errors['sansEspaces']).toBe(false);
  })


  
  it ('Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
    component.appliquerNotifications('pasNotification');

    let zone = component.problemeForm.get('notificationsGroup.telephone');
    expect(zone.status).toEqual('DISABLED');
  })
  
/*
  it ('Zone TELEPHONE est vide quand ne pas me notifier', () => {
    component.appliquerNotifications('pasNotification');

    let zone = component.problemeForm.get('notificationsGroup.telephone');
    expect(zone.status).toEqual('DISABLED');
  })

  it ('Zone ADRESSE COURRIEL est désactivée quand ne pas me notifier', () => {

  })

  it ('Zone ADRESSE COURRIEL est vide quand ne pas me notifier',() => {

  })

  it ('Zone CONFIRMER COURRIEL est désactivée quand ne pas me notifier',() => {

  })

  it ('Zone CONFIRMER COURRIEL est vide quand ne pas me notifier',() => {

  })
  */
});
