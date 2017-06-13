sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, History) {
    "use strict";

    return BaseController.extend("generated.app.controller.14834444218114121_S1", {
    	handleRouteMatched: function (oEvent) {
		var oParams = {"expand":"Adresvan,Omzetvan"};
		
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
		
		    if (!this.sContext) {
		        this.getView().bindElement("/" + this.sMasterContext, oParams);
		    }
		    else {
		        this.getView().bindElement("/" + this.sContext, oParams);
		    }
		
		}
		
	},
	_onLinkPress: function (oEvent) {
		var sPopoverName = "";
		this.mPopovers = this.mPopovers || {};
		var oPopover = this.mPopovers[sPopoverName];
		var oSource = oEvent.getSource();
		var oBindingContext = oSource.getBindingContext();
		var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		var oModel = (oBindingContext) ? oBindingContext.getModel() : this.getView().getModel();
		var oView;
		if (!oPopover) {
		    this.getOwnerComponent().runAsOwner(function () {
		        oView = sap.ui.xmlview({viewName: "generated.app.view." + sPopoverName});
		        this.getView().addDependent(oView);
		        oView.getController().setRouter(this.oRouter);
		        oPopover = oView.getContent()[0];
		        oPopover.setPlacement("Auto" || "Auto");
		        this.mPopovers[sPopoverName] = oPopover;
		    }.bind(this));
		}
		
		return new ES6Promise.Promise(function (resolve, reject) {
		    oPopover.attachEventOnce("afterOpen", null, resolve);
		
		    oPopover.openBy(oSource);
		    if (oView) {
		        oPopover.attachAfterOpen(function () {
		            oPopover.rerender();
		        });
		    }
		    else {
		        oView = oPopover.getParent();
		    }
		    oView.setModel(oModel);
		    if (sPath) {
		        var oParams = oView.getController().getBindingParameters();
		        oView.bindElement(sPath, oParams);
		    }
		});
		
	},
	_onRowPress: function (oEvent) {
		var oBindingContext = oEvent.getSource().getBindingContext();
		
		return new ES6Promise.Promise(function(resolve, reject) {
		
		    this.doNavigate("14837063277854559_S2", oBindingContext, resolve, ""
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
	_onRowPress1: function (oEvent) {
		var oBindingContext = oEvent.getSource().getBindingContext();
		
		return new ES6Promise.Promise(function(resolve, reject) {
		
		    this.doNavigate("b651314f1cfdd4350d6064553_S3", oBindingContext, resolve, ""
		    );
		}.bind(this));
		
	},
	onAfterRendering: function () {
		
        var oBindingParameters;
        
        oBindingParameters = {"path":"Omzetvan","parameters":{}};
        this.getView().byId("sap_IconTabBar_Page_0-content-sap_m_IconTabBar-2-items-sap_m_IconTabFilter-1-content-sap_chart_ColumnChart-1483445757101").bindData(oBindingParameters);


	},
	onInit: function () {
		this.mBindingOptions = {};
        this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        this.oRouter.getTarget("14834444218114121_S1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
        var oView = this.getView();
        oView.addEventDelegate({
            onBeforeShow: function () {
                if (sap.ui.Device.system.phone) {
                    var oPage = oView.getContent()[0];
                    if (oPage.getShowNavButton && ! oPage.getShowNavButton()) {
                        oPage.setShowNavButton(true);
                        oPage.attachNavButtonPress(function () {
                            this.oRouter.navTo("14834444218106545_S0", {}, true);
                        }.bind(this));
                    }
                }
            }.bind(this)
        });

        var oView = this.getView();
        var oModel = new sap.ui.model.json.JSONModel();
        oView.setModel(oModel, 'staticDataModel');
    
        var oData = [{"Country":"India","City":"Bangalore","Revenue":"1538","Profit":"296","Dimension1":"2014","Measure1":"659.26"},{"Country":"Canada","City":"Ottawa","Revenue":"892","Profit":"141","Dimension1":"2008","Measure1":"758.38"},{"Country":"Canada","City":"Nunavut","Revenue":"789","Profit":"133","Dimension1":"2009","Measure1":"845.42"},{"Country":"India","City":"Delhi","Revenue":"2785","Profit":"560","Dimension1":"2014","Measure1":"674.16"},{"Country":"USA","City":"Chicago","Revenue":"2356","Profit":"489","Dimension1":"2010","Measure1":"995.26"},{"Country":"Japan","City":"Kariya","Revenue":"1987","Profit":"270","Dimension1":"2012","Measure1":"748.72"},{"Country":"India","City":"Mumbai","Revenue":"2538","Profit":"708","Dimension1":"2014","Measure1":"524.51"},{"Country":"Germany","City":"Breman","Revenue":"1245","Profit":"350","Dimension1":"2015","Measure1":"598.96"},{"Country":"Germany","City":"Berlin","Revenue":"1867","Profit":"369","Dimension1":"2015","Measure1":"185.46"},{"Country":"Canada","City":"Nunavut","Revenue":"1410","Profit":"245","Dimension1":"2008","Measure1":"789.38"},{"Country":"USA","City":"Dallas","Revenue":"2410","Profit":"576","Dimension1":"2010","Measure1":"790.32"},{"Country":"India","City":"Kolkata","Revenue":"2020","Profit":"459","Dimension1":"2010","Measure1":"965.85"},{"Country":"USA","City":"Seattle","Revenue":"2678","Profit":"358","Dimension1":"2010","Measure1":"685.39"},{"Country":"USA","City":"Omaha","Revenue":"3410","Profit":"760","Dimension1":"2010","Measure1":"798.32"},{"Country":"Japan","City":"Yatomi","Revenue":"1310","Profit":"270","Dimension1":"2012","Measure1":"896.15"},{"Country":"Japan","City":"Seiyo","Revenue":"1485","Profit":"325","Dimension1":"2012","Measure1":"779.65"}];
        oView.getModel("staticDataModel").setData({'sap_IconTabBar_Page_0-content-sap_m_IconTabBar-2-items-sap_m_IconTabFilter-1-content-sap_chart_ColumnChart-1483445757101':oData}, true);
        this.oBindingParameters = {"path":"Omzetvan","parameters":{}};
        oView.byId("sap_IconTabBar_Page_0-content-sap_m_IconTabBar-2-items-sap_m_IconTabFilter-1-content-sap_chart_ColumnChart-1483445757101").bindData(this.oBindingParameters);
    


	}
});
}, /* bExport= */true);
