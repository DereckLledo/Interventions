import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { sansEspaceValidator } from '../shared/caracteres-validator';
import { CategorieService } from './categorie.service';
import { ICategorie } from './categorie';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  
  problemeForm: FormGroup;
  categoriesProblemes: ICategorie[];
  errorMessage: string;
  
 
  constructor(private fb: FormBuilder, private categories: CategorieService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
     lePrenom: ['',[sansEspaceValidator.longueurMinimum(3), Validators.required]],
     noTypeProbleme: ['',[Validators.required]],
     leNom:['',[sansEspaceValidator.longueurMinimum(3), Validators.required]],
     notification:['pasNotification'],
     notificationsGroup: this.fb.group({
         telephone:[{value: '',disabled: true}],
         courriel:[{value: '',disabled: true}],
         confCourriel:[{value: '',disabled: true}],
       })
      
      //lePrenom: ['',[Validators.minLength(3),Validators.required]]

    });

    
    this.categories.obtenirCategories()
    .subscribe(cat => this.categoriesProblemes = cat,
               error => this.errorMessage = <any>error);  

  }

  appliquerNotifications(typeNotification: string): void {
    const telControl = this.problemeForm.get('notificationsGroup.telephone');
    telControl.clearValidators();
    telControl.reset();
    telControl.disable();

    const courrielControl = this.problemeForm.get('notificationsGroup.courriel');
    courrielControl.clearValidators();
    courrielControl.reset();
    courrielControl.disable();

    const confCourrielControl = this.problemeForm.get('notificationsGroup.confCourriel');
    confCourrielControl.clearValidators();
    confCourrielControl.reset();
    confCourrielControl.disable();
    

    if (typeNotification === "ParTelephone") {
      telControl.enable();
    }

   if (typeNotification === "ParCourriel") {
      confCourrielControl.enable();
      courrielControl.enable();
    }

    telControl.updateValueAndValidity();
    courrielControl.updateValueAndValidity();
    confCourrielControl.updateValueAndValidity();
    
  }

}
