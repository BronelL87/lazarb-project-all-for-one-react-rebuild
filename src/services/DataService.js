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



export { getHello, askQuestions }