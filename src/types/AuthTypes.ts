export interface AuthState {
    tel: string;
    name: string;
    password:string;
}

export type LoginState = Pick<AuthState, "tel" | "password">