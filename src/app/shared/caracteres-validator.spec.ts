import { sansEspaceValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
    
    it("une chaîne vide est invalide ", () => {
        let control = {value: ''};
        let validator = sansEspaceValidator.plage();
        let result = validator(control as AbstractControl);
        expect(result['plage']).toBe(false);

    })

    it("une chaîne avec 10 espaces est invalide", () => {
        let control = {value: ' '.repeat(10)};
        let validator = sansEspaceValidator.plage();
        let result = validator(control as AbstractControl);
        expect(result['plage']).toBe(false);

    })


});