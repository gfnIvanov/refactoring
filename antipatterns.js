import fetch from 'fetch';

// чистота функций (детерминированность)
const dirtyFunction = function(arg) {
    arg++;
    return arg;
}

const clearFunction = function(arg) {
    return arg;
}

// блокирующее выполнение
const blockFunction = function() {
    let result = {};

    // callback hell
    fetch.get('http://test-data.ru', function(result) {
        result.json().then(result => {
            if (result.body.id === 1) {
                fetch.get('http://test-data.ru/get-field', function(result) {
                    if (result.status === 200) {
                        result = result.body;
                    }
                });
            } else {
                result = result.body;
            }
        })
    });
    return result;
}

const createPageBlock = function() {
    const root = document.getElementById('root');
    const div = document.createElement('div');
    div.innerText = 'Hello User!';
    const data = blockFunction();
    div.innerHTML = data;
    root.appendChild(div);
}

// неблокирующее выполнение
const unblockFunction = async function() {
    let result = {};
    let fieldData = {};
    const data = await fetch.get('http://test-data.ru')
    const json = await data.json();
    if (json.body.id === 1) {
        fieldData = await fetch.get('http://test-data.ru/get-field')
        if (fieldData.status === 200) {
            result = fieldData.body;
        }
    } else {
        result = data.body;
    }
    return result;
}

const createPageUnblock = function() {
    const root = document.getElementById('root');
    const div = document.createElement('div');
    div.innerText = 'Hello User!';
    blockFunction().then(data => {
        div.innerHTML = data;
    });
    root.appendChild(div);
}

// cryptic code 
const someFunction = function(value) {
    const innerValue = 1;
    const someArray = [1, 2, 3];
    let result;
    (value ?? innerValue) > 10 ? result = someArray[0] : (value ?? innerValue) > 100 ? result = someArray[2] : result = someArray.includes(0);
    return result;
}

const someFunctionUncript = function(value) {
    const innerValue = 1;
    const someArray = [1, 2, 3];
    const argument = value ?? innerValue;
    if (argument > 100) {
        return someArray[2]
    } else if (argument > 10) {
        return someArray[0];
    } else {
        someArray.includes(0);
    }
}