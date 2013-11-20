Accounts.ui.config
({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
}); 


Template.tracker.workingdata = function(){
  return Workingdata.find({}, {sort: {date: -1}});
}

Template.tracker.myjob = function(){

  return Workingdata.find({user: Meteor.userId()}, {sort: {date: -1}});
}

Template.input.events = {
  'submit #myform' : function (event) {
     event.preventDefault();
      if (Meteor.user()) {
        var $user = Meteor.userId();
        var $date = $('#date');
        var $start = $('#starttime');
        var $end = $('#endtime');
        var $description= $('#description');
        
        }
        Workingdata.insert({
        user: $user,
        date: $date.val(),
        starttime: $start.val(),
        endtime: $end.val(),
        description: $description.val(),
      });           
     }
  }


