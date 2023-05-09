export function rps(shot) {
    const hand = ["rock", "paper", "scissors"];

    if (!shot) {
        shot = hand[Math.floor(Math.random() * hand.length)];
    } else {
        shot = shot.toLowerCase();
    }

    const machineChoice = hand[Math.floor(Math.random() * hand.length)];

    if (!hand.includes(shot)) {
        console.error(`${shot} is not a valid choice.`);
        throw new RangeError();
    }

    if (shot === machineChoice) {
        return { player: shot, opponent: machineChoice, result: "tie" };
    } else if (
        (shot === "rock" && machineChoice === "scissors") ||
        (shot === "paper" && machineChoice === "rock") ||
        (shot === "scissors" && machineChoice === "paper")
    ) {
        return { player: shot, opponent: machineChoice, result: "win" };
    } else {
        return { player: shot, opponent: machineChoice, result: "lose" };
    }
}

export function rpsls(shot) {
    const hand = ["rock", "paper", "scissors", "lizard", "spock"];

    if (!shot) {
        shot = hand[Math.floor(Math.random() * hand.length)];
    } else {
        shot = shot.toLowerCase();
    }

    const machineChoice = hand[Math.floor(Math.random() * hand.length)];

    if (!hand.includes(shot)) {
        console.error(`${shot} is not a valid choice.`);
        throw new RangeError();
    }

    if (shot === machineChoice) {
        return { player: shot, opponent: machineChoice, result: "tie" };
    } else if (
        (shot === "rock" && (machineChoice === "scissors" || machineChoice === "lizard")) ||
        (shot === "paper" && (machineChoice === "rock" || machineChoice === "spock")) ||
        (shot === "scissors" && (machineChoice === "paper" || machineChoice === "lizard")) ||
        (shot === "lizard" && (machineChoice === "paper" || machineChoice === "spock")) ||
        (shot === "spock" && (machineChoice === "scissors" || machineChoice === "rock"))
    ) {
        return { player: shot, opponent: machineChoice, result: "win" };
    } else {
        return { player: shot, opponent: machineChoice, result: "lose" };
    }
}