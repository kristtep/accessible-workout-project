const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');

var checkboxes = document.querySelectorAll('.arms,.legs,.abs');
var Start = false;
var StartRest = false;
var array = document.getElementsByTagName("input");
var arrayCount = 0;
var i = 1;
var Pause = false;
var elem = document.getElementById('countdown');
var elemBar = document.getElementById("myBar");
var modal = document.getElementById("myModal");
var btn = document.getElementById("startBtn");
var closeWindow = document.getElementsByClassName("close")[0];

var exercises = [
  {
    name: "jumping-jack",
    header: "Jumping jacks",
    alt: "Person doing jumping jacks",
    bodyPart: "Quadriceps, Glutes",
    description: `<h3>Step 1</h3>
    Stand upright with your legs together, arms at your sides.

    <h3>Step 2</h3>
    Bend your knees slightly, and jump into the air.

    <h3>Step 3</h3>
    As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head.

    <h3>Step 4</h3>
    Jump back to starting position.

    <h3>Step 5</h3>
    Repeat.`
  },
  {
    name: "wall-sit",
    header: "Wall Sit",
    alt: "Person sitting against a wall",
    bodyPart: "Quadriceps, Glutes, Calves",
    description: `<h3>Step 1</h3>
    Start with your back against a wall with your feet shoulder width and about 2 feet from the wall.

    <h3>Step 2</h3>
    Engage your abdominal muscles and slowly slide your back down the wall until your thighs are parallel to the ground.

    <h3>Step 3</h3>
    Adjust your feet so your knees are directly above your ankles (rather than over your toes).

    <h3>Step 4</h3>
    Keep your back flat against the wall.

    <h3>Step 5</h3>
    Hold the position for 20 to 60 seconds.

    <h3>Step 6</h3>
    Slide slowly back up the wall to a standing position.

    <h3>Step 7</h3>
    Rest 30 seconds and repeat the exercise three times.
    Increase your hold time by five seconds as you increase your strength.`
  },
  {
    name: "push-up",
    header: "Push ups",
    alt: "Person doing push ups",
    bodyPart: "Arms, Chest, Shoulders",
    description: `<h3>Step 1</h3>
    Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you.

    <h3>Step 2</h3>
    Slowly bend forward to place your palms flat on the mat, positioning your hands shoulder-width apart with your fingers facing forward or turned slightly inward.
    Slowly shift your weight forward until your shoulders are positioned directly over your hands.
    Reposition your hands as needed to allow full extension of your body without any bend at the hips or knees.
    Stiffen your torso by contracting your core/abdominal muscles ("bracing"), your glute and quadriceps muscles and align your head with your spine.
    Place your feet together with your ankles dorsiflexed (toes pointed towards your shins).

    <h3>Step 3</h3>
    Downward Phase: Slowly lower your body towards the floor while maintaining a rigid torso and head aligned with your spine.
    Do not allow your low back to sag or your hips to hike upwards during this downward phase.
    Continue to lower yourself until your chest or chin touch the mat/floor.
    Allow your elbows to flare outwards during the lowering phase.

    <h3>Step 4</h3>
    Upward Phase: Press upwards through your arms while maintaining a rigid torso and head aligned with your spine.
    For extra strength think about pushing the floor away from you.
    Do not allow your low back to sag or your hips to hike upwards.
    Continue pressing until the arms are fully extended at the elbows.

    <h3>Step 5</h3>
    An alternative position is to turn your hands to face forwards and keep your your elbows close to your sides during the downward phase.
    This shifts the emphasis from the chest muscles onto the triceps and may reduce stresses in the shoulder joint.
    Pushing through the heel and outside surface of your palm provides greater force in your press and stability to your shoulders.`
  },
  {
    name: "crunch",
    header: "Crunches",
    alt: "Person doing crunches",
    bodyPart: "Abs",
    description: `<h3>Step 1</h3>
    Starting Position: Lie in a supine (on your back) position on a mat with your knees bent, feet flat on the floor and heels 12 - 18" from your tailbone.

    <h3>Step 2</h3>
    Place your hands behind your head, squeezing your scapulae (shoulder blades) together and pulling your elbows back without arching your low back.
    This elbow position should be maintained throughout the exercise.
    Align your head with your spine, but allow it to move into slight flexion (moving the chin towards the chest) during the upward phase of the exercise.

    <h3>Step 3</h3>
    Upward Phase: Exhale, contract your abdominal and core muscles and flex your chin slightly towards your chest while slowly curling your torso towards your thighs.
    The movement should focus on pulling your rib cage towards your pelvis (the neck stays relaxed while the chin is tucked towards the neck).
    Your feet, tailbone and lower back should remain in contact with the mat at all times. Continue curling up until your upper back is lifted off the mat. Hold this position briefly.

    <h3>Step 4</h3>
    Downward Phase: Gently inhale and slowly uncurl (lower) your torso back towards the mat in a controlled fashion keeping your feet, tailbone and low back in contact with the mat.
    Proper form is important for this exercise to prevent excessive stress on your low back.
    Individuals usually perform this movement too rapidly and recruit the hip flexors to assist with the upward phase.
    This technique tilts the pelvis anteriorly, increasing the stress on the low back and should be avoided.
    The abdominals connect the rib cage to the pelvis so the movement should focus on bringing these two body parts closer together while keeping the neck and shoulders relaxed.`
  },
  {
    name: "step-up",
    header: "Step ups",
    alt: "Person doing step-ups",
    bodyPart: "Butt/Hips, Legs - Thighs",
    description: `<h3>Step 1</h3>
    Starting Position: Stand with your feet parallel about hip width apart while holding dumbbells in your hands with palms facing inwards.
    Depress and retract your scapulae (pull shoulders down and back).
    Attempt to avoid shrugging your shoulder upwards.

    <h3>Step 2</h3>
    Upward Phase: Slowly step to place your right foot on a platform, placing your foot firmly on the deck while keeping your torso upright and aligning your knee over your second toe.
    Push off with the trailing (left) leg to raise your body onto the platform placing that foot alongside your leading (right) foot.
    During this transition, your torso and your right tibia (shinbone) will move slightly forward past vertical, but try to avoid excessive forward movement.

    <h3>Step 3</h3>
    Downward Phase: Slowly load the weight of your body into your leading (right) foot, step backwards to place the trailing (left) foot on the floor in its starting position.
    Allow your body to lean slightly forward during the step-down movement. Load your weight into your trailing (left) foot and step off the platform with your leading (right) foot, returning to your starting position.
    Repeat for the opposite side.

    <h3>Step 4</h3>
    An exercise progression is to step-up onto one leg only and remain standing on a single-leg before stepping back down.
    Single-leg stepping is a functional movement we perform daily.
    Always monitor your foot, ankle and knee position.
    Avoid movement of your foot and ankle (collapsing in or out), and always attempt to keep your knee aligned over your second toe.`
  },
  {
    name: "squat",
    header: "Squats",
    alt: "Person doing squats",
    bodyPart: "Abs, Butt/Hips, Legs - Calves and Shins, Legs - Thighs",
    description: `<h3>Step 1</h3>
    Starting Position: Begin standing with your feet slightly wider than hip-width, with the toes turned slightly outwards with your hands by your sides so the palms facing inwards.
    Depress and retract your scapulae (pull the shoulders down and back).

    <h3>Step 2</h3>
    Stiffen your core and abdominal muscles (“bracing”) to stabilize your spine.
    Hold your chest up and out, tilt your head slightly up, shift your weight back into your heels while pushing your hips towards the wall behind you.

    <h3>Step 3</h3>
    Downward Phase: Start the downward phase by first shifting your hips backwards then downwards to create a hinge-like movement at your hips and knees simultaneously.
    As you lower your hips the knees will then start to shift forward slowly, but try to control the amount of forward translation (movement) of the tibia (shinbone).
    Maintain tension in the core muscles (continue bracing) and attempt to keep your back flat.

    <h3>Step 4</h3>
    Continue to lower yourself until your thighs are parallel or almost parallel with the floor, until your heels begin to lift off the floor, or until your torso begins to round or flex forward.
    Monitor your feet, ankles and knees, ensuring that the feet don't move, the ankles do not collapse in or out and the knees remain aligned over the second toe.

    <h3>Step 5</h3>
    From the Lowered Position: the knees should continue to remain aligned over the second toe and body weight should be evenly distributed between the balls and heels of the feet.
    From the side, the position of the tibia (shinbone) and torso should be parallel with each other and the low back should appear flat or showing the beginning of some rounding.

    <h3>Step 6</h3>
    Upward Phase: While maintaining your back, chest and head-up position, exhale and extend the hips and knees by pushing your feet into the floor through your heels. The hips and torso need to rise together while keeping the heels flat on the floor and knees aligned over the second toe.
    Continue extending until you reach your starting position.
    Think about inhaling on the way down and exhaling while exerting on the way back to the initial standing position.
    Hip Hinge, Dumbell Front Squat, Barbell High Back Squat, Dumbbell Deadlift, Barbell Deadlift`
  },
  {
    name: "triceps-dip",
    header: "Tricep dips",
    alt: "Person doing triceps-dips",
    bodyPart: "Triceps",
    description: `<h5>Find a stable chair, bench, or step.</h5>

    <h3>Step 1</h3>
    Sit on the edge of the chair and grip the edge next to your hips.
    Your fingers should be pointed at your feet.
    Your legs are extended and your feet should be about hip-width apart with the heels touching the ground.
    Look straight ahead with your chin up.

    <h3>Step 2</h3>
    Press into your palms to lift your body and slide forward just far enough that your behind clears the edge of the chair.

    <h3>Step 3</h3>
    Lower yourself until your elbows are bent between 45 and 90 degrees.

    <h3>Step 4</h3>
    Slowly push yourself back up to the start position and repeat.
    Control the movement throughout the range of motion.

    <h3>Step 5</h3>
    Begin with 3 sets of 10 repetitions and increase your sets and reps over several weeks as you build muscle and strength in your triceps.`
  },
  {
    name: "plank",
    header: "Plank",
    alt: "Person doing plank",
    bodyPart: "Abs, Back",
    description: `<h3>Step 1</h3>
    Starting Position: Lie prone (on your stomach) on an exercise mat or floor with your elbows close to your sides and directly under your shoulders, palms down and hands facing forward.
    Contract your quadriceps to extend your legs and dorsiflex your ankles (pull toes towards your shins).
    Contract your core and abdominal muscles to stiffen your torso.

    <h3>Step 2</h3>
    Upward Phase. Slowly lift your entire torso off the floor or mat, maintaining a stiff torso and legs.
    Avoid any arching (sagging) in your low back, hiking (upwards) in your hips or bending in the knees.
    Avoid shrugging your shoulder and keep your shoulders positioned directly over your elbows with your palms facing down.
    Continue to breath while holding this position for a specified time (5+ seconds).

    <h3>Step 3</h3>
    Downward Phase: While maintaining a stiff torso and extended knees, gently lower your body back towards the mat or floor before relaxing.
    If you experience any pain in the low back with this movement, stop the exercise immediately and consult with your doctor.`
  },
  {
    name: "running",
    header: "Running",
    alt: "Person running",
    bodyPart: "Legs",
    description: `<h3>Step 1</h3>
    Stand straight with your feet shoulder width apart and face forward, opening up your chest.

    <h3>Step 2</h3>
    Start pulling your knees up, and slowly land on the balls of your feet.

    <h3>Step 3</h3>
    Repeat until set is complete.`
  },
  {
    name: "lunge",
    header: "Lunges",
    alt: "Person doing lunges",
    bodyPart: "Abs, Butt/Hips, Legs - Thighs",
    description: `<h3>Step 1</h3>
    Starting Position: Stand with your feet together.
    Depress and retract your scapulae (pull your shoulders down and back) without arching your low back, and "brace" (engage your abdominal/core muscles) to stiffen your spine.

    <h3>Step 2</h3>
    In preparation to step forward, slowly lift one foot off the floor, stabilizing your body on the stance (supporting) leg.
    Avoid any sideways tilting or swaying in your upper body and try not to move the stance (supporting) foot.
    Hold this position momentarily before stepping forward.
    The raised (swing) leg should initiate contact with a heel strike first, slowly transferring your body weight into the leading (forward) foot placed firmly on the floor.
    As you load into this leg, avoid any sideways tilting or swaying in your upper body and try not to move the stance (supporting) foot.

    <h3>Step 3</h3>
    As you lunge forward, focus more on dropping your hips towards the floor rather than driving your hips forward.
    This will help control the amount of forward movement of your shinbone (forward tibial translation) over your foot.
    Continue lowering your body to a comfortable position or until your front thigh becomes parallel with the floor and your tibia (shinbone) is in a slight forward lean.
    While lunging, simultaneously, bend forward at your hips, maintaining a flat back.

    <h3>Step 4</h3>
    Firmly push off with your front leg, activating both your quads and glutes (thighs and butt muscles) to return to your upright, starting position.
    We suggest you first learn how to perform single leg-stands on the ground before performing this forward lunge.
    Once you master the forward lunge, you can progress to doing a lunge using arm drivers and mult-directional glute activation lunges.`
  },
  {
    name: "push-up-rotate",
    header: "Push up rotators",
    alt: "Person doing push up rotators",
    bodyPart: "Arms, Chest, Abs, Shoulders",
    description: `<h3>Step 1</h3>
    Start in a plank position, with your shoulders over your wrists and legs out behind you with your feet hip distance apart.
    Pull your navel in and keep your back straight.

    <h3>Step 2</h3>
    As you lower and exhale, bend your elbows outward to the sides.
    Hold at the bottom for one breath.

    <h3>Step 3</h3>
    Raise back up to top push-up position.
    As you reach the top, keep moving in a fluid motion to side plank position: release your right arm and raise it to the ceiling, keeping your body in a long diagonal line.
    Hold for one breath, then move back into plank position.

    <h3>Step 4</h3>
    Repeat the push-up, twisting the opposite direction bringing your left arm toward the ceiling.
    Return to plank position to complete one rep.`
  },
  {
    name: "side-plank",
    header: "Side plank",
    alt: "Person doing side plank",
    bodyPart: "Abs, Butt/Hips",
    description: `<h3>Step 1</h3>
    Starting Position: Lie on your right side on an exercise mat with extended legs, placing your left leg directly over your right leg and and stacking your feet one on top of the other.
    Place your right elbow directly under your shoulder, align your head with your spine and keep your hips and right knee in contact with the exercise mat.

    <h3>Step 2</h3>
    Upward Phase: Exhale, gently contract your abdominal / core muscles to stiffen your spine and lift your hips and knees off the mat, keeping contact with the side of your right foot and keep head aligned with your spine.
    Keep your right elbow positioned directly under your shoulder.

    <h3>Step 3</h3>
    Lowering Phase: Inhale and gently return yourself to your starting position. Alternate sides and repeat.

    <h3>Step 4</h3>
    Exercise Variation: You can increase the intensity of this exercise by (1) increasing the length of time you are in the raised position, (2) raising the upper leg off the lower leg or (3) raising the lower leg off the floor and maintaining contact with your elbow and the foot of the upper leg only.
    When raising the upper leg off the lower leg, there is no need to raise it to a level beyond parallel with the floor.`
  }
];

//Searching through all checkboxes and setting the right value
function setExercise() {

  if (document.getElementById('selectAll').checked == true) {
    for (var ii = 0; ii < array.length; ii++) {
      if (array[ii].type == "checkbox") {
        if (array[ii].className.includes('back') || array[ii].className.includes('chest') || array[ii].className.includes('legs') || array[ii].className.includes('arms') || array[ii].className.includes('abs')) {
          array[ii].checked = true;
        }
      }
    }
  } else {
    for (var ii = 0; ii < array.length; ii++) {
      if (array[ii].type == "checkbox") {
        if (array[ii].className.includes('back') || array[ii].className.includes('chest') || array[ii].className.includes('legs') || array[ii].className.includes('arms') || array[ii].className.includes('abs')) {
          array[ii].checked = false;
        }
      }
    }
  }
  if (document.getElementById('jump').checked == true) {
    for (var ii = 0; ii < array.length; ii++) {
      if (array[ii].type == "checkbox") {
        if (array[ii].className.includes('jump')) {
          array[ii].checked = false;
        }
      }
    }
  }
  if (document.getElementById('chest').checked == true) {
    for (var ii = 0; ii < array.length; ii++) {
      if (array[ii].type == "checkbox") {
        if (array[ii].className.includes('chest')) {
          array[ii].checked = false;
        }
      }
    }
  }
  if (document.getElementById('back').checked == true) {
    for (var ii = 0; ii < array.length; ii++) {
      if (array[ii].type == "checkbox") {
        if (array[ii].className.includes('back')) {
          array[ii].checked = false;
        }
      }
    }
  }
  if (document.getElementById('arms').checked == true) {
    for (var ii = 0; ii < array.length; ii++) {
      if (array[ii].type == "checkbox") {
        if (array[ii].className.includes('arms')) {
          array[ii].checked = false;
        }
      }
    }
  }
  if (document.getElementById('legs').checked == true) {
    for (var ii = 0; ii < array.length; ii++) {

      if (array[ii].type == "checkbox") {
        if (array[ii].className.includes('legs')) {
          array[ii].checked = false;
        }
      }
    }
  }
  if (document.getElementById('abs').checked == true) {
    for (var ii = 0; ii < array.length; ii++) {

      if (array[ii].type == "checkbox") {
        if (array[ii].className.includes('abs')) {
          array[ii].checked = false;
        }
      }
    }
  }
}

btn.onclick = function () {
  checkExercises();
}

closeWindow.onclick = function () {
  modal.style.display = "none";
  location.reload();//reloading page to cancel timer etc. if the close modal button is clicked
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();//reloading page to cancel timer etc. if user clicks outside the modal window
  }
}

//creating timer for workout to update every second (1000 miliseconds)
var timerId = setInterval(function countdown() {
  if (Start) {
    if (window.timeLeft == -1) {
      Start = false;
      var portions = (100 / window.length) * i;
      elemBar.style.width = portions + '%';
      i++;
      window.restLeft = ((window.workoutLength / 7) * 60 / window.length).toFixed();
      StartRest = true;
      document.getElementById('exercise').innerHTML = `<h3>Rest now</h3>`;
      document.getElementById('bodyPart').innerHTML = "";
      document.getElementById('desc').innerHTML = "";
      playRest();
      rest();
    } else if (!Pause) {
      elem.innerHTML = window.timeLeft + ' seconds of workout remaining';
      window.timeLeft--;
    }
  }
}, 1000);

//creating timer for rest to upate every second
var timerRest = setInterval(function rest() {
  if (StartRest) {
    if (window.restLeft == -1) {
      StartRest = false;
      sessions();
    } else if (!Pause) {
      elem.innerHTML = window.restLeft + ' seconds of rest remaining';
      window.restLeft--;
    }
  }
}, 1000);

//function to print the respective workouts content to the modal
function sessions() {
  startButton.disabled = true;
  window.restLeft = ((window.workoutLength / 7) * 60 / window.length).toFixed();//rest time in seconds is 1/7th so we divide on 7
  window.timeLeft = ((window.workoutLength * 0.8571428571428571) * 60 / window.length).toFixed();//workout time in seconds is 6/7th converted to a decimal number

  if (window.length + 1 > i) {
    playSound(window.workout[arrayCount]);

    print();

    arrayCount++;
    start();
  } else if (window.length + 1 == i) {
    clearTimeout(timerId);
    clearTimeout(timerRest);
    finish();
  }
}

//function to print message after workout ended
function finish() {
  elem.innerHTML = `<h3>Workout finished!</h3>`;
}

//function to set the respective amount of seconds and setting start variable to true. also starting countdown
function start() {
  window.timeLeft = ((window.workoutLength * 0.8571428571428571) * 60 / window.length).toFixed();
  Start = true;
  countdown();
}

//pause function to change button value and variable value
function pause() {
  if (!Pause) {
    document.getElementById('pause').innerHTML = 'Resume';
    Pause = true;
  } else {
    document.getElementById('pause').innerHTML = 'Pause';
    Pause = false;
  }
}

//print function to print the exercise's info
function print() {
  for (var n of exercises) {
    if (n['name'] == window.workout[arrayCount]) {
      document.getElementById('stepOfStep').innerHTML = 'Step ' + i + ' of ' + window.length;
      document.getElementById('exercise').innerHTML = `<img src = "Assets/pictures/` + n['name'] + `.png" tabindex="0" alt="` + n['alt'] + `">`;
      document.getElementById('printHeader').innerHTML = `<h1>` + n['header'] + `</h1>`;
      document.getElementById('bodyPart').innerHTML = `<h4>Bodypart:</h4>` + n['bodyPart'];
      document.getElementById('desc').innerHTML = `<p>` + n['description'] + `</p>`;
    }
  }
}

//function to check if any exercises are checked and which ones  
function checkExercises() {
  window.workout = [];

  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      workout.push(checkbox.getAttribute('id'));
    }
  }
  window.length = workout.length;

  window.workoutLength = document.getElementById('length').value;
  if (length > 0) {
    modal.style.display = "block";
  } else {
    window.alert('Please select exercises.');
  }
}

//function to play rest audio
function playRest() {
  var y = new Audio("Assets/sound/rest.mp3");
  y.play();
}

//function to play exercise audio
function playSound(sound) {
  var x = new Audio("Assets/sound/" + sound + ".mp3");
  x.play();
}

//function to warn user before reseting all progress
function warning() {
  var c = confirm('Are you sure you want to reset? All progress will be lost.');
  if (c == true) {
    location.reload();
  }
}