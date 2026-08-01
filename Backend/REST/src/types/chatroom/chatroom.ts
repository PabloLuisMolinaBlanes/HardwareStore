import UserDTO from "../user"

type chatroom = {
    name: string,
    allowed_participants: UserDTO[],
    banned_participants: UserDTO[],
    secret_key: string
}

export default chatroom;