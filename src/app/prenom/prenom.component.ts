import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'Inter-prenom',
  templateUrl: './prenom.component.html',
  styleUrls: ['./prenom.component.css']
})
export class PrenomComponent implements OnInit {

  prenomForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prenomForm = this.fb.group({
      lePrenom: ['',[Validators.minLength(3)]]

    });


    }

}
