/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "tryme/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("tryme.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
               //call the chatbot function
	this.getChatBot();
},

getChatBot: function() {
    //create the script tag as given in the global settings
    if (!document.getElementById("cai-webchat")) {
        var s = document.createElement("script");
           s.setAttribute("id", "cai-webchat");
          s.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
          document.body.appendChild(s);
        }
        s.setAttribute("channelId", "51ce9aa9-41f7-400e-948e-dbd894649e3c");
        s.setAttribute("token", "c7d70cb1a8a7caf2148d300e1341ec6d");
},
});
}
);