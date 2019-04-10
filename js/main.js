let weekDays = document.getElementById("weeks");

let taskstructure = [
    {
        time: `8:00 Am`,
        thetask: `Pickup kids at school`
    },
    {
        time: `11:30 Am`,
        thetask: `Meeting`,
    },
    {
        time: `4:30 Pm`,
        thetask: `Pick up Anna`,
    }
];
console.log(taskstructure)

let taskstructureTuesday = [
    {

        time: `4:00 Pm`,
        thetask: `Gym Day`
    },
    {
        time: `5:30 Pm`,
        thetask: `Car Maintenance`,
    },

];
console.log(taskstructureTuesday);

let taskstructureWednesday = [
    {
        time: `8:00 Am`,
        thetask: `Company Meeting`,
    },
    {
        time: `10:00 Am`,
        thetask: `Doctor's Appointment`
    },
    {
        time: `7:00 Pm`,
        thetask: `Family Reunion`,
    },

];
console.log(taskstructureWednesday)

let taskstructureThursday = [
    {
        time: `1:00 Pm`,
        thetask: `Grandma's Birthday`,
    },
    {
        time: `7:00 Pm`,
        thetask: `Walk the dog`,
    },
    {
        time: `9:00 Pm`,
        thetask: `Dinner with boss`,

    },
];
console.log(taskstructureThursday)

let taskstructureFriday = [
    {
        time: `11:00 Pm`,
        thetask: `Projects due today`,
    },
    {
        time: `3:00 Pm`,
        thetask: `Pick up kids from school`,
    },
];
console.log(taskstructureFriday)

let taskstructureSaturday = [
    {
        time: `4:30 Pm`,
        thetask: `Play Ball`,
    },
    {
        time: `7:30 Pm`,
        thetask: `Dinner with wife`
    },
];
console.log(taskstructureSaturday)

let taskstructureSunday = [
    {
        time: `4:00 Pm`,
        thetask: `Church with Family`,
    },
    {
        time: `6:00 Pm`,
        thetask: `Groceries`,
    }
];
console.log(taskstructureSunday)



const addTask = () => {
    //Monday
    let Monday = [];
    for (var i = taskstructure.length - 1; i >= 0; i--) {
        const task = '<li class="tsk"><div class="time">' + taskstructure[i].time + '</div> <div class="task">' + taskstructure[i].thetask + '</div></li>';
        Monday.push(task)
    }
    $('.Monday').html(Monday);

    let Tuesday = [];
    for (var i = taskstructureTuesday.length - 1; i >= 0; i--) {
        const task = '<li class="tsk"><div class="time">' + taskstructureTuesday[i].time + '</div> <div class="task">' + taskstructureTuesday[i].thetask + '</div></li>';
        Tuesday.push(task)
    }
    $('.Tuesday').html(Tuesday);

    let Wednesday = [];
    for (var i = taskstructureWednesday.length - 1; i >= 0; i--) {
        const task = '<li class="tsk"><div class="time">' + taskstructureWednesday[i].time + '</div> <div class="task">' + taskstructureWednesday[i].thetask + '</div></li>';
        Wednesday.push(task)
    }
    $('.Wednesday').html(Wednesday);

    let Thursday = [];
    for (var i = taskstructureThursday.length - 1; i >= 0; i--) {
        const task = '<li class="tsk"><div class="time">' + taskstructureThursday[i].time + '</div> <div class="task">' + taskstructureThursday[i].thetask + '</div></li>';
        Thursday.push(task)
    }
    $('.Thursday').html(Thursday);

    let Friday = [];
    for (var i = taskstructureFriday.length - 1; i >= 0; i--) {
        const task = '<li class="tsk"><div class="time">' + taskstructureFriday[i].time + '</div> <div class="task">' + taskstructureFriday[i].thetask + '</div></li>';
        Friday.push(task)
    }
    $('.Friday').html(Friday);

    let Saturday = [];
    for (var i = taskstructureSaturday.length - 1; i >= 0; i--) {
        const task = '<li class="tsk"><div class="time">' + taskstructureSaturday[i].time + '</div> <div class="task">' + taskstructureSaturday[i].thetask + '</div></li>';
        Saturday.push(task)
    }
    $('.Saturday').html(Saturday);

    let Sunday = [];
    for (var i = taskstructureSunday.length - 1; i >= 0; i--) {
        const task = '<li class="tsk"><div class="time">' + taskstructureSunday[i].time + '</div> <div class="task">' + taskstructureSunday[i].thetask + '</div></li>';
        Sunday.push(task)
    }
    $('.Sunday').html(Sunday);


};

// let htmlOutput = taskstructureTuesday.map(dateTuesday => `<p>${dateTuesday.time}  ${dateTuesday.thetask}</p>`).join(" ");

// document.getElementById('cTask1').innerHTML = htmlOutput;
// console.log(allTask);

addTask();
//Js
// document.getElementById('alltasks');
//jQuery
// $('#alltasks');

$('body').on('click', '.tsk', function () {
    $(this).toggleClass("completed");
});

$('body').on('click', '.addTask', function () {
    const taskTime = $('.inputTaskTime').val();
    const taskName = $('.inputTaskName').val();

    if (weekDays.value === "Monday") {
        taskstructure.push({
            time: taskTime,
            thetask: taskName,
        });
    } else if (weekDays.value === "Tuesday") {
        taskstructureTuesday.push({
            time: taskTime,
            thetask: taskName,
        });
    } else if (weekDays.value === "Wednesday") {
        taskstructureWednesday.push({
            time: taskTime,
            thetask: taskName,
        });
    } else if (weekDays.value === "Thursday") {
        taskstructureThursday.push({
            time: taskTime,
            thetask: taskName,
        });
    } else if (weekDays.value === "Friday") {
        taskstructureFriday.push({
            time: taskTime,
            thetask: taskName,
        });
    } else if (weekDays.value === "Saturday") {
        taskstructureSaturday.push({
            time: taskTime,
            thetask: taskName,
        });
    } else if (weekDays.value === "Sunday") {
        taskstructureSunday.push({
            time: taskTime,
            thetask: taskName,
        });
    }

    addTask();

});
