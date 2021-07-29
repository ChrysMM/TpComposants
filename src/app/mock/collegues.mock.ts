import { Collegue } from './../models/collegue';

export const collegue: Collegue = {matricule:"1234",
nom:"Luter",
prenoms:"Martin",
dateDeNaissance:new Date('1970-12-17T03:24:00'),
email:"luter@.com",
photoUrl:"./b"

}
export const collegues: Collegue[] = [
  {
    matricule:"1234",
    nom:"Romain",
    prenoms:"Gary de lalala",
    dateDeNaissance:new Date('1988-12-17T03:24:00'),
    email:"romain@.com",
    photoUrl:"./c"
  },
  {
    matricule:"4567",
    nom:"lalalan",
    prenoms:"robert",
    dateDeNaissance:new Date('1987-12-17T03:24:00'),
    email:"lalalan@.com",
    photoUrl:"./c"
  },
  {
    matricule:"9124",
    nom:"mamere",
    prenoms:"cest",
    dateDeNaissance:new Date('1900-12-17T03:24:00'),
    email:"cestmamere@.com",
    photoUrl:"./d"
  },
  {
    matricule:"4321",
    nom:"renault",
    prenoms:"clio",
    dateDeNaissance:new Date('1700-12-17T03:24:00'),
    email:"renaultclio@.com",
    photoUrl:"./e"
  }

];
