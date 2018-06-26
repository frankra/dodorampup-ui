sap.ui.define([
    "jquery.sap.global",
    "sap/m/MultiComboBox",
    "sap/m/ComboBox",
    "sap/m/DatePicker",
    "sap/m/MultiInput",
    "sap/m/Select",
    "sap/m/InputBase"
], function ($, MultiComboBox, ComboBox, DatePicker, MultiInput, Select, InputBase) {
    "use strict";

    function Validator(oView, oModel) {
        this._oView = oView;
        this._oModel = oModel;
    }

    /**
	 * Retrieves a map of default configurations based on a given field type.
	 *
	 * @param {sap.m.Input} oField the field to derive the type.
	 * @returns {Object} configuration map containing the default binding property and validator for the field type.
	 */
    Validator.prototype._getFieldDefaultConfiguration = function(oField) {
        var fnNullValidator = function(value) {
                return !!value;
            },
            sBindingProperty,
            sValue,
            fnValidator;

        if (oField instanceof MultiComboBox) {
            sBindingProperty = "selectedKeys";
            fnValidator = function(keys) {
                return !!keys && keys.length > 0;
            };
        } else if (oField instanceof ComboBox || oField instanceof Select) {
            sBindingProperty = "selectedKey";
            fnValidator = fnNullValidator;
        } else if (oField instanceof DatePicker) {
            sBindingProperty = "dateValue";
            fnValidator = function(date, datePicker) {
                var minDate = datePicker.getMinDate() || new Date();
                return (date instanceof Date) && (date > minDate);
            };
        } else if (oField instanceof MultiInput) {
            sValue = oField.getTokens();
            fnValidator = function(tokens) {
                return !!tokens && tokens.length > 0;
            };
        } else if (oField instanceof InputBase) {
            sBindingProperty = "value";
            fnValidator = function(value) {
                var sValueType = typeof value;
                if (sValueType === 'number' || sValueType === 'string'){
                    return value.toString().replace(/\s+/g, "").length > 0;
                }
                return false;
            };
        } else {
            sBindingProperty = "value";
            fnValidator = fnNullValidator;
        }

        return {
            binding: sBindingProperty,
            value: sValue,
            validator: fnValidator
        };
    };

    /**
	 * Resolves the given configurations into a new configuration set, containing the original
	 * parameters, the retrieved field object, its value and its validator.
	 *
	 * If no binding and/or validator is passed, a default set of binding/validator is deduced
	 * based on the field type.
	 *
	 * If no other parameter is passed despite the id, an array of strings can be used instead.
	 * Otherwise, an array of objects having the following pattern is expected:
	 * ```
	 * {
	 * 	"id": {any},
	 * 	"binding": {string},
	 * 	"value": {function|any},
	 * 	"validator": {function}
	 * }
	 * ```
	 *
	 * @param {Object[]} aConfigurations an array of configurations to resolve.
	 * @returns {Object[]} a new array, which was mapped based on the configurations.
	 */
    Validator.prototype._resolveFieldsConfigurations = function(aConfigurations) {
        var aResolvedConfigurations = [];

        aResolvedConfigurations = aConfigurations.map(function(mConfiguration) {
            if (!$.isPlainObject(mConfiguration)) {
                mConfiguration = {
                    id: mConfiguration
                };
            }

            if (mConfiguration.id === null || mConfiguration.id === undefined) {
                return mConfiguration;
            }

            var oField = this._oView.byId(mConfiguration.id) || sap.ui.getCore().byId(mConfiguration.id),
                mDefaultConfiguration = this._getFieldDefaultConfiguration(oField),
                sBindingProperty = mConfiguration.binding || mDefaultConfiguration.binding,
                oBinding = oField.getBinding(sBindingProperty),
                sFieldBindingPath = oField.getBindingPath(sBindingProperty),
                oValue = mConfiguration.value || mDefaultConfiguration.value;

            var oModel;

            if (oBinding && oBinding.getModel()){
                oModel = oBinding.getModel();
            } else {
                oModel = this._oModel;
            }

            if (oValue) {
                if (typeof oValue === "function") {
                    oValue = oValue();
                }
            } else {
                oValue = oModel.getProperty(sFieldBindingPath);
            }

            mConfiguration.field = oField;
            mConfiguration.value = oValue;
            mConfiguration.validator = mConfiguration.validator || mDefaultConfiguration.validator;

            return mConfiguration;
        }.bind(this));

        return aResolvedConfigurations;
    };

    /**
	 * Gets an array of field configurations, to resolve into the real field objects, values and
	 * validators, and validate them, setting the field objects with the appropriate Value State
	 * and returning true if all fields are valid, or false otherwise.
	 *
	 * If no other parameter is passed despite the id, an array of strings can be used instead.
	 * Otherwise, an array of objects having the following pattern is expected:
	 * ```
	 * {
	 * 	"id": {any},
	 * 	"binding": {string},
	 * 	"value": {function|any},
	 * 	"validator": {function}
	 * }
	 * ```
	 *
	 * @param {Object[]} aConfigurations an array of configurations to resolve.
	 * @param {boolean} bAvoidValueStates a boolean that indices whether value states should NOT be set.
	 * @returns {boolean} a boolean indicating whether the validation succeeded or failed.
	 */
    Validator.prototype._validateFields = function (aConfigurations, bAvoidValueStates) {
        var aClonedConfigurations = $.extend(true, [], aConfigurations),
            bIsValid = true;

        aClonedConfigurations = this._resolveFieldsConfigurations(aClonedConfigurations);

        aClonedConfigurations.forEach(function(mConfiguration) {
            var vResult = mConfiguration.validator(mConfiguration.value, mConfiguration.field, aClonedConfigurations),
                sValueState = "None";

            if (vResult !== true) {
                if (typeof vResult === "string" && mConfiguration.field && typeof mConfiguration.field.setValueStateText === "function") {
                    mConfiguration.field.setValueStateText(vResult);
                }

                sValueState = "Error";
                bIsValid = false;
            }

            if (!bAvoidValueStates && mConfiguration.field && typeof mConfiguration.field.setValueState === "function") {
                mConfiguration.field.setValueState(sValueState);
            }
        });

        return bIsValid;
    };

    /**
	 * Clears all validation states from the specified configurations.
	 *
	 * @param {Object[]} aConfigurations an array of configurations of the same type specified for validate
	 */
    Validator.prototype.clear = function(aConfigurations) {
        var aClonedConfigurations = $.extend(true, [], aConfigurations);

        aClonedConfigurations = this._resolveFieldsConfigurations(aClonedConfigurations);

        aClonedConfigurations.forEach(function(mConfiguration) {
            if (mConfiguration.field && typeof mConfiguration.field.setValueState === "function") {
                mConfiguration.field.setValueState("None");
            }
        });
    };

    Validator.prototype.validate = Validator.prototype._validateFields;

    return Validator;
});