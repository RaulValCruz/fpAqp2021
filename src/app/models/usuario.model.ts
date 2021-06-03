export class Usuario {

    constructor(
        public documento: string,
        public user: string,
        public password:string,
        public role: string,
        public nombre: string,
        public email?: string,
        public telefono?: string,
        public uid?: string,
    ){}
}