setTimeout(function(){
  console.log("about to initialize OneSignal"); 
  //window.addEventListener('load', function() {
    window._oneSignalInitOptions.promptOptions = {
      slidedown: {
        prompts: [
          {
            type: "category",
            autoPrompt: true,
            text: {
              /* actionMessage limited to 90 characters */
              actionMessage: "We'd like to send you notifications for the latest news and updates.",
              /* acceptButton limited to 15 characters */
              acceptButtonText: "Allow",
              /* cancelButton limited to 15 characters */
              cancelButtonText: "Cancel",
              /* CATEGORY SLIDEDOWN SPECIFIC TEXT */
              negativeUpdateButton:"Cancel",
              positiveUpdateButton:"Save Preferences",
              updateMessage: "Update your push notification subscription preferences.",
            },
            delay: {
              timeDelay: 1,//seconds to wait for display
              pageViews: 1,//# pageviews for prompt to display
            },
            categories: [
              {
                tag: "biology",
                label: "Biology",
              },
              {
                tag: "chemistry",
                label: "Chemistry",
              },
              {
                tag: "earth",
                label: "Earth",
              },
              {
                tag: "health",
                label: "Health",
              },
              {
                tag: "physics",
                label: "Physics",
              },
              {
                tag: "science",
                label: "Science",
              },
              {
                tag: "space",
                label: "Space",
              },
              {
                tag: "technology",
                label: "Technology",
              }
            ]
          }
        ]
      }
    }
    window.OneSignal = window.OneSignal || [];
    window.OneSignal.push(function() {
      window.OneSignal.init(window._oneSignalInitOptions);
    });
 // });
}, 3000);
