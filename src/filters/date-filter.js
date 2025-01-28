const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const ordinalDay = (number) => {
  return number > 0 //If dayNumber greater than 0, evaluate suffix. Else, return empty string
    ? ["th", "st", "nd", "rd"][
        (number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10 //If 4-20 OR remainder > 3, index = 0 (th). Else, remainder = index (st, nd or rd)
      ]
    : "";
};

export const dateFilter = (value, locale) => {

    let date;

    if (Object.prototype.toString.call(value) !== "[object Date]")
    {
        date = new Date(`${value}T00:00`);
    }
    else
    {
        date = value;
    }

    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    //const month = new Intl.DateTimeFormat('default', {month: 'long'}).format(date);
    const day = date.getDate();  //Returns an integer removing leading zeros

    if ( locale == "en-AI" || "en-AG" || "en-AU" || "en-AT" || "en-BS" || "en-BB" || "en-BE" || "en-BZ" || "en-BM" || "en-BW" || "en-IO" || "en-VG" || "en-CM" || "en-KY" || "en-CX" || "en-CC" || "en-CK" || "en-CY" || "en-DK" || "en-DM" || "en-ER" || "en-SZ" || "en-FK" || "en-FJ" || "en-FI" || "en-GM" || "en-DE" || "en-GH" || "en-GI" || "en-GD" || "en-GG" || "en-GY" || "en-HK" || "en-IN" || "en-IE" || "en-IM" || "en-IL" || "en-JM" || "en-JE" || "en-KE" || "en-KI" || "en-SZ" || "en-LR" || "en-MO" || "en-MG" || "en-MW" || "en-MY" || "en-MV" || "en-MT" || "en-MU" || "en-FM" || "en-MS" || "en-NA" || "en-NR" || "en-NL" || "en-NZ" || "en-NG" || "en-NU" || "en-NF" || "en-PK" || "en-PW" || "en-PG" || "en-PN" || "en-RW" || "en-WS" || "en-SL" || "en-SG" || "en-SX" || "en-SB" || "en-ZA" || "en-SS" || "en-SH" || "en-KN" || "en-LC" || "en-VC" || "en-SD" || "en-SE" || "en-CH" || "en-TZ" || "en-TK" || "en-TO" || "en-TT" || "en-TC" || "en-TV" || "en-UG" || "en-AE" || "en-GB" || "en-VU" || "en-ZM" || "en-ZW")
    {
        return `${day}${ordinalDay(day)} of ${month} ${year}`;
    }
    else if (locale == "")
    {
        return `${day}${ordinalDay(day)} of ${month} ${year}`; //Fallback incase unable to fetch data (Check language.js)
    }
    else
    {
        return `${month} ${day}${ordinalDay(day)}, ${year}`; //American date format for rest of English locales
    }
}

//OLD CODE

/*--post.html--

{% set locale = timeZone %}
{% set locale = timeZone.timezone %}

--date-filter.js--

import moment from 'moment';

export const dateFilter = value => {
    const dateObject = moment(value);
    return `${dateObject.format('Do')} of ${dateObject.format('MMMM YYYY')}`;
};
//Do = 1st, 2nd, 30th etc.
//MMMM = January, Feburary, May etc.
//YYYY = 2020, 2021 etc.

//= 3rd of September 2009

const numericFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

//const date = new Date();
//const formattedDate = new Intl.DateTimeFormat(navigator.languages).format(date);



export const dateFilter = (value, value2) => {
    const date = new Date(`${value}T00:00`);
    //const formattedDate = new Intl.DateTimeFormat(value2, numericFormat).format(date);
    //return formattedDate;
    return value2;
}*/
