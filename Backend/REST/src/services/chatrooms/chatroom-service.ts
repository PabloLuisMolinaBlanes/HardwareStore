import { Server } from "socket.io";
import { decode_jwt } from "../../auth/utils/jwt/jwt";
const io = new Server(3000)

io.on("connection", (socket) => {
    socket.emit("info", "Connection established");
    socket.on("message", async (arg) => {
        var token = await decode_jwt(arg.token);
        if (token == -1) {
            socket.emit("info", "Invalid token");
        } else {
            const message = {username: token, message: arg.message} 
            io.emit("message", message)
        }
    })
})