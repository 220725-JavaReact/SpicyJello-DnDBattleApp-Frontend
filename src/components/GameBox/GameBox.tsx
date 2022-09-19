import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { IGame } from "../../models/Game";
import { IAPIMonster, IMonster, IMonsterResults } from "../../models/Monster";
import { IUser } from "../../models/User";
import NavBar from "../../shared/NavBar/NavBar";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser, setUser } from "../LoginBox/UserSlice";
import "./GameBox.css";

function GameBox() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const [character, setCharacter] = useState({
        class: "Fighter",
        hit_points: 12,
        armor_class: 16,
        attack_bonus: 5,
        damage_bonus: 3
    });
    const [monster, setMonster] = useState<IAPIMonster>({
        name: "",
        armor_class: 0,
        hit_points: 0,
        xp: 0,
        actions: [],
        url: ""
    });
    const [playerTurn, setTurn] = useState(true);
    const [enemiesKilled, setKills] = useState<number>(0);
    const [status, setStatus] = useState("");
    const [game, setGame] = useState<IGame>({
        user: {
            id: user.id
        },
        score: 0,
        gold: 0,
        monsters: []
    });
    function getMonster(difficulty: number) {
        axios.get<IMonsterResults>("https://www.dnd5eapi.co/api/monsters?challenge_rating=" + difficulty)
            .then(response => {
                const monsterResults = response.data;
                const monsterIndex = Math.floor(Math.random() * monsterResults.count);
                axios.get<IAPIMonster>("https://www.dnd5eapi.co" + monsterResults.results[monsterIndex].url)
                    .then(response2 => {
                        setMonster(response2.data);
                    });
            });
    }
    function rollDice(expression: string) {
        const expressionArray = expression.split(/[d+]/);
        let result = 0;
        for (let i = 0; i < +expressionArray[0]; i++) {
            result += Math.floor(Math.random() * +expressionArray[1]) + 1;
        }
        if (expressionArray.length === 3) {
            result += +expressionArray[2];
        }
        return result;
    }
    function doTurn() {
        if (status.includes("Game over")) {
            return;
        }
        if (character.hit_points < 1) {
            axios.post<IGame>("http://spicyjellodndbattleappbe-eb-env.eba-k3zphm3n.us-east-1.elasticbeanstalk.com/api/games", game)
                .then(response => {
                    game.monsters.map((monster) => {
                        if (response.data.id !== undefined) {
                            monster.game = {
                                id: response.data.id
                            };
                            axios.post<IMonster>("http://spicyjellodndbattleappbe-eb-env.eba-k3zphm3n.us-east-1.elasticbeanstalk.com/api/monsters", monster);
                        }
                    });
                });
            let updateUser: IUser = structuredClone(user);
            updateUser.gold += game.gold;
            axios.put<IUser>("http://spicyjellodndbattleappbe-eb-env.eba-k3zphm3n.us-east-1.elasticbeanstalk.com/api/users", updateUser)
                .then(response3 => {
                    dispatch(setUser(response3.data));
                })
            setStatus("Game over");
            return;
        }
        if (monster.name === "") {
            getMonster(0.125);
            setStatus("Enemies killed: " + enemiesKilled);
            return;
        } else if (monster.hit_points < 1) {
            const gameMonster: IMonster = {
                source: monster.url,
                modifier: ""
            };
            game.monsters.push(gameMonster);
            game.score += monster.xp * 2;
            game.gold += monster.xp;
            setGame(game);
            setKills(enemiesKilled + 1);
            getMonster(0.125);
            setStatus("Enemies killed: " + enemiesKilled);
            return;
        }
        if (playerTurn) {
            if (rollDice("1d20+" + character.attack_bonus) >= monster.armor_class) {
                const damage = rollDice("1d8+" + character.damage_bonus);
                monster.hit_points -= damage;
                setMonster(monster);
                setStatus("You dealt " + damage + " damage to " + monster.name + ". Enemies killed: " + enemiesKilled);
            } else setStatus("You missed. Enemies killed: " + enemiesKilled);
        } else {
            const actionIndex = Math.floor(Math.random() * monster.actions.length);
            const action = monster.actions[actionIndex];
            if (rollDice("1d20+1") >= character.armor_class) {
                const damage = rollDice("1d4+1");
                character.hit_points -= damage;
                setCharacter(character);
                setStatus(monster.name + " dealt " + damage + " damage to you. Enemies killed: " + enemiesKilled);
            } else setStatus(monster.name + " missed. Enemies killed: " + enemiesKilled);
        }
        setTurn(!playerTurn);
    }
    if (user.id < 1) return <Navigate replace to="/" />;
    else return <div className="box">
        <NavBar />
        <div onClick={doTurn} className="row align-items-center justify-content-center content game">
            <div className="col-md-12 text-center">
                <div>{status}</div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <p>{character.class}</p>
                        <p>Hit points: {character.hit_points}</p>
                    </div>
                    <div className="col-md-6">
                        <p>{monster.name}</p>
                        <p>Hit points: {monster.hit_points}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
export default GameBox;