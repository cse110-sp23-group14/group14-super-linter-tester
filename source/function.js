
function getZodiacSign(month, day) {
    month = parseInt(month, 10);
    day = parseInt(day, 10);
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else {
        return "Capricorn";
    }
}


function getLoveCompatibility(leftSign, rightSign) {
  // Define the compatibility scores for each zodiac sign
    if(leftSign===rightSign){
        return "cannot compare same zodiac";
    }
    const compatibility = {
        "Aries": { compatible: ["Leo", "Taurus","Gemini","Cancer","Virgo","Capricorn","Aquarius","Pisces"], score: "OK" },
        "Aries": { compatible: ["Libra","Sagittarius"], score: "POSITIVE"},
        "Aries": {compatible:["Scoprio"],score: "NEGATIVE"},

        "Taurus": { compatible: ["Aries","Cancer","Libra","Scoprio","Capricorn"]},
        "Taurus": { compatible: ["Virgo", "Capricorn"], score: 85 },
        "Gemini": { compatible: ["Libra", "Aquarius"], score: 70 },
        "Cancer": { compatible: ["Scorpio", "Pisces"], score: 75 },
        "Leo": { compatible: ["Aries", "Sagittarius"], score: 90 },
        "Virgo": { compatible: ["Taurus", "Capricorn"], score: 85 },
        "Libra": { compatible: ["Gemini", "Aquarius"], score: 70 },
        "Scorpio": { compatible: ["Cancer", "Pisces"], score: 75 },
        "Sagittarius": { compatible: ["Aries", "Leo"], score: 90 },
        "Capricorn": { compatible: ["Taurus", "Virgo"], score: 85 },
        "Aquarius": { compatible: ["Gemini", "Libra"], score: 70 },
        "Pisces": { compatible: ["Cancer", "Scorpio"], score: 75 }
    };

    // Check if the signs are compatible
    if (compatibility[leftSign] && compatibility[leftSign].compatible.includes(rightSign)) {
        const leftScore = compatibility[leftSign].score;
        const rightScore = compatibility[rightSign].score;
        return `The love compatibility between ${leftSign} and ${rightSign} is ${leftScore}%`;
    } else {
        return `The love compatibility between ${leftSign} and ${rightSign} is unknown`;
    }
}