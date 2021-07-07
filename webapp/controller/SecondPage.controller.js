sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("demoRoutingapp.controller.SecondPage", {
			
	    onNavButtonPressed: function(oEvent){
	    	
	    	var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("MainPage", {}, true /*no history*/);
			}
	    },
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demoRoutingapp.view.SecondPage
		 */
		onInit: function() {
		  var oRounter = this.getOwnerComponent().getRouter();
		  var oRoute = oRounter.getRoute("SeconPage");
		  
	//	  var oPath = "/Customers('ALFKI')";
	//	  this.getView().byId("__table0").bindElement(oPath);
		  oRoute.attachMatched(this._showorder , this);
		},

		_showorder: function(oEvent){
	//	   var oParam =	oEvent.getParameters("arguments");
	// another way of getting the values from argumets
	   // oEvent.getParameter("arguments").cid
		   var oParam =	oEvent.getParameters().arguments.cid;
		   var oPath = "/Customers('" + oParam + "')";
		  this.getView().byId("__table0").bindElement(oPath);
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demoRoutingapp.view.SecondPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demoRoutingapp.view.SecondPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demoRoutingapp.view.SecondPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});