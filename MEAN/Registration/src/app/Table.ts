export class Table{
    constructor(
        public id: number =  null,
        public fname: string = "",
        public lname: string = "",
        public email: string = "",
        public password: string = "",
        public address: string = "",
        public apt: string = "",
        public city: string = "",
        public state: string = "",
        public lucky: boolean = true,
        public created_at = new Date(),
        public updated_at = new Date()
    ){}
}
