
export function fetchData(type) {
    return fetch(`https://ms-autocomplete.spain.advgo.net/v1/search?max_results=10&prefix=${type}`)
        .then((response) => response.json());
}

export function fetchDataJobs(keyword) {
    return fetch(`https://api-infojobs.hop.sh/api-offers/search?keyword=${keyword}`)
        .then((response) => response.json());
}
export async function fetchDataJobsDetail(keyword, normalizedJobTitleIds, provinceIds, cityIds, teleworkingIds, categoryIds, workdayIds, educationIds, segmentId, contractTypeIds, page, sortBy, onlyForeignCountry, countryIds, sinceDate, subcategoryIds) {
    const url = `https://api-infojobs.hop.sh/api-offers/search?` +
        `keyword=${keyword || ''}&` +
        `normalizedJobTitleIds=${normalizedJobTitleIds || ''}&` +
        `provinceIds=${provinceIds || ''}&` +
        `cityIds=${cityIds || ''}&` +
        `teleworkingIds=${teleworkingIds || ''}&` +
        `categoryIds=${categoryIds || ''}&` +
        `workdayIds=${workdayIds || ''}&` +
        `educationIds=${educationIds || ''}&` +
        `segmentId=${segmentId || ''}&` +
        `contractTypeIds=${contractTypeIds || ''}&` +
        `page=${page || ''}&` +
        `sortBy=${sortBy || ''}&` +
        `onlyForeignCountry=${onlyForeignCountry || ''}&` +
        `countryIds=${countryIds || ''}&` +
        `sinceDate=${sinceDate || ''}&` +
        `subcategoryIds=${subcategoryIds || ''}`;

    //console.log("keyword ", keyword, " \n \n normalizedJobTitleIds ", normalizedJobTitleIds, "\n \n provinceIds ", provinceIds, " \n \cityIds ", cityIds, "\n\n teleworkingIds ", teleworkingIds, "\n\n categoryIds ", categoryIds, " \n\workdayIds ", workdayIds, " \n\educationIds ", educationIds, " \n\segmentId ", segmentId, "\n\n contractTypeIdsSearch ", contractTypeIds, " \n\npage ", page, " \n\n sortBy ", sortBy, "\n\n onlyForeignCountry ", onlyForeignCountry, " \n\n countryIds ", countryIds, "\n\n sinceDate ", sinceDate, " \n\n subcategoryIds ", subcategoryIds);

    return await fetch(url)
        .then((response) => response.json());
}


