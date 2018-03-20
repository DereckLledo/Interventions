import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  
  prenomForm: FormGroup;
  
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prenomForm = this.fb.group({
      lePrenom: ['',[Validators.minLength(3)]]

    });

  }

}
