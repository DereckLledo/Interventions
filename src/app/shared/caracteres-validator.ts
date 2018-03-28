import { ValidatorFn, AbstractControl } from "@angular/forms";

export class sansEspaceValidator {
    static espaces(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {



            if ((c.value || "").trim().length === 0) {

                return { 'espaces': false }

            } else {
                return { 'espaces': true };
            }


        }
    };

    static longueurMinimum(min: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {


            if ((c.value || "").trim().length < min) {

                return { 'espaces': false }

            } else {
                return { 'espaces': true };
            }

        }
    };
}