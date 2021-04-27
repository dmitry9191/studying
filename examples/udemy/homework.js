const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', 'Ann'];

let employersNames = [];

employersNames = employers.filter(employer => employer.length > 0);

employersNames = employersNames.map(employer => employer.toLocaleLowerCase());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
    const {'1': everyCash} = {...arguments};
    let total = own;

    everyCash.forEach(elem => total += elem);

    return total;
}

const money = calcCash(null, sponsors.cash);

function makeBusiness({cash, emp, owner = 'Sam', director = 'Victor'}) {
    const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash} And our employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsors}`);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness({cash: money, emp: employersNames});
