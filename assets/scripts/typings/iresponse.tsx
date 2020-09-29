interface IResponse {
	code:number;
	message:string;
	session: ISessionState;
	data: any;
	flush:boolean;
};