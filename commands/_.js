/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(!request) return;

if(typeof request == 'string'){
  try {
    request = JSON.parse(request)
  } catch (e) { return; }
}

if (request.pre_checkout_query) {
  //check for pre checkout query update and answer it to let the user complete payment

  Api.answerPreCheckoutQuery({
    pre_checkout_query_id: request.pre_checkout_query.id,
    ok: true
  })


} else if (request.successful_payment) {
  //check for a received payment and respond accordingly 

  Bot.sendMessage(
    `Donation of ⭐️${request.successful_payment.total_amount} is successful`
  )

}
