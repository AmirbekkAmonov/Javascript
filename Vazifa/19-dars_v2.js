function calculateEmailPercentage(sent, limit = 1000) {
    if (sent === 0) {
        return "Hech qanday e-mail yuborilmagan";
    }
    if (sent >= limit) {
        return "Kunlik chegaraga yetildi";
    }
    const percentage = Math.floor((sent / limit) * 100);
    return `${percentage}%`;
}
const sentEmails = 1010;
const emailLimit = 1000;
const result = calculateEmailPercentage(sentEmails, emailLimit);
console.log(result); 