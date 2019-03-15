var taskstructure = [
  {

    time: `8:00 Am`,
    thetask: `Pickup kids at school`
  },
  {
    time: `11:30 Am`,
    thetask:`Meeting`,
  },
  {
    time: `4:30 Pm`,
    thetask: `Pick up Anna`,
  }
];

// var taskstructureTuesday = [
//   {

//     time: `9:00 Am`,
//     thetask: `Pickup kids at school`
//   },
//   {
//     time: `11:30 Am`,
//     thetask:`Meeting Tuesday`,
//   },
//   {
//     time: `4:30 Pm`,
//     thetask: `Pick up Anna`,
//   }
// ];
 console.log(taskstructure);

// console.log(taskstructureTuesday);


var addTask = function() {
  var allTask = [];
   for (var i = taskstructure.length - 1; i >= 0; i--) {
      var task = '<li class="tsk"><div class="time">'+taskstructure[i].time+'</div> <div class="task">'+ taskstructure[i].thetask+'</div></li>';
      allTask.push(task)
    }

    //document.getElementsByClassName('.Daytask1').innerHTML(allTask)
    $('.Daytask1').html(allTask);
};

// let htmlOutput = taskstructureTuesday.map(dateTuesday => `<p>${dateTuesday.time}  ${dateTuesday.thetask}</p>`).join(" ");

// document.getElementById('cTask1').innerHTML = htmlOutput;
// console.log(allTask);

addTask();
//Js
// document.getElementById('alltasks');
//jQuery
// $('#alltasks');

$('body').on('click', '.tsk', function() {
   $(this).toggleClass("completed");
});

$('body').on('click', '.addTask', function() {
    var taskTime = $('.inputTaskTime').val();
    var taskName = $('.inputTaskName').val();

    taskstructure.push({
        time: taskTime,
        thetask: taskName,
    });

    addTask();

});
