import { createServer } from "http";
import { Server } from "socket.io";
import {createGame} from "./utils/createGame.js";
import {Card} from "./classes/Card.js";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

let jsonGame = {};

io.on("connection", (socket) => {
    socket.on("join_room", (room, nPlayer, callback) => {
        console.log("Connected");
        socket.join(room);
        socket.data.room = room;

        callback(nPlayer ?? io.sockets.adapter.rooms.get(room).size);

        if(io.sockets.adapter.rooms.get(room).size === 1 && !nPlayer) {
            jsonGame = createGame();
        }

        const socketsInRoom = io.sockets.adapter.rooms.get(room);
        if(socketsInRoom.size === 1) {
            Array.from(socketsInRoom).forEach((socketId) => {
                const socketIndex = Array.from(socketsInRoom).indexOf(socketId);
                //Send player info to each player
                let newPlayers = JSON.parse(JSON.stringify(jsonGame.players));
                newPlayers[socketIndex].me = true

                let fakeCard = [];
                for (let i = 0; i < 6; i++) {
                    fakeCard.push(new Card(0, "fake", "", "fake", 0, "", 0))
                }

                newPlayers.map((player, index) => {
                    if(index !== socketIndex) {
                        player.hand = [...fakeCard];
                    } else {
                        player.me = true;
                    }
                });

                io.to(socketId).emit("get_playerInfo", newPlayers);
            });
        }
    });

    /**
     * Sending to all clients in room
     * @param {string} name
     * @param {*} data
     */
    const sendAll = (name, data) => {
        socket.to(socket.data.room).emit(name, data);
    };

    /**
     * Sending to all client in room except sender
     * @param {string} name
     * @param {*} data
     */
    const sendAllExceptSender = (name, data) => {
        socket.broadcast.to(socket.data.room).emit(name, data);
    }

    /**
     * Sending to on client in room
     * @param {string} name
     * @param {*} nPlayer
     * @param {*} data
     */
    const sendTo = (name, nPlayer, data) => {
        const socketId = Array.from(io.sockets.adapter.rooms.get(socket.data.room))[nPlayer - 1];
        io.to(socketId).emit(name, data);
    }

    socket.on("send_pickCard", ({nPlayer}) => {
        console.log(nPlayer)
        const newCard = jsonGame.drawOneCard(nPlayer - 1);

        // Check if deck is empty
        jsonGame.defausseToDeck();

        sendAllExceptSender("get_pickCard", {
            action: "pickCard",
            nPlayer: nPlayer
        });
        sendTo("get_newCard", nPlayer, newCard);
    });

    socket.on("send_playCard", ({nPlayer,nPlayer2,card}) => {
        jsonGame.players[nPlayer - 1].playCard(card,nPlayer2 - 1)

        if (card.type === "distance") {
          if (isGameFinished()){
            sendAll("get_finished", jsonGame)
          }
            sendAll("get_distance", {
                action: "distance",
                nPlayer: nPlayer2,
                distance: jsonGame.players[nPlayer2 - 1].progress,
            })
        }

        if(nPlayer2 === nPlayer){
            sendAllExceptSender("get_playCard", {
                action: "playCard",
                nPlayer: nPlayer2,
                card: card,
            });
        } else{
            sendAll("get_distance", {
                action: "playCard",
                nPlayer: nPlayer2,
                card: card,
            })
        }

        sendAll("get_nextPlayer", jsonGame.passPlayer() + 1);
    });
   

    socket.on("send_discardCard", ({nPlayer,card}) => {  
      jsonGame.players[nPlayer - 1].toDefausse(jsonGame, card)

      sendAllExceptSender("get_discardCard", {
        action: "discard card",
        nPlayer: nPlayer,
        card: card
      });
    });
});

const isGameFinished = () => {
    jsonGame.players.forEach(player => {
        //un joueur a parcouru 4000km
        if(player.progress === 1000) return true

        //aucun joueur n'a parcouru 4000km
        return false
    });
}

httpServer.listen(9999, () => {
    console.log(`Socket IO is running on port 9999.`);
});