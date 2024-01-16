import { createContext } from "react";

export interface userDataType {
	username: string,
	firstname: string,
	lastname: string,
}

export const userDataContext = createContext<userDataType>({username: '', firstname: '', lastname: ''});