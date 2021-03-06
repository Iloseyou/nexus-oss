/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-2015 Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * Ssl Certificate detail panel.
 *
 * @since 3.0
 */
Ext.define('NX.coreui.view.ssl.SslCertificateDetailsPanel', {
  extend: 'NX.view.AddPanel',
  alias: 'widget.nx-coreui-sslcertificate-details-panel',
  requires: [
    'NX.Conditions',
    'NX.I18n'
  ],

  settingsForm: {
    xtype: 'nx-coreui-sslcertificate-details-form',
    buttons: [
      { text: NX.I18n.get('Ssl_SslCertificateDetailsWindow_Cancel_Button'),
        handler: function () {
          this.up('nx-drilldown').showChild(0, true);
        }
      }
    ]
  }

});
