// MTobler and CSE471 Team 4: Quick and Dirty Stopwatch Interactive Mockup


document.addEventListener(
   'DOMContentLoaded',
   () => {

      var interval = null;
      var timer = 1;

      function timerHandlerValue() {      
         // I'm sure there's an easier math way to do this.
         displaySeconds = Math.floor(timer / 100); 
         displayMilisecs = timer - (displaySeconds * 100);
         document.getElementById('timer').innerHTML = displaySeconds + ":" + displayMilisecs;
         timer++;
      }

      document.getElementById('start')
         .addEventListener(
            'click',
            () => {
               clearInterval(interval);
               interval = setInterval(timerHandlerValue, 10);
            },
            false
         );

      document.getElementById('stop')
         .addEventListener(
            'click',
            () => {
               clearInterval(interval);
            },
            false
         );

      document.getElementById('reset')
         .addEventListener(
            'click',
            () => {
               timer = 0;
               timerHandlerValue();
            },
            false
         );
   }
);