export class Cv {
    id?: any;
    // photoCv?: any;
    nom?: string;
    prenom?: string;
    email?: string;
    telephone?: string;
    titCV?: string;
    profilCv?: string;
    objecCarri?: string;

    constructor(
        nom: string = '',
        prenom: string = '',
       email: string = '',
       telephone: string = '',
       titCV: string = '',
       profilCv: string = '',       
      objecCarri: string = '',
    ) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.titCV = titCV;
        this.profilCv= profilCv;
        this.objecCarri= objecCarri;
    }
}
