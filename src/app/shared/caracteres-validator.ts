import { ValidatorFn } from "@angular/forms";

export class sansEspaceValidator {
    static plage(): ValidatorFn {
        return (): {[key: string]: boolean} | null => {
            return {'plage' : true};
        }
    };
}