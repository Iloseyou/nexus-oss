/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2007-2013 Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/**
 * System http settings form.
 *
 * @since 3.0
 */
Ext.define('NX.coreui.view.system.Http', {
  extend: 'NX.view.SettingsPanel',
  alias: 'widget.nx-coreui-system-http',
  requires: [
    'NX.coreui.view.AuthenticationSettings',
    'NX.coreui.view.HttpRequestSettings'
  ],

  items: [
    {
      xtype: 'nx-settingsform',
      settingsFormSuccessMessage: 'HTTP system settings $action',
      api: {
        load: 'NX.direct.coreui_SystemHttp.read',
        submit: 'NX.direct.coreui_SystemHttp.update'
      },
      editableCondition: NX.Conditions.isPermitted('nexus:settings', 'update'),
      editableMarker: 'You do not have permission to configure http',
      items: [
        // request settings
        {
          xtype: 'label',
          html: '<p>HTTP request settings.</p>'
        },
        {
          xtype: 'nx-coreui-httprequestsettings'
        },
        {
          xtype: 'nx-optionalfieldset',
          title: 'HTTP Proxy',
          checkboxToggle: true,
          checkboxName: 'httpEnabled',
          items: [
            {
              xtype: 'label',
              html: '<p>HTTP proxy settings.</p>'
            },
            {
              xtype: 'textfield',
              name: 'httpHost',
              fieldLabel: 'Host',
              allowBlank: false
            },
            {
              xtype: 'numberfield',
              name: 'httpPort',
              fieldLabel: 'Port',
              minValue: 1,
              maxValue: 65535,
              allowDecimals: false,
              allowBlank: false
            },
            {
              xtype: 'nx-optionalfieldset',
              title: 'Authentication',
              checkboxToggle: true,
              checkboxName: 'httpAuthEnabled',
              collapsed: true,
              items: {
                xtype: 'nx-coreui-authenticationsettings',
                namePrefix: 'http'
              }
            },
            {
              xtype: 'nx-valueset',
              name: 'nonProxyHosts',
              fieldLabel: 'Non Proxy Hosts',
              emptyText: 'enter a hostname',
              sorted: true
            }
          ]
        },

        {
          xtype: 'nx-optionalfieldset',
          title: 'HTTPS Proxy',
          checkboxToggle: true,
          checkboxName: 'httpsEnabled',
          collapsed: true,
          items: [
            {
              xtype: 'label',
              html: '<p>HTTPS proxy settings.</p>'
            },
            {
              xtype: 'textfield',
              name: 'httpsHost',
              fieldLabel: 'Host',
              allowBlank: false
            },
            {
              xtype: 'numberfield',
              name: 'httpsPort',
              fieldLabel: 'Port',
              minValue: 1,
              maxValue: 65535,
              allowDecimals: false,
              allowBlank: false
            },
            {
              xtype: 'nx-optionalfieldset',
              title: 'Authentication',
              checkboxToggle: true,
              checkboxName: 'httpsAuthEnabled',
              collapsed: true,
              items: {
                xtype: 'nx-coreui-authenticationsettings',
                namePrefix: 'http'
              }
            }
          ]
        }
      ]
    }
  ]

});