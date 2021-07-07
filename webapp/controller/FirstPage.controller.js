sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("demoRoutingapp.controller.FirstPage", {
		
		OnPress: function(oEvent){
			// find the selected context
			var olist = oEvent.getSource();
			// olist is type of listbase item - which has the method
			var oCustomerid = olist.getBindingContext().getProperty("CustomerID");
			
			MessageToast.show("Button Pressed " + "/ selected customer : " + oCustomerid );
	        var oRouter =	this.getOwnerComponent().getRouter();
	        oRouter.navTo("SeconPage",{ cid: oCustomerid});
	//	 this.getRouter().getTargets().display("SeconPage");
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demoRoutingapp.view.FirstPage
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demoRoutingapp.view.FirstPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demoRoutingapp.view.FirstPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demoRoutingapp.view.FirstPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});