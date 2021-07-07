# sapUI5Tablenavigation
North wind Table navigation Project

Important Points to develop the application

The application has two views. So need to Router to navigate between one view to Another One

Router Configuration done in Manifest.json file. 
  Important parameter to note while configure the Rounter
   "  View Path " 
   Control Aggressgation : "pages" --> p should be small letter
   
   Since you have two Routes, you can have only one route as default rounte / Pattern, so the Another one should have pattern
   in Manifest file, we need to add the below parameter on Router config area
    rounterclass : "sap.m.routing.Router",
   
 Second Step
  
     Rounter should be initialized on the component.JS file
     
     	code : this.getRouter().initialize();
      
 Thirs Step
    
     once the Rounter is initialize and configuration on manifest also done
     we can call the method to navigate from one view to another view like below
     so the navigation should be done based on the User event
     
     this.getOwnerComponent().getRouter().navTo("Routername")
     
     or
     
     var oRouter =	this.getOwnerComponent().getRouter();
	   oRouter.navTo("SeconPage");
     
     
      
    
      
   
   


