import { functionsToTest } from './functionsToTest.js';

function getNestedData(obj, keyPath) {
    return keyPath.split('.').reduce((acc, key) => {
        if (acc && acc[key] !== undefined) {
            return acc[key];
        }
        return undefined;
    }, obj);
}

function displayResultsForFunction(title, results) {
    const resultElement = document.getElementById('result');

    const titleElement = document.createElement('h4');
    titleElement.style.color = 'green';
    titleElement.style.fontFamily = 'Arial';
    titleElement.style.textDecoration = 'underline';
    titleElement.textContent = title;
    resultElement.appendChild(titleElement);

    results.forEach(result => {
        const resultParagraph = document.createElement('p');
        resultParagraph.textContent = result;
        resultElement.appendChild(resultParagraph);
    });

    console.log(`"${title}"`);
    results.forEach(result => console.log(result));
}

function loadJsonAndRunFunctions(jsonPath) {
    fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            functionsToTest.forEach(({ title, func, key }) => {
                const inputData = getNestedData(data, key);
                if (inputData) {
                    try {
                        console.log(`Input for "${title}":`, inputData);
                        const results = inputData.map(param =>
                            Array.isArray(param) ? func(...param) : func(param)
                        );
                        displayResultsForFunction(title, results);
                    } catch (error) {
                        console.error(`Error in function "${title}":`, error);
                    }
                } else {
                    console.error(`Key "${key}" not found in JSON for "${title}"`);
                }
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

loadJsonAndRunFunctions('./api/data.json');
