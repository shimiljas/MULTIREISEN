export const COUNTRY_SELECT='COUNTRY_SELECT';



export const selectCountry = (data) => {
    return {
        type: COUNTRY_SELECT,
        payload: data,
    };
};







