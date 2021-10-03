    let vasya = { name: 'Вася', age: 25 };
    let petya = { name: 'Петя', age: 30 };
    let masha = { name: 'Маша', age: 28 };

    let users = [vasya, petya, masha];


    function namify(users) {
        let arrNames = [];
        users.map((i) => arrNames.push(i.name));
        return arrNames;
    }

    let names = namify(users);