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
     noTypeProbleme: ['']
      //lePrenom: ['',[Validators.minLength(3),Validators.required]]

    });

    
    this.categories.obtenirCategories()
    .subscribe(cat => this.categoriesProblemes = cat,
               error => this.errorMessage = <any>error);  

  }

}
