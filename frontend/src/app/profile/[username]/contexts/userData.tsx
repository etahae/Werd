import { createContext } from "react";

export interface userDataType {
	username: string,
}

export const userDataContext = createContext<userDataType>({username: ''});