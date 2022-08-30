import signup from '../pages/SignupPage.cy'
import SignupFactory from '../../factories/SignupFactory.cy'
import SignupPageCy from '../pages/SignupPage.cy'
import { it } from 'faker/lib/locales'

describe('Signup', ()=>{
    
   // before(function() {
   //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
   // })

   // beforeEach(function() {
    //    cy.log('Tudo aqui é executado sempre ANTES de CADA os casos de teste')
    //})

    
    //after(function() {
      //  cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    //})

    //afterEach(function() {
      //  cy.log('Tudo aqui é executado sempre DEPOIS de CADA os casos de teste')
    //}) 

    // beforeEach(function() {
       //  cy.fixture('deliver').then((d)=> {
           //  this.deliver = d

          //  })
        // })   // função do cypress para obter dados de teste em outra camada.

    it('User should be deliver', function() {

       var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    
    it.skip('Incorrect Document', function(){

      var deliver = SignupFactory.deliver()

      deliver.cpf = '00100100AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.messageShouldBe('Oops! CPF inválido')   

    })

    
    it.skip('Incorrect email', function(){

      var deliver = SignupFactory.deliver()

      deliver.email = 'user.com.br'

      signup.go()
      signup.fillForm(deliver)
      signup.submit()
      signup.messageShouldBe('Oops! Email com formato inválido.')   

  })
    
  context('Required fields', function () {

      const messages = [
        { field: 'name', output: 'É necessário informar o nome' },
        { field: 'cpf', output: 'É necessário informar o CPF' },
        { field: 'email', output: 'É necessário informar o email' },
        { field: 'postalcode', output: 'É necessário informar o CEP' },
        { field: 'number', output: 'É necessário informar o número do endereço' },
        { field: 'delivery_method', output: 'Selecione o método de entrega' },
        { field: 'cnh', output: 'Adicione uma foto da sua CNH' },

      ]

      before(function(){
        signup.go()
        signup.submit()
      })
  
      messages.forEach(function(msg){
         it(`${msg.field} is required`, function(){
            signup.messageShouldBe(msg.output)
         })
      })
  })


  //it.skipp = pula o cenario.

  //it('Required fields', function(){
     // signup.go()
     // signup.submit()
     // signup.messageShouldBe('É necessário informar o nome')
      //signup.messageShouldBe('É necessário informar o CPF')
     // signup.messageShouldBe('É necessário informar o email')
    //  signup.messageShouldBe('É necessário informar o CEP')
     // signup.messageShouldBe('É necessário informar o número do endereço')
    //  signup.messageShouldBe('Selecione o método de entrega')
    //  signup.messageShouldBe('Adicione uma foto da sua CNH')
 // })

})