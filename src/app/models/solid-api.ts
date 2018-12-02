import { SolidSession } from "./solid-session.model";

// Declaration of public Api


// TODO change `any` to normal definitions!
interface IFetchProperties {
    method: 'PATCH';
    headers: {[key: string]: string},
    body: string,
    credentials?: 'include',
}
export interface IResponce {
    body: ReadableStream;
    bodyUsed: boolean;
    headers: {[key: string]: string};
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}
interface ISolidAuthProperties {
    callbackUri?: string;
    storage?: Storage;
}

interface ISolidAuth {
    currentSession(Storage?): Promise<SolidSession>;
    fetch(url: string|any, prop?: IFetchProperties): Promise<IResponce>;
    login(idp: string, properties?:ISolidAuthProperties): Promise<void>;
    logout(): Promise<any>;
    popupLogin(any): Promise<any>;
    trackSession(any): Promise<any>;
}

export interface ISolidRoot {
    auth: ISolidAuth;
}