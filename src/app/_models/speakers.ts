
export class Speakers {
    constructor(public _id:number,public fullName:string,
        public address:{city:string,street:string,building:number},
        public email:string,public role:string ,public image:string)
    {
    }
}
