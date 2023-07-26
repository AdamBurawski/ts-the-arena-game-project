import * as express from "express";
import "express-async-errors";
import { static as eStatic, urlencoded } from "express";
import * as methodOverride from "method-override";
import {engine} from  "express-handlebars";
import { homeRouter } from "./routers/home";
import { warriorRouter } from "./routers/warrior";
import { arenaRouter } from "./routers/arena";
import { hallOfFameRouter } from "./routers/hall-of-fame";
import { WarriorRecord } from "./records/warrior.record";
import "./utils/db"
import { handleError } from "./utils/errors";

const app = express();

app.use(methodOverride("_method"));
app.use(urlencoded({extended: true}));
app.use(eStatic("public"));
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers, // Dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
}));
app.set('view engine', '.hbs');

app.use("/", homeRouter)
app.use("/warrior", warriorRouter)
app.use("/arena", arenaRouter)
app.use("/hall-of-fame", hallOfFameRouter)


app.use(handleError);

// const w = new WarriorRecord({
//     name: "x",
//     agility: 7,
//     power: 1,
//     defence: 1,
//     stamina: 1,
// })

// console.log(w)

app.listen(3000, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3000');
});
