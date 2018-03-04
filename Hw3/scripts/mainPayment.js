(function(window) {
  "use strict";
  var FORM_SELECTOR = "[payment-order='form']";
  var RESPONSE_SELECTOR = "[payment-response='person']";
  var App = window.App;
  var Payment = App.Payment;
  var Response = App.Response;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  // var Validation = App.Validation;
  var myPayment = new Payment(new DataStore());
  window.myPayment = myPayment;
  var response = new Response(RESPONSE_SELECTOR);
  var formHandler = new FormHandler(FORM_SELECTOR);
  var $ = window.jQuery;

  formHandler.addSubmitHandler(function(data) {
    myPayment.createPayment.call(myPayment, data);
    response.addPayment.call(response, data);
    $("#payment-response").modal();
  });

  // formHandler.addInputHandler(Validation.usermail);

})(window);