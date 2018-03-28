import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { sansEspaceValidator } from '../shared/caracteres-validator';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  
  problemeForm: FormGroup;
  
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
     lePrenom: ['',[sansEspaceValidator.longueurMinimum(3), Validators.required]]
      //lePrenom: ['',[Validators.minLength(3),Validators.required]]

    });

  }

}
