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

    it("une phrase avec des mots est valide", () => {
        let control = {value: "Voici une phrase avec des mots."};
        let validator = sansEspaceValidator.plage();
        let result = validator(control as AbstractControl);
        expect(result['plage']).toBe(true);
    })

    
    it("une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide ", () => {
        let control = {value: "   Il y a 3 espaces au début et à la fin de la phrase.   "};
        let validator = sansEspaceValidator.plage();
        let result = validator(control as AbstractControl);
        expect(result['plage']).toBe(true);
    })


});