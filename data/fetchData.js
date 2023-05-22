
export function fetchData(type) {
    return fetch(`https://ms-autocomplete.spain.advgo.net/v1/search?max_results=10&prefix=${type}`)
        .then((response) => response.json());
}

export function fetchDataJobs() {
    return fetch(`https://api-infojobs.hop.sh/api-offers/desarrollo%20Web/1`)
        .then((response) => response.json());
}


