import { sansEspaceValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
    
    it("une chaîne vide est invalide ", () => {
        let control = {value: ''};
        let validator = sansEspaceValidator.espaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);

    })

    it("une chaîne avec 10 espaces est invalide", () => {
        let control = {value: ' '.repeat(10)};
        let validator = sansEspaceValidator.espaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);

    })

    it("une phrase avec des mots est valide", () => {
        let control = {value: "Voici une phrase avec des mots."};
        let validator = sansEspaceValidator.espaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
    })

    
    it("une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide ", () => {
        let control = {value: "   Il y a 3 espaces au début et à la fin de la phrase.   "};
        let validator = sansEspaceValidator.espaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
    })


});

describe('longueurMinimum Validator', () => {

    it("une expression avec 1 espace et 2 caractère est invalide. ", () => {
        let control = {value: ' xx'};
        let validator = sansEspaceValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    })

    it("une expression avec 2 espaces et 1 caractère est invalide. ", () => {
        let control = {value: '  x'};
        let validator = sansEspaceValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    })

    it("une phrase avec 3 espaces et 3 caractères est valide. ", () => {
        let control = {value: '   J’aime Angular ' };
        let validator = sansEspaceValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
    })

    it("une phrase avec 5 espaces, 5 caractères et 5 espaces est valide.", () => {
        let control = {value: '     J’aime Angular     ' };
        let validator = sansEspaceValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
    })


});