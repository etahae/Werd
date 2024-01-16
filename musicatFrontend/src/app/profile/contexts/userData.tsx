import { createContext } from "react";

export interface userDataType {
	id: number,
	username: string,
	firstname: string,
	lastname: string,
	photo?: string,
}

export const userDataContext = createContext<userDataType>({id: -1, username: '', firstname: '', lastname: '', photo: ''});