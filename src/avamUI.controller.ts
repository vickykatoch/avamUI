module avam.ui{
	export interface IAvamUIControllerModel{
		isMenuVisible:boolean;
		isMenuVertical:boolean;
		isMenuLayoutToggleAllowed:boolean;
	}
	
	export class AvamUIModelController implements IAvamUIControllerModel{
		isMenuVisible:boolean=true;
		isMenuVertical:boolean=true;
		isMenuLayoutToggleAllowed:boolean=true;
		
		contructor(){
		}
		
	}
}