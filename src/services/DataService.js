const getHello = async (userN) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/SayHello/GiveName/${userN}`);
    const data = await response.text();

    return data;
}

const askQuestions = async (name, time) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/AskQuestions/UserQuestions/${name}/${time}`);
    const data = await response.text();
    return data;
}

const addNums = async (userNum1, userNum2) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/AddNumbers/AddTwoNums/${userNum1}/${userNum2}`);
    const data = await response.text();
    return data;
}

const StoryLib = async (name, place, adjective, animal, verb, color, noun, number,vehicle,profession) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/MadLib/MadLibs/${name}/${place}/${adjective}/${animal}/${verb}/${color}/${noun}/${number}/${vehicle}/${profession}`);
    const data = await response.text();
    return data;
}

const getOddOrEven = async (number) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/OddOrEven/OddEven/${number}`);
    const data = await response.text();
    return data;
}

const reverseAlph = async (input) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/ReverseItStr/ReverseStr/${input}`);
    const data = await response.text();
    return data;
}

const reverseNums = async (numbers) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/ReverseItNum/ReverseNum/${numbers}`);
    const data = await response.text();
    return data;
}


const magic8Ball = async (questionInpt) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/MagicBall/MagicBall/${questionInpt}`);
    const data = await response.text();
    return data;
}

const GreaterOrLessThan = async (num1, num2) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/GreaterOrLess/GreaterOrLessCheck/${num1}/${num2}`);
    const data = await response.text();
    return data;
}

const pickRestaurant = async(chosenRestaurant) => {
    const response = await fetch(`https://blazarallforoneapi-caa5d0dqhgdxdvhk.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPick/${chosenRestaurant}`);
    const data = await response.text();
    return data;
}



export { getHello, askQuestions, addNums, StoryLib, getOddOrEven, reverseAlph, reverseNums, magic8Ball, GreaterOrLessThan, pickRestaurant }