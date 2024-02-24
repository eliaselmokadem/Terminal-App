import axios from 'axios';
import * as readline from 'readline-sync';
import { Fighter } from './interface';

let logo = () => {
    console.log(`*******************************`);
    console.log(`___   ___   ______    ______`);
    console.log(`|  | |  |  |   ___|  /  ____|`);
    console.log(`|  | |  |  |  |___   |  |`);
    console.log(`|  | |  |  |   ___|  |  |`);
    console.log(`|  |_|  |  |  |      |  |___`);
   console.log(`\\_______/  |__|      \\______|`);
   console.log();
   console.log(`*******************************`);
   console.log();
}


const api = async (): Promise<Fighter[]> => {
    try {
        const response = await axios.get<Fighter[]>('https://eliaselmokadem.github.io/fightersAPI/fighters.json');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const showAllFighter = async () => {
    const fighters = await api();
    fighters.forEach(fighter => {
        console.log(`${fighter.name} (ID: ${fighter.id})`);
    });
}

const filterById = async () => {
    const fighters = await api();
    let filterId: number = readline.questionInt(`Please enter the ID you want to filter by: `);
    const filteredFighter = fighters.find(fighter => fighter.id === filterId);
    if (filteredFighter) {
        console.log(filteredFighter);
    } else {
        console.log(`Fighter with ID ${filterId} not found.`);
    }
}


console.log();

const application = async () => {
    logo();
    let exit: boolean = false;
    console.log(`Welcome to UFC Fighters JSON Selector!`);

    while (!exit) {
        let option: number = readline.questionInt(`
-----------------------------
| 1. Show fighters          |
| 2. Filter By Id           |
| 3. Exit                   |
-----------------------------

Please select an option: `);

        console.log();

        switch (option) {
            case 1:
                await showAllFighter();
                break;
            case 2:
                await filterById();
                break;
            case 3:
                exit = true;
                break;
            default:
                console.log("Invalid option! Please select a valid option.");
                break;
        }
    }
}

application();
