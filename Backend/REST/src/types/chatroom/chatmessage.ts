import UserDTO from "../user";

export type chatMessageIn =  {
    token: string,
    message: string
}

export type chatMessageOut =  {
    user: UserDTO,
    message: string
}