interface ISnackBarState {
	status:boolean; 
	message:string|null;
}
interface INavigation {
    name : string;
	link : string;
    title : string;
}

interface INavigationsState {
    selectedNavigation : INavigation|null;
	navigationEntitlement: any;
}

interface ISessionState {
	id: number;
	user:string|null;
	group: string
}

interface ISocialMedia {
    id: number;
    isActive: boolean;
    name: string;
    title: string
    type: string
    url: string
}


interface IState {
    snackBar:ISnackBarState;
    navigations:INavigationsState;
    session:ISessionState|null;
}