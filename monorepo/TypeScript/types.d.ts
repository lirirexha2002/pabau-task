/* 1. Our company has Interns, establish an interface to describe the Interns
with the attributes: "name", "age", "skills". "skills" attribute can have 
multiple values, like: "React", "HTML", "JS", "TypeScript" etc */

interface Intern {
  name: string;
  age: number;
  skills: Skills;
}

interface Skills {
  React?: boolean;
  HTML?: boolean;
  JS?: boolean;
  TypeScript?: boolean;
}

/* 2. Our company has Juniors, establish an interface to describe the Juniors 
with the attributes: "name", "age", "skills", "date_of_promotion", "domain" 
"domain" needs to be an enum type of values: "Web", "Connect", "Backend" */

enum JuniorDomain {
  Web = "Web",
  Connect = "Conncent",
  Backend = "Backend",
}

interface Junior {
  name: string;
  age: number;
  skills: Skills;
  date_of_promotion: Date;
  domain: JuniorDomain;
}

// const Liria: Junior = {
//     name: 'Liria',
//     age: 21,
//     skills: {
//          TypeScript: true
//      },
//     date_of_promotion: new Date('2024-01-02'),
//     domain: JuniorDomain.Web
// }


/* 3. Now establish an interface to describe our Company, which has 
attributes: "Interns", "Juniors", "Country" */

interface Company {
  Interns: Intern[];
  Juniors: Junior[];
  Country: string;
}

// Export the Company interface
export default Company;
