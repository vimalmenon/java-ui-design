interface IResponse {
	code:number;
	message:string;
	session: ISession;
	data: any;
	flush:boolean;
};