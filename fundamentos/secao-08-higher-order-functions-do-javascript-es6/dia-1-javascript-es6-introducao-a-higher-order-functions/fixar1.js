const wakeUp = () => {
    return 'Acordando!!';
}

const breakfast = () => {
    return 'Bora tomar café!!';
}

const sleep = () => {
    return 'Partiu dormir!!';
}

const doingThings = (action) => {
    console.log(action());
}

doingThings(wakeUp);