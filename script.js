$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.evolve-button').click(clickedEvolveButton);

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Growlithe", weight:50, happiness:50, experience:0, evolved:false};
  
    function clickedTreatButton() {
      // imma be honest I dont like using alerts for these notifications
      alert("Your Giga Pet  is pleased.");
      // Increase pet happiness
      pet_info.happiness+=5;
      // Increase pet weight
      pet_info.weight+=5;
      // increase experience a little
      if (pet_info.evolved==false)
        pet_info.experience+=1;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      alert("Your Giga Pet had fun.");
      // Increase pet happiness
      pet_info.happiness+=5;
      // Decrease pet weight
      pet_info.weight-=5;
      // increase experience a moderate amount
      if (pet_info.evolved==false)
        pet_info.experience+=3;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      alert("Your Giga Pet feels strong.");
      // Decrease pet happiness
      pet_info.happiness-=5;
      // Decrease pet weight
      pet_info.weight-=5;
      // increase experience a lot
      if (pet_info.evolved==false)
        pet_info.experience+=5;
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if (pet_info.weight<0)
        pet_info.weight = 0;
      if (pet_info.happiness<0)
        pet_info.happiness = 0;
      if (pet_info.experience>50)
        pet_info.experience = 50;
    }
    
    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.experience').text(pet_info['experience']);
    }
  
    function clickedEvolveButton()  {
      // I wanted to use the ternary operator but I gave up
      if (pet_info.experience>=50)  {
          alert("Your Growlithe successfully evolved into Arcanine!");
        pet_info.experience=0;
        pet_info.evolved=true;
        pet_info.name="Arcanine";
        // having a lot of trouble changing the image src
        if (document.getElementById("pet-image").src == "https://cdn.glitch.com/7a79cafa-8bdc-46a8-bb26-28e4049b3460%2FGrowlithe.gif?v=1604529250091") 
            document.getElementById("pet-image").src = "https://cdn.glitch.com/7a79cafa-8bdc-46a8-bb26-28e4049b3460%2Farcanine.gif?v=1604527503602";
        } else if (pet_info.evolved==false)
          alert("You need at 50 Experience Points to evolve your Giga Pet.");
      else alert("Your Giga Pet is fully evolved.")
      checkAndUpdatePetInfoInHtml();
    }