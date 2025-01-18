export interface ICat {
   id: string;
   url: string;
   width: string;
   height: string;
}

export interface IFilteredCat {
   id: string;
   url: string;
}

export interface CatState {
   catsList: IFilteredCat[];
   isLoading: boolean;
   isError: boolean;
}
