var builder = require('botbuilder');

module.exports = [
    function(session,results){
        session.send('Okay %s, I see you have a question',session.userData.name);
        session.delay(3000);
        session.send('%s would be able to answer that...',session.userData.poc);
        builder.Prompts.text(session,'Please let me know when your done');
        
    }
]