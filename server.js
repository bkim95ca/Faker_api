const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const PORT = 1338;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = []
const companies = []

const createUser = () => {
    const fakeUser = {
        password: faker.internet.password(),
        email: "$" + faker.internet.email(),
        phoneNumber: faker.commerce.department(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),  
        id: faker.datatype.uuid()
    };
    return fakeUser;
};

const createCompany = () => {
    const fakeCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return fakeCompany;
};

app.get("/api/users/new", (req, res) => {
    console.log(createUser());
    res.json(createUser());
})

app.get("/api/companies/new", (req, res) => {
    console.log(createCompany());
    res.json(createCompany());
})

app.get("/api/user/company", (req,res) => {
    console.log(createUser(), createCompany())
    res.json({companies: createCompany(), users: createUser()})
});

app.listen(PORT, () => console.log(`>> SERVER is up on port ${PORT} and is listening for REQuests to RESpond to`))
