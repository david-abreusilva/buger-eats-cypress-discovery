var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
  
        var data = {
            name: `${firstName} ${lastName}` ,
            cpf: cpf.generate(),
            email: "faker.internet.email(firstName)",
            whatsapp:"85999999999",
            address: {
                postalcode: "60743762",
                street: "Avenida Doutor Silas Munguba",
                number: "6380",
                details: "Apt 204 bloco C",
                district: "Passaré",
                city_state: "Fortaleza/CE"
            },
            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"
    
        }

        return data

    }

}