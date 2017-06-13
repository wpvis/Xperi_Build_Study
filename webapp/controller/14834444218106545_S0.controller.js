sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, History) {
    "use strict";

    return BaseController.extend("generated.app.controller.14834444218106545_S0", {
    	handleRouteMatched: function (oEvent) {
		var oParams = {};
		
		if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
		    var oModel = this.getView ? this.getView().getModel() : null;
		    if (oModel) {
		        oModel.setRefreshAfterChange(true);
		
		        if (oModel.hasPendingChanges()) {
		            oModel.resetChanges();
		        }
		    }
		
		    this.sContext = oEvent.mParameters.data.context;
		    this.sMasterContext = oEvent.mParameters.data.masterContext;
		
		    if(!this.sMasterContext) {
		        this.getView().bindElement("/" + this.sContext, oParams);
		    }
		    else {
		        this.getView().bindElement("/" + this.sMasterContext, oParams);
		    }
		
		}
		
	},
	_onListItemPress: function (oEvent) {
		var oListItem = oEvent.getParameter("listItem");
		var oBindingContext = oListItem.getBindingContext();
		
		return new ES6Promise.Promise(function(resolve, reject) {
		
		    this.doNavigate("14834444218114121_S1", oBindingContext, resolve, ""
		    );
		}.bind(this));
		
	},
	doNavigate: function (sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
		var that = this;
		var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		var oModel = (oBindingContext) ? oBindingContext.getModel() : null;
		
		var entityNameSet;
		if (sPath !== null && sPath !== "") {
		
		    if (sPath.substring(0, 1) === "/") {
		        sPath = sPath.substring(1);
		    }
		    entityNameSet = sPath.split("(")[0];
		}
		var navigationPropertyName;
		var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;
		
		if (entityNameSet !== null) {
		    navigationPropertyName = sViaRelation || that.getOwnerComponent().getNavigationPropertyForNavigationWithContext(entityNameSet, sRouteName);
		}
		if (navigationPropertyName !== null && navigationPropertyName !== undefined) {
		    if (navigationPropertyName === "") {
		        this.oRouter.navTo(sRouteName, {
		            context: sPath,
		            masterContext: sMasterContext
		        }, false);
		    } else {
		        oModel.createBindingContext(navigationPropertyName, oBindingContext, null, function (bindingContext) {
		            if (bindingContext) {
		                sPath = bindingContext.getPath();
		                if (sPath.substring(0, 1) === "/") {
		                    sPath = sPath.substring(1);
		                }
		            }
		            else {
		                sPath = "undefined";
		            }
		
		            // If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
		            if (sPath === "undefined") {
		                that.oRouter.navTo(sRouteName);
		            } else {
		                that.oRouter.navTo(sRouteName, {
		                    context: sPath,
		                    masterContext: sMasterContext
		                }, false);
		            }
		        });
		    }
		} else {
		    this.oRouter.navTo(sRouteName);
		}
		
		if (typeof fnPromiseResolve === "function") {
		    fnPromiseResolve();
		}
		
	},
	onInit: function () {
		this.mBindingOptions = {};
        this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        this.oRouter.getTarget("14834444218106545_S0").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
        var oView = this.getView();
        oView.addEventDelegate({
            onBeforeShow: function () {
                var oContent = this.getView().getContent();
                if (oContent) {
                    if (!sap.ui.Device.system.phone) {
                        var oList = oContent[0].getContent() ? oContent[0].getContent()[0] : undefined;
                        if (oList) {
                            var sContentName = oList.getMetadata().getName();
                            if (sContentName.indexOf('List') > -1) {
                                oList.attachEventOnce("updateFinished", function () {
                                    var oFirstListItem = this.getItems()[0];
                                    if (oFirstListItem) {
                                        oList.setSelectedItem(oFirstListItem);
                                        oList.fireItemPress({listItem: oFirstListItem});
                                    }
                                }.bind(oList));
                            }
                        }
                    }
                }
            }.bind(this)
        });


	}
});
}, /* bExport= */true);
