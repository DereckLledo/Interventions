import { sansEspaceValidator } from "./caracteres-validator";

describe('sansEspaces Validator', () => {
    it("Pas d'espace", () => {
        let validator = sansEspaceValidator.plage();
        let result = validator(null);
        expect(result['plage']).toBe(true);

    })
});