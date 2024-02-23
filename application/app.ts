import axios from 'axios';
import * as readline from 'readline-sync';

interface Fighter {
    id: number;
    name: string;
    nationality: string;
    age: number;
    active: boolean;
    birthdate: string;
    profile_image: string;
    status: string;
    weightclass: string[];
    other_details: {
        id: number;
        height: number;
        weight: number;
        reach: number;
        record: string;
        stance: string;
    };
}

const showAllFighter = async () => {
    try {
        const response = await axios.get<Fighter[]>('https://eliaselmokadem.github.io/fightersAPI/fighters.json');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const application = async () => {
    let exit: boolean = false;
    console.log(`Welcome to UFC Fighters JSON Selector!`);

    while (!exit) {
        let option: number = readline.questionInt(`
-----------------------------
| 1. Show fighters          |
| 2. Still under maintenance|
| 3. Exit                   |
-----------------------------

Please select an option: `);

        switch (option) {
            case 1:
                await showAllFighter();
                break;
            case 2:
                console.log("This option is still under maintenance.");
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
